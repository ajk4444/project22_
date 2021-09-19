
const Engine=Matter.Engine;
const World=Matter.World;
const Bodies=Matter.Bodies;// namespacing

var ball
var rect1 

var engine,world, object;
function setup(){
  createCanvas(400,400);
  
  engine=Engine.create(); // creating the engine
  
  world=engine.world; // create the world in the engine
  
  
  var obj_prop={
    
    isStatic:true
  }// determine the property of the body
  
  object=Bodies.rectangle(200,380,400,10,obj_prop)// determine the shape of the body

  
  World.add(world,object)// adding the body to the world
   
  var ball_prop = {
restitution: 1.4


  }
  ball = Bodies.circle(200,200,30,ball_prop)
  World.add(world,ball)

  console.log(object);
  
  
}

var rect1_prop = {
  restitution: 1.4
  
  
    }
    rect1 = Bodies.circle(200,200,30,ball_prop)
    World.add(world,ball)
  
    console.log(object);
    
    
  }

function draw(){
background("black");  
  Engine.update(engine); // updating the engine
  
  fill("yellow");
  
  rectMode(CENTER);
  ellipseMode(RADIUS);

  ellipse(ball.position.x,ball.position.y,30,30)
  rect(object.position.x,object.position.y,400,10);
  
}