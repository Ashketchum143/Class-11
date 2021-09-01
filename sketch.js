var seaImg;
var shipImg1;
function preload(){
seaImg = loadImage("sea.png");
shipImg1 = addAnimation("ship-1.png, ship-2.png")
}
function setup(){
  createCanvas(400,400);
  seaImg = createSprite(50,160,20,50)
  spriteName.addImage(seaImg);
  seaImg.scale = 0.5;
  seaImg.x = 50
}

function draw() {
  background("blue");
  if(seaImg.x < 0){
     seaImg.x = sea.width/2;
  }
  seaImg.velocityY = seaImg.velocityY + 0.5;
  drawSprites();
}