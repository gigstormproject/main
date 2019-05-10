
window.onload = loadContent();

function loadContent(){
  bandname = localStorage.getItem("band");
  getEvents();
  getInfo();
  getAlbumInfo();
}

function getEvents(){
  var urlBandId = "http://localhost:8081/php/lastFmApi.php?bandname=" + bandname + "&method=3&id=0";
  fetch(urlBandId)
  .then(function(response){
    return response.json();
  })
  .then(function(data){
    var id = data.resultsPage.results.artist[0].id;
    return fetch('http://localhost:8081/php/lastFmApi.php?bandname=undefined&method=4&id=' + id);
  })
  .then(function(response){
    return response.json();
  })
  .then(function(data){
    var events = data. resultsPage.results.event;
    var nextEvent = data.resultsPage.results.event[0].displayName;
    // hier elemente platzieren
    createEventTable(events);
    
  })
  .catch(function(error){
    console.log("Request failed", error)
  })
}

function getInfo(bandurl){
  var bandurl = "http://localhost:8081/php/lastFmApi.php?bandname=" + bandname + "&method=1&id=0";
  $.getJSON(bandurl, function(data) {
    let name = data.artist.name;
    let pic = data.artist.image[3]["#text"];
    let bio = data.artist.bio.summary;
    //let tags = data.artist.tags.tag[0].name;
    let ontour = data.artist.ontour =="0" ? false : true;
    document.getElementById("title").innerHTML = "GigStorm: " + name;
    document.getElementById("bandname").innerHTML = name;
    document.getElementById("bandpic").src = pic;
    document.getElementById("bandbio").innerHTML = bio;
    //document.getElementById("tags").innerHTML = tags;
    document.getElementById("ontour").innerHTML = ontour ? "On Tour" : "Not On Tour";
    document.getElementById("ontour").style.backgroundColor = ontour ? "green" : "red";
    //let related1 = data.artist.similar.artist[0].name; related page stub
  });
}

function getAlbumInfo(albumurl){
  var albumurl = "http://localhost:8081/php/lastFmApi.php?bandname=" + bandname + "&method=2&id=0";
  $.getJSON(albumurl, function(data) {
    var imageURLs = data.topalbums.album.map(album =>{
      array =[];
      array.push(album.image[3]["#text"]);
      return array;
    })
    for(var i=0; i< 10; i++){
      url = "url(" + imageURLs[i] + ")";
      album = "topalbum" + (i+1);
      document.getElementById(album).style.backgroundImage = url;
      document.getElementById(album).style.backgroundSize = "100%";
    }
  });   
}

function createEventTable(events){
  var list = document.createElement("LI");  
  var nextEvent = document.createTextNode(events[0].displayName);
  list.appendChild(nextEvent);
  document.getElementById("TourDates").appendChild(list);
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


