
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

  createCanvas(750,550);
//creating things of games
  background=createSprite(100,300,100,100);
  background.addImage("obstacleImage",obstacleImage);
  
 //creating monkey
   monkey=createSprite(80,315,20,20);
 //adding image to monkey
   monkey.addAnimation("moving", monkey_running);
   monkey.scale=0.20;
  
   

  
   monkey.setCollider("rectangle",0,0,400,400);
   
  //creating invisible ground
   invisibleGround = createSprite(300,520,600,10);
   invisibleGround.visible = false;
  

  bananagroup=createGroup();
  obsaclegroup=createGroup();
 
  
}


function draw() {
  
  background(255);
         background.velocityX=-5;
         if (background.x < 250){
         background.x = background.width/2;
        }
   
    
  //creating gamestate contion
  if(gameState === PLAY){
 obstaclegroup.setVelocityEachX = -(4 + 3* Score/50)
    bananagroup.velocityX = -(4 + 3* Score/50)
   Score = Score + Math.round(getFrameRate()/60);

 if (background.x < 0){
background.x = background.width/2;
                                }
if(keyDown("space")&& monkey.y >= 400) {
monkey.velocityY = -20;

}

                                
  monkey.velocityY = monkey.velocityY + 0.8

                                //spawn obstacles AND banana
  obstacle();
 banana();
if(Obstaclegroup.isTouching(monkey)){
 gameState = END;
   }
 if(banangroup.isTouching(monkey)){
  obstaclegroup.destroyEach(0);
 bananagroup.destroyEach();
 bananacount=bananacount+1;
 
 }
}
   else if (gameState === END) {
 gameOver.visible= true;

background.velocityX = 0;
monkey.velocityY = 0
     

     
      //set lifetime of the game objects so that they are never destroyed
bananagroup.setLifetimeEach(-150);
 obstaclegroup.setVelocityXEach(0);
     
obstaclegroup.setLifetimeEach(-150);
bananagroup.setVelocityXEach(0);
    
   }

  //stop monkey from falling down
  
 
 
   drawSprites();
textSize(30);
fill("yellow");
text("survival time:"+Score0,30);
  
textSize(30);
fill("yellow");
text("banana:"+bananacount,50,60); monkey.collide(invisibleGround);
  
 
}

function reset(){
                    
  gameState=PLAY;
  
  obstaclegroup.destroyEach(); 
bananagroup.destoyEach();
  bananacount=0;
  Score=0;
}


function Obstacle(){


obstacle=createSprite(770,500,20,20);

 if(frameCount%300===0){

  obstacle.addImage(obstacleImage);
 obstacle.scale=0.3;
 obstacle.velocityX=-15;
                                                 obstacle.setCollider("rectangle",0,0,380,380);
obstacle.lifetime=150;
 }

 obstacle.add(obstacle);


}

function Banana(){
  
  banana=createSprite(800,200,20,20);

                                                       if(frameCount%100===0){
                                                       banana.y=Math.round(random(150,300));  
 banana.addImage(bananaImage);
banana.scale=0.2;
banana.velocityX=-10;
 banana.lifetime=150;
bananagroup .add(banana);
 
  
}




}