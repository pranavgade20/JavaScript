var slider;
var vol;
var song;
var checkbox;

function preload() {
  song = loadSound('assets/sound.mp3');
  //song.disconnect();
}

function setup() {
   noCanvas();
   song.loop();

   slider = createSlider(-5, 5, -1, 0.1);
   vol = createSlider(0, 2, 1, 0.01);
   vol.position(10, 510);

   checkbox = createCheckbox('Playing', true);
   checkbox.changed(myCheckedEvent);
}
var xoff = 0.0;
function draw(){
	song.rate(slider.value());
   //song.rate(noise(xoff) * 2);
	song.amp(vol.value());
	xoff+=0.001;
}

function myCheckedEvent() {
  if (this.checked()) {
    song.loop();
  } else {
    song.stop();
  }
}
