// Get the modal
var modal = document.getElementById('myModal');

// Get the button that opens the modal
var btn = document.getElementById("login-button");

// Get the <span> element that closes the modal
var span = document.getElementsByClassName("close")[0];

// When the user clicks on the button, open the modal 
btn.onclick = function() {
  modal.style.display = "block";
}

// When the user clicks on <span> (x), close the modal
span.onclick = function() {
  modal.style.display = "none";
}

// search bar function - stores Input in Web Storage

function goSearch() {
  
  if (typeof Storage !== "undefined") {
    // Store
    localStorage.setItem("band", document.getElementById("band").value);
  } else {
    // hier Fehlermeldungs-Popup?
    document.getElementById("result").innerHTML =
      "Sorry, your browser does not support Web Storage...";
  }
  window.location.href="band_profil.html";
}


var input = document.getElementById("band");
input.addEventListener("keyup", function(event) {
  if (event.keyCode === 13) {
   event.preventDefault();
   document.getElementById("bandSearch").click();
  }
});