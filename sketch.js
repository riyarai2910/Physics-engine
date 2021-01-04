
const Engine=Matter.Engine;
const World =Matter.World;
const Bodies=Matter.Bodies;
var ground, ball;
var engine, world;

function setup(){
  var canvas = createCanvas(400,400)
  engine=Engine.create();
  world=engine.world;
 var ground_options={
   isStatic:true
 }
  var ball_options={
    restitution:1.0
}
ground=Bodies.rectangle(200,390,200,20,ground_options);
ball=Bodies.circle(200,100,20,ball_options)
World.add(world,ground);
World.add(world,ball);
}
function draw()
{
  background(0);
  Engine.update(engine);
  rectMode(CENTER)
  rect(ground.position.x,ground.position.y,350,20)

    ellipseMode(RADIUS)
    ellipse(ball.position.x,ball.position.y,20,20)
}