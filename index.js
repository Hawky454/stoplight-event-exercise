(function() {
  'use strict';

let redLight =  document.getElementById('stopLight');
let yellowLight = document.getElementById('slowLight');
let greenLight = document.getElementById('goLight');

let controls = document.getElementById('controls');
let stopButton = document.getElementById('stopButton');
let slowButton = document.getElementById('slowButton');
let goButton = document.getElementById('goButton');

//let trafficLight = document.getElementById('traffic-light');

//ask Louis how to get a class.
//let bulb = document.getElemtsByClass('.bulb');

let stopLightOn = false;
let slowLightOn = false;
let goLightOn = false;


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
  if(goLightOn === true) {
    greenLight.style.backgroundColor = 'black';
    goLightOn = false;
  } else {
    greenLight.style.backgroundColor = 'green';
    goLightOn = true;
  }
});



// controls.addEventListener('click', function () {
//   console.log(`Entered ${event.target.textContent} button`);
//   switch (event.target.textContent) {
//     case 'Stop':
//
//       break;
//     case 'Slow':
//
//       break;
//     case 'Go':
//
//       break;
//     default:
//
//   }
//   //console.log("Event target", event.target);
// });
//still confused about the using the switch statement^^


//Part 2 add new DOM events listeners and handlers to log the mouse state of //each button to the console


stopButton.addEventListener('mouseenter', function() {
  console.log(`Entered ${event.target.textContent} button`);
});
stopButton.addEventListener('mouseleave', function() {
  console.log(`Left ${stopButton.textContent} button`);
});

//slowButton
slowButton.addEventListener('mouseenter', function() {
  console.log(`Entered ${event.target.textContent} button`);
});
slowButton.addEventListener('mouseleave', function() {
  console.log(`Left ${event.target.textContent} button`);
});

//goButton
goButton.addEventListener('mouseenter', function() {
  console.log(`Entered ${event.target.textContent} button`);
});
goButton.addEventListener('mouseleave', function() {
  console.log(`Left ${goButton.textContent} button`);
});





//Bonus

controls.addEventListener('click', function() {
  if((stopLightOn === true)  || (slowLightOn === true) || (goLightOn === true))  {
    console.log(`${event.target.textContent} bulb on`);
  } else {
    console.log(`${event.target.textContent} bulb off`);
 }
});

})();
