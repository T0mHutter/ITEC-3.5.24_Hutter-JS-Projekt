document.addEventListener("DOMContentLoaded", function() {
  document.getElementById("start").addEventListener("click", function() {
    //clearInterval(intervalId);
    manageDivColors();
    //changeColor();
  });
  document.getElementById("stop").addEventListener("click", function() {
    clearInterval(intervalId);
    resetLights();
  });
  document.getElementById("notbetrieb").addEventListener("click", function() {
    clearInterval(intervalId);
    alarmLights();
  });
});

let intervalId;

function changeColor() {
  var colors = ["red", "orange", "green"];
  var index = 0;
  intervalId = setInterval(function() {
    document.getElementById("lane1").style.backgroundColor = colors[index];
    index = (index + 1) % colors.length;
  }, 1000); 
}

function resetLights() {
  clearInterval(intervalId); 
  var color = "black";
  var lights = document.getElementsByClassName("light");
  for (var i = 0; i < lights.length; i++) {
    lights[i].style.backgroundColor = color;
  }
}

function alarmLights() {
  clearInterval(intervalId);
  var elements = document.querySelectorAll('.light');
  var colors = ['orange', 'black'];
  var index = 0;

  intervalId = setInterval(function() {
    elements.forEach(function(element) {
      element.style.backgroundColor = colors[index];
    });
    index = (index + 1) % colors.length;
  }, 700);
}



function cycle() {

  const divs = ["lane1", "lane2", "lane3", "lane4", "lane5", "lane6", "lane7", "lane8"];
  const colors = ["red", "yellow", "green", "yellow"];
  const durations = [4000, 4000, 40000, 4000];
  const currentdiv = [0,4]

  



}