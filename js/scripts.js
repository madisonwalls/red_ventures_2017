//Navigation

function navigation() {
    document.getElementById("dropdowns").classList.toggle("show");
}

window.onclick = function(event) {
  if (!event.target.matches('.dropdown-button')) {

  var links = document.getElementsByClassName("dropdown-items");
    var i;
    for (i = 0; i < links.length; i++) {
      var open = links[i];
      if (openDropdown.classList.contains('show')) {
        openDropdown.classList.remove('show');
      }
    }
  }
}

//map

var x = 1;

function mapPopulate() {
  console.log(x)
  console.log("circle" + x);
  if ((x%3) === 0 ) {
  document.getElementById("circle" + x).style.fill = "#E0303D";
  }
  x = x + 1;

}


//drag elements

function revealStart(event) {
    event.dataTransfer.setData("Text", event.target.id);
}

function revealStart1(event) {
    event.dataTransfer.setData("Text", event.target.id);
}
function revealStart2(event) {
    event.dataTransfer.setData("Text", event.target.id);
}

function allowReveal(event) {
    event.preventDefault();
}

function allowReveal1(event) {
    event.preventDefault();
}

function allowReveal2(event) {
    event.preventDefault();
}

function reveal(event) {
    event.preventDefault();
    var data = event.dataTransfer.getData("Text");
    event.target.appendChild(document.getElementById(data));
    document.getElementById("revealed-text").innerHTML = "Wi-fi</br> Router";
}


function reveal1(event) {
    event.preventDefault();
    var data = event.dataTransfer.getData("Text");
    event.target.appendChild(document.getElementById(data));
    document.getElementById("revealed-text1").innerHTML = "Internet</br>Activation";
}


function reveal2(event) {
    event.preventDefault();
    var data = event.dataTransfer.getData("Text");
    event.target.appendChild(document.getElementById(data));
    document.getElementById("revealed-text2").innerHTML = "NO</br> Contract";
}
