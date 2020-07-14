class Ball {
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
    }
   display(){
     push();
     var pos=this.body.position;
     var angle=this.body.angle;
     fill("purple");
     translate(pos.x,pos.y);
     rotate(angle);
     stroke("red");
     strokeWeight(3);
     rectMode(CENTER);
     rect(0,0,this.w,this.h);
     pop();
   }
    
  
  }