
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;
const Render = Matter.Render;
const Constraint=Matter.Constraint;
var treeObj, stoneObj,groundObject, launcherObject;
var mango1,stone1,mango2,mango3,mango4,mango5,mango6,mango7,mango8,mango9,mango10;
var world,boy;
var sling1;

function preload(){
	boy=loadImage("boy.png");
  }

function setup() {
	createCanvas(1300, 600);
	engine = Engine.create();
	world = engine.world;
	stone1=new stone(240,200,30)
	sling1= new sling(stone1.body,{x:269,y:439})
	mango1=new mango(1000,100,30);
	mango2=new mango(1040,125,30);
	mango3=new mango(1080,225,30);
	mango4=new mango(1220,125,30);
	mango5=new mango(1260,175,30);
	mango6=new mango(1300,125,30);
	mango7=new mango(1260,200,30);
	mango8=new mango(1220,185,30);
	mango9=new mango(1080,155,30);
	mango10=new mango(1040,125,30);
	treeObj=new tree(1110,580);
	groundObject=new ground(width/2,600,width,20);

	Engine.run(engine);

}

function draw() {

  background(230);
  Engine.update(engine);
  //Add code for displaying text here!
  image(boy ,200,340,200,300);
console.log(mouseX,mouseY)  

line(stone1.x, stone1.y,269,439); 
  treeObj.display();
  mango1.display();
  mango2.display();
  mango3.display();
  mango4.display();
  mango5.display();
  mango6.display();
  mango7.display();
  mango8.display();
  mango9.display();
  mango10.display();
  groundObject.display();


  sling1.display();
  stone1.display();
  strokeWeight(4);


}

function mouseDragged(){
    Matter.Body.setPosition(stone1.body, {x: mouseX , y: mouseY});
}


function mouseReleased(){
    sling1.fly();
}

function keyPressed(){
  if(keyCode === 32){
 Matter.Body.setPosition(stone1.body,{x:269,y:439})
    slingshot.attach(stone1.body);
  }
}