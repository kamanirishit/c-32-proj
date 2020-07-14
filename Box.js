class Box {
  constructor(x, y, width, height){
    var options={
     //isStatic:true,
      restitution:0.9,
      friction:0.04,
      density:0.2
      
    }
    this.body=Bodies.rectangle(x,y,width,height,options);
    World.add(world,this.body);
    this.w=width;
    this.h=height;
    this.Visibility=255;
    this.image=loadImage("wood1.png")
  }
 display(){
   push();
    if(this.body.speed<4){
      var pos=this.body.position;
      //pos.x=mouseX;
      var angle=this.body.angle;
      //fill("purple");
      translate(pos.x,pos.y);
      rotate(angle);
      //stroke("red");
      //strokeWeight(3);
      imageMode(CENTER);
      image(this.image,0,0,this.w,this.h);
      
  }else{
    World.remove(world,this.body);
    this.Visibility=this.Visibility-4;
    tint(255,this.Visibility); 
    var pos=this.body.position;
      //pos.x=mouseX;
      image(this.image,pos.x,pos.y,this.w,this.h);
   }
  
  pop();
   
 }
}
