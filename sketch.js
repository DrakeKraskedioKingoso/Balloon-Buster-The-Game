var score = 0
var redGroup, pinkGroup, blueGroup, greenGroup;
var arrowGroup;
var bow, bowImage;
var arrow, arrowImage;
var backround, backroundImage, me, meImage;
var balloon1, balloon2, balloon3, balloon4;
var balloonImage1, balloonImage2, balloonImage3, balloonImage4;
function preload(){
 //load your images here 
  bowImage = loadImage("bow0.png");
  arrowImage = loadImage("arrow0.png")
  backroundImage = loadImage("Untitled.png");
  balloonImage1 = loadImage("green_balloon0.png");
  balloonImage2 = loadImage("blue_balloon0.png");
  balloonImage3 = loadImage("pink_balloon0.png");
  balloonImage4 = loadImage("red_balloon0.png");
}

function setup() {
  createCanvas(600, 600)
  //add code here
  arrowGroup = new Group();
    redGroup = new Group(); 
  pinkGroup = new Group();
   blueGroup = new Group();
   greenGroup = new Group();
  
  backround = createSprite (300, 300, 1200, 1200);
  backround.addImage("backround", backroundImage);
  backround.velocityX = -2;
  backround.scale = 1.5;

  bow = createSprite(570, 300, 10, 10);
  bow.addAnimation("bow", bowImage);

 
 
 
 
}

function draw() {

  //add code here
  
  background("Untititled.png")
  
  if (backround.x<231){
    backround.x = 300
  }
  if (keyWentDown ("space")){
      arrow = createSprite(570, 300, 10, 10);
  arrow.addImage("arrow", arrowImage);
  arrow.scale = 0.3;
    arrow.velocityX = -5 
    arrow.lifetime = 120
     arrow.y = mouseY
     arrowGroup.add(arrow);
  }
   bow.y = mouseY
  var selectBalloon = Math.round(random(1, 4));
   if (frameCount%80 === 0){
 if (selectBalloon === 1){
   spawnRedBalloon();
 } else if (selectBalloon === 2){
   spawnBlueBalloon();
 } else if (selectBalloon === 3){
   spawnGreenBalloon();
 } else{
   spawnPinkBalloon();
 }
}
  if (arrowGroup.isTouching(redGroup)){
    arrowGroup.destroyEach();
    redGroup.destroyEach();
    score = score+1;
  }
    if (arrowGroup.isTouching(pinkGroup)){
    arrowGroup.destroyEach();
    pinkGroup.destroyEach();
      score = score+1;
  }
    if (arrowGroup.isTouching(blueGroup)){
    arrowGroup.destroyEach();
    blueGroup.destroyEach();
      score = score+1;
  }
    if (arrowGroup.isTouching(greenGroup)){
    arrowGroup.destroyEach();
    greenGroup.destroyEach();
      score = score+1;
  }
   drawSprites();
  
  textSize(20);
  text("Score:" + score, 370, 20);
 
}
function spawnRedBalloon(){
  
  var balloon4 = createSprite(0, Math.round(random(20, 370)), 10, 10);
  balloon4.addImage("balloon4", balloonImage4)
  balloon4.velocityX = 3
  balloon4.lifetime = 200
  balloon4.scale = 0.09
   redGroup.add(balloon4);
  
}
function spawnPinkBalloon(){
  
  var balloon3 = createSprite(0, Math.round(random(20, 370)), 10, 10);
  balloon3.addImage("balloon3", balloonImage3)
  balloon3.velocityX = 3
  balloon3.lifetime = 200
  balloon3.scale = 1
   pinkGroup.add(balloon3);
  
}
function spawnBlueBalloon(){
  
  var balloon2 = createSprite(0, Math.round(random(20, 370)), 10, 10);
  balloon2.addImage("balloon2", balloonImage2)
  balloon2.velocityX = 3
  balloon2.lifetime = 200
  balloon2.scale = 0.09
  blueGroup.add(balloon2);
  
}
function spawnGreenBalloon(){
  
  var balloon1 = createSprite(0, Math.round(random(20, 370)), 10, 10);
  balloon1.addImage("balloon1", balloonImage1)
  balloon1.velocityX = 3
  balloon1.lifetime = 200
  balloon1.scale = 0.09
  
   greenGroup.add(balloon1);
}
