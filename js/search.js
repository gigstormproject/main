function search() {
  bandname = localStorage.getItem("band");
  var url = "http://localhost:8081/lastFmApi.php?bandname=" + bandname + "&method=1";
  var albumurl = "http://localhost:8081/lastFmApi.php?bandname=" + bandname + "&method=2";

  /*holt ein JSON file über lastFmApi.php 
      dann werden verschiedene variablen aus diesem json-files definiert (z.B. die url des bildes oder bandname)
      und über js (getElementbyId) an profil.html übergeben.
      So soll das profil.html immer die informationen über die aktuelle band auf profil.html angeben.
      */

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
    let name = data.topalbums["@attr"].artist;
    let topalbum1 = data.topalbums.album[0].name;
    let topalbum1pic = data.topalbums.album[0].image[3]["#text"];
    document.getElementById("topalbum1").style.backgroundImage = 'url('+(topalbum1pic)+')';
    document.getElementById("topalbum1").style.backgroundSize = "100%";

    let topalbum2 = data.topalbums.album[1].name;
    let topalbum2pic = data.topalbums.album[1].image[3]["#text"];
    document.getElementById("topalbum2").style.backgroundImage = 'url('+(topalbum2pic)+')';
    document.getElementById("topalbum2").style.backgroundSize = "100%";

    let topalbum3 = data.topalbums.album[2].name;
    let topalbum3pic = data.topalbums.album[2].image[3]["#text"];
    document.getElementById("topalbum3").style.backgroundImage = 'url('+(topalbum3pic)+')';
    document.getElementById("topalbum3").style.backgroundSize = "100%";

    let topalbum4 = data.topalbums.album[3].name;
    let topalbum4pic = data.topalbums.album[3].image[3]["#text"];
    document.getElementById("topalbum4").style.backgroundImage = 'url('+(topalbum4pic)+')';
    document.getElementById("topalbum4").style.backgroundSize = "100%";

    let topalbum5 = data.topalbums.album[4].name;
    let topalbum5pic = data.topalbums.album[4].image[3]["#text"];
    document.getElementById("topalbum5").style.backgroundImage = 'url('+(topalbum5pic)+')';
    document.getElementById("topalbum5").style.backgroundSize = "100%";

    let topalbum6 = data.topalbums.album[5].name;
    let topalbum6pic = data.topalbums.album[5].image[3]["#text"];
    document.getElementById("topalbum6").style.backgroundImage = 'url('+(topalbum6pic)+')';
    document.getElementById("topalbum6").style.backgroundSize = "100%";

    let topalbum7 = data.topalbums.album[6].name;
    let topalbum7pic = data.topalbums.album[6].image[3]["#text"];
    document.getElementById("topalbum7").style.backgroundImage = 'url('+(topalbum7pic)+')';
    document.getElementById("topalbum7").style.backgroundSize = "100%";

    
    let topalbum8 = data.topalbums.album[7].name;
    let topalbum8pic = data.topalbums.album[7].image[3]["#text"];
    document.getElementById("topalbum8").style.backgroundImage = 'url('+(topalbum8pic)+')';
    document.getElementById("topalbum8").style.backgroundSize = "100%";

    
    let topalbum9 = data.topalbums.album[8].name;
    let topalbum9pic = data.topalbums.album[8].image[3]["#text"];
    document.getElementById("topalbum9").style.backgroundImage = 'url('+(topalbum9pic)+')';
    document.getElementById("topalbum9").style.backgroundSize = "100%";
    
    let topalbum10 = data.topalbums.album[9].name;
    let topalbum10pic = data.topalbums.album[9].image[3]["#text"];
    document.getElementById("topalbum10").style.backgroundImage = 'url('+(topalbum10pic)+')';
    document.getElementById("topalbum10").style.backgroundSize = "100%";
    
  });
}

window.onload = search();



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

// album slider
