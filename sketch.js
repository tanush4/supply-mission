var helicopterIMG, helicopterSprite, packageSprite,packageIMG;
var packageBody,ground
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;
var line,line2,line3;
function preload()
{
	helicopterIMG=loadImage("helicopter.png")
	packageIMG=loadImage("package.png")
}

function setup() {
	createCanvas(800, 700);
	rectMode(CENTER);
	

	packageSprite=createSprite(width/2, 200, 10,10);
	packageSprite.addImage(packageIMG)
	packageSprite.scale=0.2


	helicopterSprite=createSprite(width/2, 200, 10,10);
	helicopterSprite.addImage(helicopterIMG)
	helicopterSprite.scale=0.6


	groundSprite=createSprite(width/2, height-35, width,10);
	groundSprite.shapeColor=color(255)


	engine = Engine.create();
	world = engine.world;

	packageBody = Bodies.circle(width/2 , 200 , 5 , {restitution:0.4, isStatic:true});
	World.add(world, packageBody);
	

	//Create a Ground
	ground = Bodies.rectangle(width/2, 650, width, 10 , {isStatic:true} );
	 World.add(world, ground);
	 
	 packageSprite.x=packageBody.position.x
	 packageSprite.y=packageBody.position.y

	Engine.run(engine);
  line=createSprite(380,650,250,20)
  line.shapeColor="red"

  line2=createSprite(260,580,20,130)
  line2.shapeColor="red"

  line3=createSprite(500,580,20,130)
  line3.shapeColor="red" 
}


function draw() {
  rectMode(CENTER)

  background(0);

  packageSprite.x= packageBody.position.x 
  packageSprite.y= packageBody.position.y 


  
  drawSprites();

}

function keyPressed() {
 if (keyCode === DOWN_ARROW) {
	packageSprite.velocityX=-9
Matter.Body.setStatic(packageBody,false); 
}
  }




