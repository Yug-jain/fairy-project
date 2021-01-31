const Engine= Matter.Engine
const World= Matter.World
const Bodies= Matter.Bodies
var myengine,myworld,starbody
function preload()
{
   //preload the images here
   fairyImage=loadAnimation("images/fairy1.png","images/fairy2.png")
   backgroundImage=loadImage("images/starnight.png")
   starImage=loadImage("images/star.png")
}

function setup() {
  createCanvas(800, 750);
  myengine=Engine.create()
  myworld=myengine.world
  starbody=Bodies.circle(650,100,30,{isStatic:true})
  World.add(myworld,starbody)
  star=createSprite(650,100,10,10)
  star.addImage(starImage)
  star.scale=0.8
  
  fairy=createSprite(200,100,20,20)
  fairy.addAnimation("fairyflying",fairyImage)
  fairy.scale=0.4
 
}


function draw() {
  background(backgroundImage);
  Engine.update(myengine)
  star.x=starbody.position.x
  star.y=starbody.position.y
  drawSprites()

}
function keyPressed(){
  if(keyCode===RIGHT_ARROW){
    fairy.x=fairy.x+20
  }

  if(keyCode===LEFT_ARROW){
    fairy.x=fairy.x-20
  }
  if(keyCode===DOWN_ARROW){
    Matter.Body.setStatic(starbody,false)
  }
}