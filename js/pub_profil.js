window.onload = loadContent();

function loadContent(){
  pubName = getCookie("pub");
  var urlPubId = "http://localhost:8081/php/lastFmApi.php?searchterm=" + pubName + "&method=7&id=0";

  fetch(urlPubId)
  .then(function(response){
    return response.json();
  })
  .then(function(data){
    document.getElementById("loadingBar").style.width = "25%";
    let id = data.resultsPage.results.venue[0].id;
    var name = data.resultsPage.results.venue[0].displayName;
    var website = data.resultsPage.results.venue[0].website;
    var street = data.resultsPage.results.venue[0].street;
    var zipcode = data.resultsPage.results.venue[0].zip;
    var city = data.resultsPage.results.venue[0].city.displayName;
    var country = data.resultsPage.results.venue[0].city.country.displayName;
    var phone = data.resultsPage.results.venue[0].phone;
    var location = street + ", " + zipcode + " " + city + ", " + country;

    document.getElementById("website").innerHTML = website + " // " + phone ;
    document.getElementById("pubName").innerHTML = name;
    document.getElementById("location").innerHTML = location;
    return fetch('http://localhost:8081/php/lastFmApi.php?searchterm=undefined&method=8&id=' + id);
  })
  .then(function(response){
    return response.json();
  })
  .then(function(data){
    document.getElementById("loadingBar").style.width = "45%";
    var events = data.resultsPage.results.event;
    createEventTable(events);
  })
  fetch(urlPubId)
  .then(function(response){
    return response.json();
  })
  .then(function(data){
 
    let lat = data.resultsPage.results.venue[0].lat;
    let lng = data.resultsPage.results.venue[0].lng ;
    document.getElementById("loadingBar").style.width = "65%";
    return fetch('http://localhost:8081/php/geoData.php?method=1&lat='+ lat + "&lng=" + lng + "&id=undefined");
  })
  .then(function(response){
    return response.json();
  })
  .then(function(data){
    document.getElementById("loadingBar").style.width = "85%";
    let id = data.response.venues[0].id;
    return fetch('http://localhost:8081/php/geoData.php?method=2&lat=undefined&lng=undefined&id=' + id);
  })
  .then(function(response){
    return response.json();
  })
  .then(function(data){
    document.getElementById("loadingBar").style.width = "100%";
    pubPicUrl1 = data.response.venue.bestPhoto.prefix;
    size = "250x250";
    pubPicUrl2 = data.response.venue.bestPhoto.suffix;
    pubPicUrlFinal = pubPicUrl1 + size + pubPicUrl2;
    document.getElementById("pubPic").src = pubPicUrlFinal;
    document.getElementById("loadingContainer").style.animation = "disappear 1s ease-out both";
    var test = document.getElementsByClassName("invisible");
    console.log(test);
    Array.from(test).forEach((el) => {
      el.className = "visible";
      el.style.animation = "appear 1s ease-in both";
    });


    //tag1 = data.response.venue.categories[0].name;
    //tag2 = data.response.venue.categories[1].name;
    //tags = tag1 + " // " + tag2;
    //document.getElementById("tags").innerHTML = tags;

  })
  .catch(function(error){
    return;
  })
}



function createEventTable(events){
  var eventsArray = events.map( event =>{
    var eventObject = {Date: event.start.date, Name: event.displayName}
    return eventObject;
  })
  let table = document.getElementById("TourDates");
  let data = Object.keys(eventsArray[0]);
  generateTableHead(table, data);
  generateTable(table, eventsArray);
}
function generateTableHead(table, data) {
  let thead = table.createTHead();
  let row = thead.insertRow();
  for (let key of data) {
    let th = document.createElement("th");
    let text = document.createTextNode(key);
    th.appendChild(text);
    row.appendChild(th);
  }
}
function generateTable(table, data) {
  for (let element of data) {
    let row = table.insertRow();
    for (key in element) {
      let cell = row.insertCell();
      let text = document.createTextNode(element[key]);
      cell.appendChild(text);
    }
  }
}

function getCookie(cname) {
  var name = cname + "=";
  var decodedCookie = decodeURIComponent(document.cookie);
  var ca = decodedCookie.split(';');
  for(var i = 0; i < ca.length; i++) {
    var c = ca[i];
    while (c.charAt(0) == ' ') {
      c = c.substring(1);
    }
    if (c.indexOf(name) == 0) {
      return c.substring(name.length, c.length);
    }
  }
  return "";
}

// album swiper for top albums
$.getScript('https://cdnjs.cloudflare.com/ajax/libs/Swiper/3.3.1/js/swiper.min.js', function()
{
  var swiper = new Swiper('.swiper-container', {
    effect: 'coverflow',
    loop: true,
    centeredSlides: true,
    slidesPerView: 3,
    initialSlide: 3,
    keyboardControl: true,
    mousewheelControl: true,
    lazyLoading: true,
    preventClicks: false,
    preventClicksPropagation: false,
    lazyLoadingInPrevNext: true,
    nextButton: '.swiper-button-next',
    prevButton: '.swiper-button-prev',
    coverflow: {
      rotate: 0,
      stretch: 0,
      depth: 250,
      modifier: 1,
      slideShadows : false,
    }
  });
});


