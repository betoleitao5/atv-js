window.onload = function () {
  let clickDiv = document.getElementById("click-div");
  clickDiv.onclick = incrementClick;

}

var counterVal = 0;

incrementClick = function() {
  updateDisplay(++counterVal);
}

function updateDisplay(val) {
  document.getElementById("counter-label").innerHTML = val;
}

