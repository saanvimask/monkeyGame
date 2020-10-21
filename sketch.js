
var monkey , monkey_running
var banana ,bananaImage, obstacle, obstacleImage
var FoodGroup, obstacleGroup
var score

function preload(){
  
  
  monkey_running =            loadAnimation("sprite_0.png","sprite_1.png","sprite_2.png","sprite_3.png","sprite_4.png","sprite_5.png","sprite_6.png","sprite_7.png","sprite_8.png")
  
  bananaImage = loadImage("banana.png");
  obstaceImage = loadImage("obstacle.png");
 
}



function setup() {
 monkey=createSprite(80,315,20,20)
  monkey.addAnimation("moving",monkey_running)
  monkey.scale=0.1
  
ground=createSprite(400,350,900,10)
 ground.velocityX=-4
  
  obstacleGroup=createGroup()
  FoodGroup=createGroup()
  
  score=0
}


function draw() {
  background("lightblue")
   monkey.velocityY= monkey.velocityY+0.8;
  ground.x=ground.width/2
  console.log(ground.x)
  if(keyDown("space")){
    monkey.velocityY=-13;
  }
  monkey.collide(ground)
  
if(obstacleGroup.isTouching(monkey)){
   obstacleGroup.setLifetimeEach(-1);
    FoodGroup.setLifetimeEach(-1);
     
     obstacleGroup.setVelocityXEach(0);
    FoodGroup.setVelocityXEach(0); 
  textSize(30)
   text("!!!GAMEOVER!!!",100,200)
   
   }
     
     if(FoodGroup.isTouching(monkey)){
    score=score+1;
    FoodGroup.destroyEach();
  }
     
  stroke("white");
  textSize(20);
  fill("black");
  text("Score:"+score,280,50);

  
   stroke("black");
  textSize(20);
  fill("black");
  survivalTime=Math.ceil(frameCount/frameRate()) 
  text("Survival Time: "+ survivalTime, 70,50);

  Food()
SpawnObstacles()
drawSprites()
  
 }

function SpawnObstacles(){
  if(World.frameCount%100===0){
     obstacle=createSprite(550,320,10,10);
     obstacle.addImage(obstaceImage)
     obstacle.scale=0.1;
     obstacle.velocityX=-3;
     obstacle.lifetime=180;
     obstacleGroup.add(obstacle);
     
     }
}
function Food(){
if(World.frameCount%300===0){
   banana=createSprite(500,random(120,200),10,10)
   banana.addImage(bananaImage)
  banana.velocityX=-2
  banana.scale=0.1
  banana.lifetime=300
   FoodGroup.add(banana)
}
  
  
}