class Bird {
        constructor(x,y){
            var options={
                restitution:0.5,
                density:1.5,
                friction:1
        
            }
            this.w = 50;
            this.h = 50;
            this.body=Bodies.rectangle(x,y,this.w,this.h,options);
            World.add(world,this.body)
            
        }
        display() {
            var pos = this.body.position;
            pos.x=mouseX
            pos.y=mouseY
            push ()
            translate(pos.x,pos.y);
            rotate (this.body.angle)
            rectMode(CENTER)
            fill("blue");
            stroke("green")
            strokeWeight(3)
            rect(0,0,this.w,this.h);
            pop ();
        }
    }
    
