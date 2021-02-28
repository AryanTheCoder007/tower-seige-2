class Box{
  constructor(x,y){
      var options={
          restitution:0.8,
          friction:1.0,
          density:1.0
      }
      this.body=Bodies.rectangle(x,y,30,40);
      World.add(world,this.body);
      this.visibility=255;
      
  }
  display(){
      if(this.body.speed<7){
           this.pos=this.body.position;
          push();
          translate(this.pos.x,this.pos.y)
          rectMode(CENTER);
          fill("red")
          rect(0,0,30,40);
          pop();
      }
      else{
          World.remove(world,this.body);
          push();
          tint(255,this.visibility);
          this.visibility=this.visibility-5;
          pop();
      }
  }
}