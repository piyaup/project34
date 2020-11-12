const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;
const Constraint = Matter.Constraint;

var bob1;
var engine, world;

function preload()
{
	
}

function setup() {
	createCanvas(1000,800);

 
	engine = Engine.create();
	world = engine.world;
    bob1 = new Bob(310,500,100,1.2);
    bob2 = new Bob(405,500,100,1.2);
    bob3 = new Bob(500,500,100,1.2);
    bob4 = new Bob(595,500,100,1.2);
    bob5 = new Bob(690,500,100,1.2);
    roof = new Roof(500,200,500,20);
    rope1 = new Rope(bob1.body,{x:310,y:200});
    rope2 = new Rope(bob2.body,{x:405,y:200});
    rope3 = new Rope(bob3.body,{x:500,y:200});
    rope4 = new Rope(bob4.body,{x:595,y:200});
    rope5 = new Rope(bob5.body,{x:690,y:200});
	Engine.run(engine);
  
}


function draw() {
  rectMode(CENTER);
  background(230,30,105);
  bob1.display();
  bob2.display();
  bob3.display();
  bob4.display();
  bob5.display();
  roof.display();
  rope1.display();
  rope2.display();
  rope3.display();
  rope4.display();
  rope5.display();
  drawSprites();
}

function mouseDragged(){
  //  if (gameState!=="launched"){
        Matter.Body.setPosition(bob1.body, {x: mouseX , y: mouseY});
   // }
}