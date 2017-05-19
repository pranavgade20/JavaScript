function setup(){
   createCanvas(100, 100);
   background(200);
   colorMode(HSB, 255);
   //pixelDensity(1);
    
   //capture = createCapture(VIDEO);
   //capture.size(500, 500);
}
var c = 0;
function draw(){
   noiseDetail(4, 0.85);
   //loadPixels();
   var b=0;
   for(var y = 0; y<height; y++){
   var a=0;
      for(var x = 0; x<width; x++){
         //var i = (x + y*width)*4;
         
         var n = noise(a, b, c)*255;
         /**
         pixels[i]=160;
         pixels[i+1]=255;
         pixels[i+2]=255;
         pixels[i+3]=200;
         **/
         
         stroke(n, 250, 250);
         point(x, y);
         a+=0.01;
      }
      b+=0.01;
   }
   //updatePixels();
   c+=0.01;
}