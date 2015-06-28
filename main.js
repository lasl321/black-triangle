'use strict';

let angle = 0;

const blackTriangle = document.querySelector('.black-triangle');

window.setInterval(
  () => {
    angle = (angle + 1) % 360;
    blackTriangle.style.transform = `rotate(${angle}deg)`;
  },
  20
);