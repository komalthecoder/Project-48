class Wall{

    constructor(x,y,width,height){

        var options = {         
            isStatic: true,
            restitution: 0
        }

        this.body = Bodies.rectangle(x,y,width,height,options);
        this.width = width;
        this.height = height;
        World.add(world, this.body);
        this.color = color(random(0,255),random(0,255),random(0,255));

    }

    display(){

        var pos = this.body.position;
  
        rectMode(CENTER);
        fill("black");
        strokeWeight(2);
        stroke(this.color);
        rect(pos.x, pos.y, this.width, this.height);
  
      }
}