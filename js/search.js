function search(){
  
    bandname = localStorage.getItem("band");
    var url = "http://localhost:8081/Bar/main/lastFmApi.php?bandname=" + bandname;
    
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

window.onload = search();