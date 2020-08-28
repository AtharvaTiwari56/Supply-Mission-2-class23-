var helicopterIMG, helicopterSprite, packageSprite,packageIMG;
var packageBody,ground;
var leftside, bottom, rightside;
var world, engine;
var bottomSprite
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;

function preload()
{
	helicopterIMG=loadImage("helicopter.png");
	packageIMG=loadImage("package.png");
}

function setup() {
	createCanvas(800, 700);
	rectMode(CENTER);
	

	packageSprite=createSprite(400, 80, 10,10);
	packageSprite.addImage(packageIMG);
	packageSprite.scale=0.2;  

	helicopterSprite=createSprite(400, 200, 10,10);
	helicopterSprite.addImage(helicopterIMG);
	helicopterSprite.scale=0.6;

	groundSprite=createSprite(400, height-35, width,10);
	groundSprite.shapeColor=color(255);

	engine = Engine.create();
	world = engine.world;
	
	bottom = new BoxPart(400, 650, 200, 20);
	World.add(world, bottom);

	rightside = new BoxPart(505, 610, 20, 100);
	World.add(world, rightside);

	leftside = new BoxPart(295, 610, 20, 100);
	World.add(world, leftside);

	packageBody = Bodies.circle(400 , 200 , 5 , {restitution:0.9, isStatic:true});
	World.add(world, packageBody);
	

	//Create a Ground
	ground = Bodies.rectangle(400, 650, width, 10 , {isStatic:true} );
 	World.add(world, ground);


	Engine.run(engine);
}


function draw() {
  rectMode(CENTER);
  background(0);
  
  bottom.display();
  leftside.display();
  rightside.display();

  packageSprite.x= packageBody.position.x 
  packageSprite.y= packageBody.position.y 
  drawSprites();
}

function keyPressed() {
 if (keyCode === DOWN_ARROW) {
	Body.setStatic(packageBody, false);
	
  }
}



