const Engine = Matter.Engine;
const World= Matter.World;
const Bodies = Matter.Bodies;

var engine, world;
var snow1,snow2,snow3,snow4,snow5,snow6;

function preload() {
  backgroundImg = loadImage("snow2.jpg");
}

function setup() {
  var canvas= createCanvas(800,400);
  engine = Engine.create();
  world = engine.world;

  //createSprite(400, 200, 50, 50);

    snow1 = new Snow(700,320,70,70);
    snow2 = new Snow(920,320,70,70);
    snow3 = new Snow(700,240,70,70);
    snow4 = new Snow(920,240,70,70);
    snow5 = new Snow(810,150,70,70);
}


function draw() {
  background(255,255,255);  
  Engine.update(engine);
  drawSprites();
  snow1.display();
  snow2.display();
  snow3.display();
}