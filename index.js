const SCENE_SIZE = 400;
const GROUND_HEIGHT = 100; 

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

    // Create ground
    var options = {
        isStatic: true
    }
    ground = Bodies.rectangle(0, SCENE_SIZE - GROUND_HEIGHT, SCENE_SIZE, GROUND_HEIGHT, options);
    World.add(world, ground);

    // Init Scene
    initScene(columns, SCENE_SIZE, SCENE_SIZE - GROUND_HEIGHT);
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
    // rectMode(CENTER);
    rect(ground.position.x, ground.position.y, width, GROUND_HEIGHT);
    pop();

}

function main() {
    setup();
}
