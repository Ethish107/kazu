var rectangle;


function setup() {
  createCanvas(windowWidth,windowHeight);
}

function draw() {
  background(220);
 
  if(mouseIsPressed){

    fill(0,255,26);
  rectangle = circle(mouseX,mouseY,100);
    rectangle.lifetime = 10;
  }
  
  
drawSprites();
}