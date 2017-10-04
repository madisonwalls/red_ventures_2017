//Navigation

function navigation() {
    document.getElementById("dropdowns").classList.toggle("show");
}

window.onclick = function(event) {
  if (!event.target.matches('.dropdown-button')) {

  var links = document.getElementsByClassName("dropdown-items");
    var i;
    for (i = 0; i < links.length; i++) {
      var open = link[i];
      if (openDropdown.classList.contains('show')) {
        openDropdown.classList.remove('show');
      }
    }
  }
}
