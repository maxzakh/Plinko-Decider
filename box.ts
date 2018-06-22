class Box {
  w: number;
  h: number;
  body: Matter.Body;
  constructor(x: number, y: number, w: number, h: number, world: Matter.World) {
    this.w = w;
    this.h = h;
    var options = {
      friction: 0.3,
      restitution: 0.6
    };
    this.body = Matter.Bodies.rectangle(x, y, w, h, options);
    Matter.World.add(world, this.body);
  }
  show() {
    var pos = this.body.position;
    var angle = this.body.angle;
    push();
    translate(pos.x, pos.y);
    rotate(angle);
    rectMode(CENTER);
    strokeWeight(1);
    stroke(255);
    fill(color(0, 255, 0));
    rect(0, 0, this.w, this.h);
    pop();
  }
}