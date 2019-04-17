/*diese Funktion schickt eine Anfrage an lastFmApi.php 
bandname "blur" ist momentan hardgecodet
*/

function getLastFm() {
  var bandname = ""

  var url = "http://localhost:8081/Bar/main/lastFmApi.php?bandname=logic";

  /*holt ein JSON file über lastFmApi.php 
    dann werden verschiedene variablen aus diesem json-files definiert (z.B. die url des bildes oder bandname)
    und über js (getElementbyId) an profil.html übergeben.
    So soll das profil.html immer die informationen über die aktuelle band auf profil.html angeben.
    */

  $.getJSON(url, function(data) {
    let name = data.artist.name;
    let pic = data.artist.image[3]["#text"];
    let bio = data.artist.bio.summary;
    let tags = data.artist.tags.tag[0].name;
    document.getElementById("bandname").innerHTML = name;
    document.getElementById("bandpic").src = pic;
    document.getElementById("bandbio").innerHTML = bio;
    document.getElementById("tags").innerHTML = tags;
  });
}

window.onload = getLastFm();
/*

Xhttp variante

/function loadLastFm() {
    var xhttp = new XMLHttpRequest();
    xhttp.onreadystatechange = function() {
      if (this.readyState == 4 && this.status == 200) {
        document.getElementById("test").innerHTML = "";
      }
    };
    xhttp.open("GET", "http://localhost:8081/Bar/main/lastFmApi.php?bandname=blur", true);
    xhttp.send();
}
*/

/*album slide */

$("#carouselExample").on("slide.bs.carousel", function(e) {
  var $e = $(e.relatedTarget);
  var idx = $e.index();
  var itemsPerSlide = 4;
  var totalItems = $(".carousel-item").length;

  if (idx >= totalItems - (itemsPerSlide - 1)) {
    var it = itemsPerSlide - (totalItems - idx);
    for (var i = 0; i < it; i++) {
      // append slides to end
      if (e.direction == "left") {
        $(".carousel-item")
          .eq(i)
          .appendTo(".carousel-inner");
      } else {
        $(".carousel-item")
          .eq(0)
          .appendTo(".carousel-inner");
      }
    }
  }
});

$("#carouselExample").carousel({
  interval: 2000
});
