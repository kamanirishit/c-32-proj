var box1,box2,box3,box4,box5,box6,box7,box8,box9,box10,box11,box12,box13,box14,box15,box16,ground,ball,sling;
const Engine=Matter.Engine;
const World=Matter.World;
const Bodies=Matter.Bodies;
const Constraint=Matter.Constraint;
var score,backgroundImg;
var engine,world;
function preload(){
  backgroundImg = loadImage("sprites/bgm.png");
  changebg();
}
function setup() {
  createCanvas(800,400);
 score=0;
engine=Engine.create();
world=engine.world;
box1=new Box(500,50,50,50);
box2=new Box(500,100,50,50);
box3=new Box(450,100,50,50);
box4=new Box(550,100,50,50);
box5=new Box(500,150,50,50);
box6=new Box(450,150,50,50);
box7=new Box(400,150,50,50);
box8=new Box(550,150,50,50);
box9=new Box(600,150,50,50);
box10=new Box(500,200,50,50);
box11=new Box(550,200,50,50);
box12=new Box(600,200,50,50);
box13=new Box(650,200,50,50);
box14=new Box(450,200,50,50);
box15=new Box(400,200,50,50);
box16=new Box(350,200,50,50);
ball=new Ball(100,200,50,50);
sling=new SlingShot(ball.body,{x:100,y:100});
ground=new Ground(width/2,height-100,width,120);
Engine.run(engine); 
}

function draw() {
  background(backgroundImg);;

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
  ball.display();
  sling.display();
  ground.display();
if(box1.Visibility<0 && box1.Visibility>-150){
  score++;
}
if(box2.Visibility<0 && box2.Visibility>-150){
  score++;
}
if(box3.Visibility<0 && box3.Visibility>-150){
  score++;
}
if(box4.Visibility<0 && box4.Visibility>-150){
  score++;
}
if(box5.Visibility<0 && box5.Visibility>-150){
  score++;
}
if(box6.Visibility<0 && box6.Visibility>-150){
  score++;
}
if(box7.Visibility<0 && box7.Visibility>-150){
  score++;
}
if(box8.Visibility<0 && box8.Visibility>-150){
  score++;
}
if(box9.Visibility<0 && box9.Visibility>-150){
  score++;
}
if(box10.Visibility<0 && box10.Visibility>-150){
  score++;
}
if(box11.Visibility<0 && box11.Visibility>-150){
  score++;
}
if(box12.Visibility<0 && box12.Visibility>-150){
  score++;
}
if(box13.Visibility<0 && box13.Visibility>-150){
  score++;
}
if(box15.Visibility<0 && box15.Visibility>-150){
  score++;
}
if(box14.Visibility<0 && box14.Visibility>-150){
  score++;
}
if(box16.Visibility<0 && box16.Visibility>-150){
  score++;
}
push();
  fill("red");
  textSize(20);
  text("SCORE:"+score,650,50);
  pop();
}
function mouseDragged(){
  Matter.Body.setPosition(ball.body,{x:mouseX,y:mouseY})
;}
function mouseReleased(){
  sling.fly();
}
function keyPressed(){
  if(keyCode===32){
 sling.attach(ball.body);
  }
}
async function changebg(){
  var response=await fetch("https://worldtimeapi.org/api/timezone/Asia/Kolkata");
  var rjson=await response.json();
  var daytime=rjson.datetime.slice(11,13);
  if(daytime>=6 && daytime<=17){
    backgroundImg = loadImage("sprites/bgm.png");
      }else{
        backgroundImg=loadImage("sprites/bgn.jpg");
      }
console.log(daytime);

}
