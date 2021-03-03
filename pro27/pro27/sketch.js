
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;

var stick;
var ball1,ball2,ball3,ball4,ball5;
var rope1,rope2,rope3,rope4,rope5;




function preload()
{
	
}

function setup() {
	createCanvas(800, 700);


	engine = Engine.create();
	world = engine.world;

	//Create the Bodies Here.
	rectMode(CENTER);
	stick=new Stick(370,200,250,20);
	ball1=new Ball(450,400,20);
	ball2=new Ball(410,400,20);
	ball3=new Ball(370,400,20);
	ball4=new Ball(330,400,20);
	ball5=new Ball(290,400,20);

   rope1=new Rope(ball1.body,stick.body,80,0)
   rope2=new Rope(ball2.body,stick.body,40,0)
   rope3=new Rope(ball3.body,stick.body,0,0)
   rope4=new Rope(ball4.body,stick.body,40,0)
   rope5=new Rope(ball5.body,stick.body,80,0)

	Engine.run(engine);
  
}


function draw() {
  rectMode(CENTER);
  background("black");
  
  drawSprites();
 ball1.display();
 ball2.display();
 ball3.display();
 ball4.display();
 ball5.display();
 stick.display();
 rope1.display();
 rope2.display();
 rope3.display();
 rope4.display();
 rope5.display();



 //rope1.display();

}



