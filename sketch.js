var ground;
var slingshot;
var block1,block2,block3,block4,block5,block6,block7,block8;
var engine, world;

function setup() {
  createCanvas(800,400);

  engine = Matter.Engine.create();
  world = engine.world;
  
  block1=new Box(330,235,30,40);
  block2=new Box(360,235,30,40);
  block3=new Box(390,235,30,40);
  block4=new Box(420,235,30,40);  
  block5=new Box(450,235,30,40);
  block6=new Box(360,195,30,40);
  block7=new Box(390,195,30,40);
  block8=new Box(420,195,30,40);

}

function draw() {
  background(255,255,255);  
  Matter.Engine.update(engine);

  block1.display();
  block2.display();  
  block3.display();  
  block4.display();  
  block5.display();  
  block6.display();
  block7.display();
  block8.display();
  
  


  
}
