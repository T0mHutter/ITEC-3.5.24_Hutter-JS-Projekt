let intervalId;
let timeoutIds = [];
let x= 1;

document.addEventListener("DOMContentLoaded", function() {
  document.getElementById("start").addEventListener("click", function() {
    clearInterval(intervalId);
    loopThroughDivs();
  });
  document.getElementById("stop").addEventListener("click", function() {
    clearInterval(intervalId);
    resetLights();
  });
  document.getElementById("notbetrieb").addEventListener("click", function() {
    clearInterval(intervalId);
    alarmLights();
  });

  var slider = document.getElementById("slider");
  x = slider.value; 

  slider.oninput = function() {
    x = slider.value;
  }
  
});


function resetLights() {
  clearInterval(intervalId); 
  timeoutIds.forEach(id => clearTimeout(id));
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

function loopThroughDivs() {
  const divs = document.querySelectorAll('.light');
  let index = 0;

  function initializeColors() {
    for (let i = 0; i < divs.length; i++) {
      divs[i].style.backgroundColor = 'red'; 
    }
  }

  function changeColor() {
    const activeIndices = [index, (index + 4) % divs.length];
    activeIndices.forEach(i => {
      divs[i].style.backgroundColor = 'yellow'; 
    });
    timeoutIds.push(setTimeout(() => {
      activeIndices.forEach(i => {
        divs[i].style.backgroundColor = 'green'; 
      });
    }, 4000/x));
    timeoutIds.push(setTimeout(() => {
      activeIndices.forEach(i => {
        divs[i].style.backgroundColor = 'yellow'; 
      });
    }, 40000/x));
    timeoutIds.push(setTimeout(() => {
      initializeColors(); 
      index = (index + 1) % divs.length;
    }, 44000/x));
  }

  initializeColors();
  changeColor();
  intervalId = setInterval(changeColor,44000/x); 
}
