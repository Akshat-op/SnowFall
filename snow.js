class Snow  {
    constructor(x,y,r) {
      var options = {
          restitution:0.4
      }
      this.r=r;
      this.image = loadImage("snow4.webp")
      this.body = Bodies.rectangle(x,y,width,height,options);
      World.add(world, this.body);
    }
    display(){
      var pos =this.body.position;
      var angle = this.body.angle;

        push();
        translate(pos.x,pos.y)

        rotate(angle);
        fill("white")
        imageMode(CENTER);

        image(this.image, 0, 0, this.width, this.height);
        pop();
    }
  };
