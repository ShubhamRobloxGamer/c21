var fixedRect, movingRect;
var car, wall
function setup() {
  createCanvas(1200,800);
  fixedRect = createSprite(600, 400, 50, 80);
  fixedRect.shapeColor = "green";
  fixedRect.debug = true;
  movingRect = createSprite(400,200,80,30);
  movingRect.shapeColor = "green";
  movingRect.debug = true;
  car = createSprite (1100,200,70,70);
  car.shapeColor = "cyan";
  car.velocityX = -2 
  wall = createSprite(200,200,50,50);
  wall.shapeColor = "green";
}

function draw() {
  background(0,0,0);  
  movingRect.x = World.mouseX;
  movingRect.y = World.mouseY;
if (isTouching(car, wall)){
  car.shapeColor = "red";
  wall.shapeColor = "red";
}
else {
  car.shapeColor = "cyan";
  wall.shapeColor = "green";
}
  drawSprites();
}
function isTouching(ob1, ob2){
  if (ob1.x - ob2.x < ob1.width/2 + ob2.width/2
    && ob1.x - ob2.x < ob1.width/2 + ob2.width/2
    && ob2.y - ob2.y < ob1.height/2 + ob2.height/2
    && ob1.y - ob2.y < ob1.height/2 + ob2.height/2) {
      return true;
    }
else {
return false
}}