const SCENE_SIZE_X = 300;
const SCENE_SIZE_Y = 700;

const GROUND_HEIGHT = 100; 

// module aliases
var Engine = Matter.Engine,
    World = Matter.World,
    Bodies = Matter.Bodies;

var engine;
var world;
var boxes = [];
var columns = [];

var ground;

function createDebugRender() {
    // Create debug render
    var render = Matter.Render.create({
        element: document.getElementById("wrapper"),
        engine: engine,
        options: {
            width: SCENE_SIZE_X,
            height: SCENE_SIZE_Y,
            showVelocity: true
        }
    });
    Matter.Render.run(render);
}

function setup() {
    createCanvas(SCENE_SIZE_X, SCENE_SIZE_Y);
    engine = Engine.create();
    world = engine.world;

    // createDebugRender();

    // Create ground
    var options = {
        isStatic: true
    }
    ground = Bodies.rectangle(0 + SCENE_SIZE_X / 2, SCENE_SIZE_Y - GROUND_HEIGHT + GROUND_HEIGHT / 2, SCENE_SIZE_X, GROUND_HEIGHT, options);
    World.add(world, ground);

    // Init Scene
    initScene(columns, SCENE_SIZE_X, SCENE_SIZE_Y - GROUND_HEIGHT);
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
    rect(ground.position.x, ground.position.y, width, GROUND_HEIGHT);
    pop();
}

function main() {
    setup();
}
