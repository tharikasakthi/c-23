//Namespacing

const Engine=Matter.Engine;  //universe
const World=Matter.World; //globe
const Bodies= Matter.Bodies; //objects

var engine,world,box1,box2;
var ground;


function setup() {
  createCanvas(400,400);

engine=Engine.create();   // create the Universe
world = engine.world;

box1= new Box(200,300,50,50);
box2=new Box(240,100,50,100);
ground=new Ground(200,399,400,20);

}

function draw() {
  background(0,0,0);  

  Engine.update(engine);

  box1.display();
  box2.display();
  ground.display();

}