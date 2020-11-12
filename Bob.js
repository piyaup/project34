class Bob {
  constructor(x,y,r,density){
      var options = {
         'isStatic':false,
         'restitution':0.3,
          'friction':0.5,
          'density':density
      }
      this.x = x;
      this.y = y;
      this.r = r;
      this.density = density;
      this.body=Bodies.circle(this.x,this.y,this.r/2,options);         
      World.add (world,this.body)
  }
display(){
    var paperpos = this.body.position;
    push ();
    translate(paperpos.x,paperpos.y);
 
    fill (255);

   rectMode(CENTER);
    ellipseMode(CENTER);
    ellipse(0, 0, this.r, this.r);
    pop (); 

}  
} 

