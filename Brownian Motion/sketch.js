var smoke = [];
var n = 1000;

var slider;

function setup(){
   createCanvas(500, 500);
   background(0);

   slider = createSlider(0, 400, 273.5, 1);
   slider.position(10, 510);

   for(var i = 0; i <= n; i++){
      smoke[i] = new particle();
   }
}

function draw(){
   background(0, 20);
   
   for(var i = 0; i <= n; i++){
      smoke[i].update();
      smoke[i].show();
   }
}
function particle(){
   this.x = random(0, width);
   this.y = random(0, height);
   
   this.xSpeed = random(-1, 1);
   this.ySpeed = random(-1, 1);
   
   this.update = function(){
      this.x += this.xSpeed*(slider.value()/100);
      this.y += this.ySpeed*(slider.value()/100);
      
      if(this.x >= width || this.x <= 0){
         this.xSpeed *= -1;
      }
      if(this.y >= height || this.y <= 0){
         this.ySpeed *= -1;
      }
      
      if(slider.value() <= 273){
          this.xSpeed = random(-(slider.value()/400), (slider.value()/400));
          this.ySpeed = random(-(slider.value()/400), (slider.value()/400));//(sin(mouseY-this.y));
      }
   }
   
   this.show = function(){
      stroke(255);
      ellipse(this.x, this.y, 1, 1);
   }
}
