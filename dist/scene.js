"use strict";
var Column = /** @class */ (function () {
    function Column(x, y, r, world) {
        var options = {
            isStatic: true
        };
        this.body = Matter.Bodies.circle(x, y, r / 2, options);
        this.r = r;
        Matter.World.add(world, this.body);
    }
    Column.prototype.show = function () {
        var pos = this.body.position;
        push();
        translate(pos.x, pos.y);
        rectMode(CENTER);
        strokeWeight(1);
        stroke(255);
        fill(color(0, 255, 0));
        arc(0, 0, this.r, this.r, 0, TWO_PI);
        pop();
    };
    return Column;
}());
var Ground = /** @class */ (function () {
    function Ground(x, y, w, h, world) {
        this.w = w;
        this.h = h;
        var options = {
            isStatic: true
        };
        this.body = Matter.Bodies.rectangle(x + w / 2, y + h / 2, w, h, options);
        Matter.World.add(world, this.body);
    }
    Ground.prototype.show = function () {
        push();
        noStroke();
        fill(color(0, 200, 200));
        rectMode(CENTER);
        rect(this.body.position.x, this.body.position.y, this.w, this.h);
        pop();
    };
    return Ground;
}());
function createBuckets(x, y, w, h, world, columns) {
    var SHAPE_W = 20;
    var COUNT = 3;
    var a = SHAPE_W * COUNT;
    var b = (w - a) / (COUNT - 1);
    var c = SHAPE_W + b;
    for (var i = 0; i < COUNT; i++) {
        var bucket = new Ground(i * c, y - h, SHAPE_W, h, world);
        columns.push(bucket);
    }
}
function initScene(columns, width, height) {
    var COLUMNS_X = 5;
    var COLUMNS_Y = 4;
    var COLUMN_WIDTH = 10;
    var offset_x = width / COLUMNS_X;
    var offset_y = height / COLUMNS_Y;
    // offset_x = (SCENE_SIZE - COLUMNS_X * COLUMN_WIDTH) / COLUMNS_X;
    // offset_y = 0;
    for (var y = 0; y < COLUMNS_Y; y++) {
        var currentY = offset_y / 2 + offset_y * y;
        var offsetRow = 0;
        var columnX = COLUMNS_X;
        if ((y + 1) % 2 == 0) {
            offsetRow = offset_x / 2;
            columnX = COLUMNS_X - 1;
        }
        for (var x = 0; x < columnX; x++) {
            var currentX = offsetRow + offset_x / 2 + offset_x * x;
            var column = new Column(currentX, currentY, COLUMN_WIDTH, world);
            columns.push(column);
            Matter.World.add(world, column.body);
        }
    }
    // let column = new createColumn(SCENE_SIZE / 2, SCENE_SIZE / 2, 100);
    // columns.push(column);
    // Matter.World.add(world, column.body);
    var ground = new Ground(0, SCENE_SIZE_Y - GROUND_HEIGHT, SCENE_SIZE_X, GROUND_HEIGHT, world);
    columns.push(ground);
    createBuckets(0, SCENE_SIZE_Y - GROUND_HEIGHT, SCENE_SIZE_X, 50, world, columns);
}
//# sourceMappingURL=scene.js.map