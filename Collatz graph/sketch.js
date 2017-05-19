var slider;
var y;
var x = 5;
var temp;

function setup(){
   createCanvas(500, 500);
   background(200);

   slider = createSlider(0, 200, 22, 1);
   slider.position(10, 510);
   y = slider.value();
   temp = slider.value();
}

function draw(){
   translate(0, 50);
   if(temp!=slider.value()){
      y = slider.value();
      x = 5;
      background(200);
   }
   temp = slider.value();

   strokeWeight(5);
   beginShape();
   noFill();
   while(y!=1) {
      vertex(x, y*((1/slider.value())*200));
      y = collatz(y);
      x+=25;
   }
   endShape();
}

function collatz(k){
   if((k%2) == 0){
      return k/2;
   }else{
      return (k*3)+1;
   }
}