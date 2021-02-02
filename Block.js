class Block {
    constructor(x, y, width, height,color) {
      var options = {
          'restitution':0.8,
          'friction':1,
          'density':1.0
      }
      this.body = Bodies.rectangle(x, y, width, height,color,options);
      this.width = width;
      this.height = height;
      //this.color = color;
      
      World.add(world, this.body);
    }
    display(){
      var pos =this.body.position;
      var angle = this.body.angle;
      
      push();
      strokeWeight(5);
      stroke("red");
      fill("orange");
      translate(pos.x, pos.y);
      rotate(angle);
      rectMode(CENTER);
      rect(0, 0, this.width, this.height);
      
      pop();
    }
  };
  