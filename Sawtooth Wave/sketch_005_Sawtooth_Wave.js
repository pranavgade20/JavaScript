function setup() {
  createCanvas(500, 500);
  background(200);
}

var x = 0;
var y = 0;
var flag = true;

function draw() {
  translate(0, 250);
  point(x, y);
  x+=1;
  if(flag==true){
    y+=2;
    if(y>50){
      flag = false;
    }
  }
  if(flag==false){
    y-=2;
    if(y<-50){
      flag = true;
    }
  }
}