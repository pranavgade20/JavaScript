function setup() {
  createCanvas(500, 500);
  background(200);
}

var xoff = 0.01;
var x = 0;
var a = 0;

function draw() {
  var y = (noise(xoff) * 100) + a;
  xoff += 0.01;
  x++;
  point(x, y);
  if(mouseIsPressed){
    x = 0;
    a++;
  }
}