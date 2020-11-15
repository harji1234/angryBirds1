class Pig {
    constructor(x,y){
        var options={
            restitution:0.8,
            density:1,
            friction:0.2
        }
        this.w = 50;
        this.h = 50;
        this.body=Bodies.rectangle(x,y,this.w,this.h,options);
        World.add(world,this.body)
        
    }
    display() {
        var pos = this.body.position;
        push ()
        translate(pos.x,pos.y);
        rotate (this.body.angle)
        rectMode(CENTER)
        fill("red");
        stroke("green")
        strokeWeight(3)
        rect(0,0,this.w,this.h);
        pop ();
    }

}

