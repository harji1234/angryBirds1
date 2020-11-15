//Namespacing
const Engine = Matter.Engine;
const World =  Matter.World;
const Bodies= Matter.Bodies;

var engine,world;
var box1,box2,box3,box4,box5;
var pig1,pig2
var ground
var log1,log2,log3,log4
var bird
function setup() {
  createCanvas(1000,500);
  engine=Engine.create();
  world=engine.world;
 // RADIANS/ PI= 360 180
 
  log1 = new Log(680,350,300,PI/2)
  box1 = new Box(600,400,70,70);
  box2 = new Box(800,400,70,70);
  ground = new Ground(500,490,1000,20)
  pig1= new Pig(700,400);
  box3= new Box(600,320,70,70)
  box4= new Box(800,320,70,70)
  pig2= new Pig(700,320)
  log2= new Log(680,270,300,PI/2)
  box5= new Box(700,240,70,70)
  log3= new Log(650,240,150,PI/7)
  log4= new Log(760,240,150,-PI/7)
  bird= new Bird(50,50)
}

function draw() {
  background("black");  
  Engine.update(engine);
  box1.display();
  box2.display();
  ground.display();
  pig1.display();
  log1.display();
  box3.display();
  box4.display();
  pig2.display();
  log2.display();
  box5.display();
  log3.display();
  log4.display();
  bird.display();
}