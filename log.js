class Log  {
    constructor(x,y,h,angle){
        var options={
            restitution:0.8,
            density:1,
            friction:1
      
        }
        this.w = 20;
        this.h = h;
        this.body=Bodies.rectangle(x,y,this.w,h,options);
        Matter.Body.setAngle(this.body,angle)
        World.add(world,this.body)
        
    }
    display() {
        var pos = this.body.position;
        push ()
        translate(pos.x,pos.y);
        rotate (this.body.angle)
        rectMode(CENTER)
        fill("green");
        rect(0,0,this.w,this.h);
        pop ();
    }
}

    
