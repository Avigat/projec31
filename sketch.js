const Engine = Matter.Engine;
const World= Matter.World;
const Bodies = Matter.Bodies;
const Constraint = Matter.Constraint;

var engine, world;
var divisionHeight=300;
var particles = [];
var plinkos = [];
var divisions = [];

function setup() {
  createCanvas(480,800);
  engine = Engine.create();
  world = engine.world;

  ground = new Ground(240,790,800,10);
  /*div1 = new Division(0,635,10,300);
  div2 = new Division(80,635,10,300);
  div3 = new Division(160,635,10,300);
  div4 = new Division(240,635,10,300);
  div5 = new Division(320,635,10,300);
  div6 = new Division(400,635,10,300);
  div7 = new Division(480,635,10,300);*/

  for (var k = 0; k <=width; k = k + 80) { 
    divisions.push(new Division(k, height-divisionHeight/2, 10, divisionHeight)); 
  }

  for (var j=40; j<=width; j=j+50){
    plinkos.push(new Plinko(j, 75))
  }
  for (var j=15; j<=width-10; j=j+50){
    plinkos.push(new Plinko(j, 175))
  }
  for (var j=40; j<=width; j=j+50){
    plinkos.push(new Plinko(j, 275))
  }
  for (var j=15; j<=width-10; j=j+50){
    plinkos.push(new Plinko(j, 375))
  }

  if (frameCount%60===0){
    particles.push(new Particle(random(width/2-10, width/2+10), 10, 10))
  }

}

function draw() {
  background(0);  
  Engine.update(engine);

  for (var k = 0; k < divisions.length; k++) {
    divisions[k].display();
  }

  for (var i = 0; i < plinkos.length; i++) {
    plinkos[i].display();
  }

  for (var j=0; j<particles.length; j++){
    particles[j].display();
  }

  ground.display();
  /*div1.display();
  div2.display();
  div3.display();
  div4.display();
  div5.display();
  div6.display();
  div7.display();*/

  drawSprites();
}