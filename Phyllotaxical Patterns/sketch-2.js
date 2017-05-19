var c = 4;
var n = 0;

function setup() {
  createCanvas(500, 500);
  background(200);
  angleMode(DEGREES);
}

var x;
var y;

function draw() {
  translate(250, 250);
  
  var a = n * 137.5;
  var r = c * sqrt(n);
  
  x = r * cos(a);
  y = r * sin(a);
  
  stroke(255, 0, 0);
  strokeWeight(5);
  point(x, y);
  
  n++;
}