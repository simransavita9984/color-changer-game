const buttons = document.querySelectorAll('.color-box');
const body = document.querySelector('body');

buttons.forEach(function (button) {
  button.addEventListener('click', function (sim) {
    console.log(sim);
    console.log(sim.target);

    if (sim.target.id === 'color1') {
      body.style.background = "linear-gradient(45deg, #8e2de2, #4a00e0)"; // e.target.id;
    }
    if (sim.target.id === 'color2') {
      body.style.background = "linear-gradient(45deg, #00b09b, #96c93d)"; // e.target.id;
    }
    if (sim.target.id === 'color3') {
      body.style.background = "linear-gradient(45deg, #f12711, #f5af19)"; // e.target.id;
    }
    if (sim.target.id === 'color4') {
      body.style.background = "linear-gradient(45deg, #a34e84, #eaafc8)"; // e.target.id;
    }
    
  });
});

//professional way without hardcodeed

// const buttons = document.querySelectorAll('.color-box');
// const body = document.querySelector('body');

// buttons.forEach(function (button) {
//   button.addEventListener('click', function (e) {
//     const bgColor = window.getComputedStyle(button).backgroundImage;
//     body.style.background = bgColor;
//   });
// });

