"use strict";
var Box = /** @class */ (function () {
    function Box(x, y, w, h, world) {
        this.w = w;
        this.h = h;
        var options = {
            friction: 0.3,
            restitution: 0.6
        };
        this.body = Matter.Bodies.rectangle(x, y, w, h, options);
        Matter.World.add(world, this.body);
    }
    Box.prototype.show = function () {
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
    };
    return Box;
}());
//# sourceMappingURL=box.js.map