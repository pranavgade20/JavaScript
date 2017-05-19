k = 7;

function setup() {
   createCanvas(500, 500);
   background(200);
   angleMode(DEGREES);
   translate(250, 250);
}

a = 0;
var x;
var y;

function draw(){
   translate(250, 250);

   x = 200*cos(k*a)*cos(a);
   y = 200*cos(k*a)*sin(a);

   stroke(0);
   strokeWeight(3);
   point(x, y);
   a++;
}
