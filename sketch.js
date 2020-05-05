var Engine=Matter.Engine,
    World=Matter.World,
    Bodies=Matter.Bodies;

    var circles=[];
    var ground;


function setup(){
  var Canvas=createCanvas(400,400);
  engine=Engine.create();
  world=engine.world;






}

function draw(){
  background(0);
  circles.push(new Circle(200,0,random(2,2),random(5,2)));
  circles.push(new Circle(150,0,random(2,2),random(5,2)));
  circles.push(new Circle(100,0,random(2,2),random(5,2)));
  circles.push(new Circle(250,0,random(2,2),random(5,2)));
  circles.push(new Circle(300,0,random(2,2),random(5,2)));
  circles.push(new Circle(350,0,random(2,2),random(5,2)));
  circles.push(new Circle(400,0,random(2,2),random(5,2)));
  circles.push(new Circle(1,0,random(2,2),random(5,2)));
  circles.push(new Circle(50,0,random(2,2),random(5,2)));

  Engine.update(engine);
  for(var i= 0; i < circles.length; i++){
     circles[i].show();
  }

}
