'use strict';

import BlackTriangle from "./BlackTriangle";

const triangle = new BlackTriangle('#triangle');

window.setInterval(
  () => {
    triangle.rotate(1);
    triangle.render();
  },
  20
);

console.log('Change me for reload');
