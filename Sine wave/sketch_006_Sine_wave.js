function setup() {
  createCanvas(500, 500);
  background(200);
  angleMode(DEGREES);
}

var x = 0;
var y = 0;
var t = 0;

function draw() {
  translate(0, 250);
  y = sin(t)*100;
  x++;
  t+=5;
  point(x, y);
  console.log(x, y);
}