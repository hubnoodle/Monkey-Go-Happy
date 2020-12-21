  var monkey , monkey_running
  var banana ,bananaImage, obstacle, obstacleImage
  var FoodGroup, obstacleGroup
  var survivalTime
  var ground

  function preload(){
    
  monkey_running =   loadAnimation("sprite_0.png","sprite_1.png","sprite_2.png","sprite_3.png","sprite_4.png","sprite_5.png","sprite_6.png","sprite_7.png","sprite_8.png")
  
  bananaImage = loadImage("banana.png");
  obstacleImage = loadImage("obstacle.png");
 
  }

  function setup() {
  
  monkey = createSprite(80,315,20,20);
  monkey.addAnimation("moving",monkey_running);
  monkey.scale = .1;
  
  ground = createSprite(200,350,900,10);
  ground.velocityX = -4;
  console.log(ground.x);  

  FoodGroup = createGroup();
  obstacleGroup = createGroup();
  
  FoodGroup = new Group();
  obstacleGroup = new Group();
  
  var survivalTime = 0;
  
  }

  function draw() {
    
  background("white");
  
  banana();
  obstacle();
  
  if(ground.x < 0){
    ground.x = ground.width/2;
    
  }
  
  if(keyDown("space")&& monkey.y >= 100) {
    
    monkey.velocityY = -12;
  
  }
    
  monkey.velocityY = monkey.velocityY + 0.8
  monkey.collide(ground);
  
  drawSprites();
  
  stroke("black");
  textSize(20);
  fill("black");
  survivalTime = Math.round(frameCount/frameRate());
  text("Survival Time: " + survivalTime,100,50);
    
  }

  function obstacle(){
  
  if(frameCount % 300 === 0){
    
    var obstacle = createSprite(400,315,20,20);
    
    obstacle.addAnimation("obstacle",obstacleImage);
    obstacle.scale = .1;
    obstacleGroup.add(obstacle);
    
    obstacle.velocityX = -4;
    obstacle.setLifetime = 50;
    
  }
    
  }
  
  function banana(){
  
  if(frameCount % 80 === 0){
    
  var banana= createSprite(400, 200, 60, 10);
    
  banana.addImage(bananaImage);
  banana.scale = .1;
  FoodGroup.add(banana);
  
  banana.velocityX = -4;
  banana.y = Math.round(random(120,200));
  banana.lifetime = 100;
    
  }
    
  }