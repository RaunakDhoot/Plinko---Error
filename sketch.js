const Bodies = Matter.Bodies;
const World= Matter.World;

var world;

function setup() {
  createCanvas(480,800);
  createSprite(400, 200, 50, 50);
}

function draw() {
  background(255,255,255);  
  drawSprites();
  
  ground = new Ground(480,height,480,20);
}