var refresh;
var wave;

function setup() {
  createCanvas(500, 500);
  background(200);
  angleMode(DEGREES);

  refresh = createButton('Click to Refresh');
  refresh.position(10, 510);

  wave = createSlider(0, 6.25, 1, 0.01);
}

var x = 0;
var y1 = 0;
var y2 = 0;
var t = 0;

function draw() {
  translate(0, 250);

  refresh.mousePressed(resetWave);

  y2 = sin(t)*100;
  x+=wave.value();
  t+=5;
  line(x, y1, (x+1), y2);
  y1 = y2;
}

function resetWave(){
  background(200);
  t = 0;
  x = 0;
  y1 = 0;
  y2 = 0;
}
