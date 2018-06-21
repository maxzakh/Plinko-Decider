const SCENE_SIZE = 400;

// module aliases
var Engine = Matter.Engine,
    // Render = Matter.Render,
    World = Matter.World,
    Bodies = Matter.Bodies;

var engine;
var world;
var boxes = [];
var columns = [];

var ground;

function setup() {
    createCanvas(SCENE_SIZE, SCENE_SIZE);
    engine = Engine.create();
    world = engine.world;
    //Engine.run(engine);
    var options = {
        isStatic: true
    }
    ground = Bodies.rectangle(200, height, width, 100, options);

    World.add(world, ground);

    initScene(columns);
}

function mousePressed() {
    boxes.push(new Box(mouseX, mouseY, random(10, 40), random(10, 40)));
}

function draw() {
    background(51);
    Engine.update(engine);
    for (var i = 0; i < boxes.length; i++) {
        boxes[i].show();
    }

    columns.forEach(element => {
        element.show();
    });

    // draw ground
    push();
    noStroke(255);
    fill(color(0, 200, 200));
    rectMode(CENTER);
    rect(ground.position.x, ground.position.y, width, 100);
    pop();

}

function main() {
    setup();
}
