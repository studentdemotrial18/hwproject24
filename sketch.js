var ball,side1,side2,side3,ground,paper;

const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;


function setup() {
	createCanvas(1400, 600);


	engine = Engine.create();
	world = engine.world;
	
    fill("yellow");
	ground= Bodies.rectangle(700,560,1400,20, {isStatic:true});
	World.add(world,ground);
	
	paper=new Paper();

	side1= new Box(1100,540,200,20);
	side2= new Box(995,500,20,100);
	side3= new Box(1205,500,20,100);


	Engine.run(engine);
  
}


function draw() {
  
  background(0);
  Engine.update(engine);
  rectMode(CENTER);
  rect(ground.position.x,ground.position.y,1400,20);
 

  paper.display();

  side1.display();
  side2.display();
  side3.display();
  
  drawSprites();
 
}
function keyPressed(){
	
	if(keyCode === UP_ARROW){

		Matter.Body.applyForce(paper.body,paper.body.position,{x:30,y:-25})
	}
}





