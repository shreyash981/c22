const Engine = Matter.Engine ;
const World = Matter.World ;
const Bodies = Matter.Bodies ; 
var engine ;
var world ; 

function setup() {
  createCanvas(400,400);
 /// createSprite(400, 200, 50, 50);
  engine = Engine.create (); 
  world =  engine.world ;
var ground_options = {
  isStatic : true 
}

ground = Bodies.rectangle (200 ,390 , 200 ,20 , ground_options  );

World.add(world , ground );
var ball_options = {
  restitution:  1 
}
ball = Bodies.circle (200 ,200 , 20 , ball_options );
World.add(world , ball );
}

function draw() {

  background(255,255,255);  

  Engine.update (engine);
 ////////// drawSprites();
rectMode (CENTER);

  rect(ground.position.x , ground.position.y , 400 ,20  );
  circle(ball.position.x , ball.position.y , 20 );
}