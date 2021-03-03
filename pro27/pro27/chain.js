class  Rope{
    constructor(body1,body2,offsetX,offsetY)
    {
      this.offsetX=offsetX
      this.offsetY=offsetY

      this.body1=body1;
      this.body2=body2;

      var options={
          bodyA:body1,
          bodyB:body2,
          pointB:{x:this.offsetX,y:this.offsetY}
          
      } 
      this.Rope=Matter.Constraint.create(options) 
       World.add(world,this.Rope)                             
    }
    display(){
      stroke(255)
      line(this.body1.position.x,this.body1.position.y,this.body2.position.x+offsetX,this.body2.position.y)
    }
}
