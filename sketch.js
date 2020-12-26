
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;
const Constraint=Matter.Constraint;
function preload()
{
	
}

function setup() {
	createCanvas(800, 700);


	engine = Engine.create();
	world = engine.world;

	//Create the Bodies Here.
	ground  = new Ground(250,100,400,20)
	bob1	= new paper (-50,200,20)
	bob2	= new paper (150,300,20)
	bob3	= new paper (180,300,20)
	bob4	= new paper (210,300,20)
	bob5	= new paper (240,300,20)
	bob6	= new paper (270,300,20)
	chain1 = new SlingShot(bob1.body,{x:120,y:100})
	chain2 = new SlingShot(bob2.body,{x:150,y:100})
	chain3 = new SlingShot(bob3.body,{x:180,y:100})
	chain4 = new SlingShot(bob4.body,{x:210,y:100})
	chain5 = new SlingShot(bob5.body,{x:240,y:100})
	chain6 = new SlingShot(bob6.body,{x:270,y:100})

	Engine.run(engine);
  
}


function draw() {
  rectMode(CENTER);
  background(10000);
  Engine.update(engine);
  ground.display();
  chain1.display();
  chain2.display();
  chain3.display();
  chain4.display();
  chain5.display();
  chain6.display();

	bob1.display();
	bob2.display();
	bob3.display();
	bob4.display();
	bob5.display();
	bob6.display();

  drawSprites();
 
}



