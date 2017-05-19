var reset;
var resP;

function setup() {
   createCanvas(500, 500);
   background(200);
   noCursor();
   
   reset = createButton('Reset');
   reset.position(10, 510);
   reset.mousePressed(rst);
}

var xTurn = false;
var plays = [];

function draw() {
   background(200);
   grid();

   if(!xTurn){
      x(mouseX, mouseY);
   }else{
      o(mouseX, mouseY);
   }
   for(var a = 0; a<9; a++){
      if(plays[a] == null){
         continue;
      }
      if(plays[a]){
         x((((a%3))*(width/3))+width/6, ((a-(a%3))/3 * height/3)+height/6);
      }
      if(!plays[a]){
         o((((a%3))*(width/3))+width/6, ((a-(a%3))/3 * height/3)+height/6);;
      }
   }
}

function grid(){
   stroke(0);
   strokeWeight(5);

   line(width/3, 0, width/3, height);
   line(2*width/3, 0, 2*width/3, height);
   line(0, height/3, width, height/3);
   line(0, 2*height/3, width, 2*height/3);
}

function o(x, y){
   stroke(0);
   strokeWeight(5);
   noFill();
   ellipse(x, y, width/4, height/4);
}

function x(x, y){
   stroke(0);
   strokeWeight(5);
   line(x, y, x+(width/8), y+(height/8));
   line(x, y, x-(width/8), y+(height/8));
   line(x, y, x+(width/8), y-(height/8));
   line(x, y, x-(width/8), y-(height/8));
}

function mousePressed(){
   xTurn = !xTurn;
   if(mouseX<=width &&mouseY<=height){
      put();
   }
}

function put(){
this.pos = 0;
   for(var i = 0; i<3; i++){//for columns
      if(mouseY>=i*width/3 && mouseY<(i+1)*width/3){
         this.pos+=(i*3);
      }
   }
   for(var i = 0; i<3; i++){//for columns
      if(mouseX>=i*width/3 && mouseX<(i+1)*width/3){
         this.pos+=i;
      }
   }
   if(xTurn){
      plays[this.pos] = true;
   }else{
      plays[this.pos] = false;
   }
}

function rst(){
   for(var i = 0; i<9; i++){
      plays[i] = null;
   }
   plays[0] = null;
   loop();
}
