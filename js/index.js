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

/* When the user clicks on <span> (x), close the modal
span.onclick = function() {
  modal.style.display = "none";
}
*/

// search bar function - stores Input in Web Storage

function goSearchBand() {
  
  if (typeof Storage !== "undefined") {
    localStorage.setItem("band", document.getElementById("bandInput").value);
    window.location.href="../pages/band_search.html";
  } else {
    alert("Storage not activated");
  }
  
}

function goSearchPub() {
  if (typeof Storage !== "undefined") {
    localStorage.setItem("pub", document.getElementById("pubInput").value);
    window.location.href="../pages/pub_search.html";
  } else {
    alert("Storage not activated");
  }
  
}

var inputBand = document.getElementById("bandInput");
input.addEventListener("keyup", function(event) {
  if (event.keyCode === 13) {
   event.preventDefault();
   document.getElementById("bandSearch").click();
  }
});


var inputPub = document.getElementById("pubInput");
input.addEventListener("keyup", function(event) {
  if (event.keyCode === 13) {
   event.preventDefault();
   document.getElementById("pubSearch").click();
  }
});

(function() {
  var isBootstrapEvent = false;
  if (window.jQuery) {
      var all = jQuery('*');
      jQuery.each(['hide.bs.dropdown', 
          'hide.bs.collapse', 
          'hide.bs.modal', 
          'hide.bs.tooltip',
          'hide.bs.popover'], function(index, eventName) {
          all.on(eventName, function( event ) {
              isBootstrapEvent = true;
          });
      });
  }
  var originalHide = Element.hide;
  Element.addMethods({
      hide: function(element) {
          if(isBootstrapEvent) {
              isBootstrapEvent = false;
              return element;
          }
          return originalHide(element);
      }
  });
})();