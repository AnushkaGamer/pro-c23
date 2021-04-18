var helicopterIMG, helicopterSprite, packageSprite,packageIMG;
var packageBody,ground
var groundbox1, groundbox2, groundbox3;
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;

function preload()
{
	helicopterIMG=loadImage("helicopter.png")
	packageIMG=loadImage("package.png")
}

function setup() {
	createCanvas(800, 700);
	rectMode(CENTER);
	

	packageSprite=createSprite(width/2, 80, 10,10);
	packageSprite.addImage(packageIMG)
	packageSprite.scale=0.2

	helicopterSprite=createSprite(width/2, 200, 10,10);
	helicopterSprite.addImage(helicopterIMG)
	helicopterSprite.scale=0.6

	groundSprite=createSprite(width/2, height-35, width,10);
	groundSprite.shapeColor=color(255)

	groundbox1=createSprite(400,650,200,20);
    groundbox1.shapeColor="red";

	groundbox2=createSprite(310,585,20,150);
	groundbox2.shapeColor="red";

	groundbox3=createSprite(490,585,20,150);
	groundbox3.shapeColor="red";

	engine = Engine.create();
	world = engine.world;

	packageBody = Bodies.circle(width/2 , 200 , 5 , {restitution:1.0, isStatic:true, density: 7});
	World.add(world, packageBody);

	packageSprite.x=packageBody.position.x
	packageSprite.y=packageBody.position.y


	//Create a Ground
	ground = Bodies.rectangle(width/2, 650, width, 10 , {isStatic:true} );
 	World.add(world, ground);

	 groundbox1 = Bodies.rectangle(width/2, 650, width, 10 , {isStatic:true} );
 	World.add(world, groundbox1);

	 groundbox2 = Bodies.rectangle(width/2, 650, width, 10 , {isStatic:true} );
 	World.add(world, groundbox2);

	 groundbox3 = Bodies.rectangle(width/2, 650, width, 10 , {isStatic:true} );
 	World.add(world, groundbox3);




	Engine.run(engine);
  
}


function draw() {
  rectMode(CENTER);
  background(0);
  packageSprite.x= packageBody.position.x 
  packageSprite.y= packageBody.position.y 
  drawSprites();
 
}

function keyPressed() {
 if (keyCode === DOWN_ARROW) {
    // Look at the hints in the document and understand how to make the package body fall only on press of the Down arrow key.
    Matter.Body.setStatic(packageBody,false);
  }
}



