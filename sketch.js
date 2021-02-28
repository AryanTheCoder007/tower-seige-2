
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;
const Constraint=Matter.Constraint;


//const Constraint=Matter.Constraint
var  circle1,ground;	
var world,sling;


function setup() {
	createCanvas(1200, 600);
	rectMode(CENTER);


	engine = Engine.create();
	world = engine.world;
	
 ground=createSprite(400,400,230,20)
ground=new Ground(400,400,230,20)
 	World.add(world, ground);

 	box1=new Box(310,370,30,40)

box2=new Box(340,370,30,40)
box3=new Box(370,370,30,40)
box4=new Box(400,370,30,40)
box5=new Box(430,370,30,40)
box6=new Box(460,370,30,40)
box7=new Box(490,370,30,40)
box8=new Box(340,330,30,40)
box9=new Box(370,330,30,40)
box10=new Box(400,330,30,40)
box11=new Box(430,330,30,40)
box12=new Box(460,330,30,40)
box13=new Box(370,290,30,40)
box14=new Box(400,290,30,40)
box15=new Box(430,290,30,40)
box16=new Box(400,250,30,40)
circle1=new Circle(100,200,20)
slingShot =new SlingShot (circle1.body,{x:130,y:200})


	
	
	sling =new SlingShot (circle1.body,{x:130,y:200})

Engine.run(engine);
	
  
}


function draw() {
	background("blue");
Engine.update(engine);
  //rectMode(CENTER);
  


 
 
 ground=createSprite(400,400,230,20)
  circle1.display();
  sling.display();
  box1.display();
  box2.display();
  box3.display();
  box4.display();
  box5.display();
  box6.display();
  box7.display();
  box8.display();
  box9.display();
  box10.display();
  box11.display();
  box12.display();
  box13.display();
  box14.display();
  box15.display();
  box16.display();
  ground.display();

  drawSprites();

 
}
 
   
  function mouseDragged(){
	Matter.Body.setPosition(circle1.body,{x:mouseX,y:mouseY})
	
	
	}
 	function mouseReleased (){
	sling.fly();
	
  }

  function keyPressed(){
	if(keyCode=== 32){
	  
	 // Matter.Body.setPosition(circle.body,{x:130,y:200});
	  sling.attach(circle1.body);
	}
  }