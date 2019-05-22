window.onload = loadContent();

function loadContent(){
  pubName = localStorage.getItem("pub");
  //getLastFMData();
 // getAlbumInfo();
  getSongKickInfo();
  //getDeezerData();
}

function getSongKickInfo(){
  var urlPubId = "http://localhost:8081/php/lastFmApi.php?searchterm=" + pubName + "&method=7&id=0";
  fetch(urlPubId)
  .then(function(response){
    return response.json();
  })
  .then(function(data){
    let id = data.resultsPage.results.venue[0].id;
    return fetch('http://localhost:8081/php/lastFmApi.php?searchterm=undefined&method=8&id=' + id);
  })
  .then(function(response){
    return response.json();
  })
  .then(function(data){
    var events = data.resultsPage.results.event;
    createEventTable(events);
  })
  .catch(function(error){
    console.log("Request failed", error)
  })
}

function getDeezerData(){
  var bandInfo = "http://localhost:8081/php/lastFmApi.php?searchterm=" + bandname + "&method=5&id=0";
  fetch(bandInfo)
  .then(function(response){
    return response.json();
  })
  .then(function(data){
    let bandpic = data.data[0].picture_medium;
    console.log(bandpic);
    let id = data.data[0].id;
    document.getElementById("bandpic").src = bandpic;
    return fetch('http://localhost:8081/php/lastFmApi.php?searchterm=undefined&method=6&id=' + id)
  })
  .then(function(response){
    return response.json();
  })
  .then(function(data){
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


