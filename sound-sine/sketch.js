var slider;
var osc;
var f;
var auto;
var autoLoop = true;

function setup() {
   createCanvas(1024, 255);
   // song.loop();
   osc = new p5.Oscillator();
   osc.setType('sine');
   osc.freq(200);
   osc.amp(1);
   osc.start();
   slider = createSlider(0, 30000, 2000, 5);
   slider.position(10, 280);
   auto = createCheckbox('Auto loop', true);
   auto.changed(toggleMode);

   f = new p5.FFT();
}

var anl;
var a = 0;
var fre = 0;
function draw(){
  background(100, 20);

  if(autoLoop){
    fre+=15;
  }else{
    fre = slider.value();
  }
  osc.freq(fre);

	anl = f.analyze();

  stroke(0, 255., 0);
  strokeWeight(1);
  for (var i = 0; i < anl.length; i++) {
    var len = 255-anl[i];
    line(i, len, i, height);
  }

  if(!mouseIsPressed){
    a+=0.1;
  }
}

function toggleMode(){
  if(autoLoop){
    autoLoop = false;
  }else{
    autoLoop = true;
  }
}