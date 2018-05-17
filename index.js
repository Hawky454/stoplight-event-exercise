(function() {
  'use strict';

let redLight =  document.getElementById('stopLight');
let yellowLight = document.getElementById('slowLight');
let greenLight = document.getElementById('goLight');

let controls = document.getElementById('controls');
let stopButton = document.getElementById('stopButton');
let slowButton = document.getElementById('slowButton');
let goButton = document.getElementById('goButton');

let stopLightOn = false;
let slowLightOn = false;
let goButtonOn = false;


stopButton.addEventListener('click', function() {
  // When you first select this button, turn the STOP LIGHT red.
  // When you select this button again, turn the STOP LIGHT black.
  if(stopLightOn === true) {
    redLight.style.backgroundColor = 'black';
    stopLightOn = false;
  } else {
      redLight.style.backgroundColor = 'red';
      stopLightOn = true;
    }
  });

  slowButton.addEventListener('click', function() {
    if(slowLightOn === true) {
      yellowLight.style.backgroundColor = 'black';
      slowLightOn = false;
    } else {
      yellowLight.style.backgroundColor = 'orange';
      slowLightOn = true;
    }
  });

goButton.addEventListener('click', function() {
  if(goButtonOn === true) {
    greenLight.style.backgroundColor = 'black';
    goButtonOn = false;
  } else {
    greenLight.style.backgroundColor = 'green';
    goButtonOn = true;
  }
});
})();
