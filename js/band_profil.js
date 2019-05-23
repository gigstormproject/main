
window.onload = loadContent();

function loadContent(){
  bandname = getCookie("band");
  var urlBandId = "http://localhost:8081/php/lastFmApi.php?searchterm=" + bandname + "&method=3&id=0";
  fetch(urlBandId)
  .then(function(response){
    return response.json();
  })
  .then(function(data){
    document.getElementById("loadingBar").style.width = "20%";
    let id = data.resultsPage.results.artist[0].id;
    return fetch('http://localhost:8081/php/lastFmApi.php?searchterm=undefined&method=4&id=' + id);
  })
  .then(function(response){
    return response.json();
  })
  .then(function(data){
    document.getElementById("loadingBar").style.width = "30%";
    var events = data.resultsPage.results.event;
    createEventTable(events);
  })
  .catch(function(error){
    return;
  })
  .then(() => {
    var bandInfo = "http://localhost:8081/php/lastFmApi.php?searchterm=" + bandname + "&method=5&id=0";
    return fetch(bandInfo);
  })
  .then(function(response){
    return response.json();
  })
  .then(function(data){
    document.getElementById("loadingBar").style.width = "40%";
    let bandpic = data.data[0].picture_medium;
    let id = data.data[0].id;
    document.getElementById("bandpic").src = bandpic;
    return fetch('http://localhost:8081/php/lastFmApi.php?searchterm=undefined&method=6&id=' + id)
  })
  .then(function(response){
    return response.json();
  })
  .then(function(data){
    document.getElementById("loadingBar").style.width = "50%";
    data.data.forEach(function(artist, i){
      url = "url(" + artist.picture_big + ")";
      relatedPic = "relatedPic" + (i+1);
      relatedName = "relatedName" + (i+1);
      deezerLink = "deezerLink" + (i+1);
      deezerURL = artist.link;
      document.getElementById(relatedPic).style.backgroundImage= url;
      document.getElementById(relatedPic).style.backgroundSize = "100%";
      document.getElementById(relatedName).innerHTML = artist.name;
      document.getElementById(deezerLink).setAttribute('href', deezerURL);
    })
  })
  .catch(function(error){
    return;
  })
  .then(() => {
    document.getElementById("loadingBar").style.width = "60%";
    var bandurl = "http://localhost:8081/php/lastFmApi.php?searchterm=" + bandname + "&method=1&id=0";
    return fetch(bandurl);
  })
  .then(function(response){
    return response.json();
  })
  .then(function(data){
    document.getElementById("loadingBar").style.width = "70%";
    let name = data.artist.name;
    let bio = data.artist.bio.summary;
    //let tags = data.artist.tags.tag[0].name;
    let ontour = data.artist.ontour =="0" ? false : true;
    document.getElementById("title").innerHTML = "GigStorm: " + name;
    document.getElementById("bandname").innerHTML = name;
    document.getElementById("bandbio").innerHTML = bio;
    //document.getElementById("tags").innerHTML = tags;
    document.getElementById("ontour").innerHTML = ontour ? "On Tour" : "Not On Tour";
    document.getElementById("ontour").style.backgroundColor = ontour ? "green" : "red";
    document.getElementById("ontour").style.animation = "swing-in 1s linear both 1s";
    //let related1 = data.artist.similar.artist[0].name; related page stub
  })
  .catch(function(error){
    return;
  })
  .then(() => {
    var albumurl = "http://localhost:8081/php/lastFmApi.php?searchterm=" + bandname + "&method=2&id=0";
    return fetch(albumurl);
  })
  .then(function(response){
    return response.json();
  })
  .then(function(data){
    document.getElementById("loadingBar").style.width = "90%";
    var imageURLs = data.topalbums.album.map(album =>{
      array =[];
      array.push(album.image[3]["#text"]);
      return array;
    })
    // array.for each?
    for(var i=0; i< 10; i++){
      url = "url(" + imageURLs[i] + ")";
      album = "topalbum" + (i+1);
      document.getElementById(album).style.backgroundImage = url;
      document.getElementById(album).style.backgroundSize = "100%";
    }
  })
  .then(() =>{
    document.getElementById("loadingContainer").style.animation = "disappear 1s ease-out both";
    var invisibleStuff = document.getElementsByClassName("invisible");
    Array.from(invisibleStuff).forEach((el) => {
      el.className = "visible";
      el.style.animation = "appear 1s ease-in both";
    });
  })
  .catch(function(error){
    console.log("Request failed", error)
  })
}
function createEventTable(events){
  var eventsArray = events.map( event =>{
    var eventObject = {date: event.start.date, venue: event.venue.displayName, location: event.location.city}
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



    