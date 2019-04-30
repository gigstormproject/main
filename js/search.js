window.onload = search();


function search() {

  bandname = localStorage.getItem("band");
  var url = "http://localhost:8081/php/lastFmApi.php?bandname=" + bandname + "&method=1";
  var albumurl = "http://localhost:8081/php/lastFmApi.php?bandname=" + bandname + "&method=2";

  $.getJSON(url, function(data) {
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

    
  });

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


