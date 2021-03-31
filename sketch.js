const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;

var engine,world;
var hammer;
var ground;
var rubber;
var stone;
var block;
var ball1,ball2,ball3,ball4,ball5,ball6;

function setup() {
	createCanvas(1200, 600);

	engine = Engine.create();
	world = engine.world;

	//Create the Bodies Here.
  hammer = new Hammer(0,0,150,30);
  ground = new Ground(600,590,1200,20);
  rubber = new Rubber(900,400,40);
  ball1 = new Ball(700,400,10);
  ball2 = new Ball(710,400,10);
  ball3 = new Ball(720,400,10);
  ball4 = new Ball(730,400,10);
  ball5 = new Ball(740,400,10);
  ball6 = new Ball(750,400,10);
  stone = new Stone(500,400,60,60);
  block = new Block(300,400,80,20);
  
	Engine.run(engine);
  
}

function draw() {
  rectMode(CENTER);
  background(rgb(160,219,229));

  Engine.update(engine);

  ground.display();
  hammer.display();
  rubber.display();
  ball1.display();
  ball2.display();
  ball3.display();
  ball4.display();
  ball5.display();
  ball6.display();
  stone.display();
  block.display();

  drawSprites();
 
}