/// <reference types = "./p5/lib/p5.global-mode"/>

const SCENE_SIZE_X = 300;
const SCENE_SIZE_Y = 700;

const GROUND_HEIGHT = 100; 

var matterEngine: Matter.Engine;
var world: Matter.World;
var boxes: Box[] = [];
var columns: Column[] = [];


var ground: Ground;

function createDebugRender(engine: Matter.Engine) {
    // Create debug render
    var render = Matter.Render.create({
        element: document.body,
        engine: engine,
        options: {
            width: SCENE_SIZE_X,
            height: SCENE_SIZE_Y,
            // showVelocity: true
        }
    });
    Matter.Render.run(render);
}

function my_setup(): void {
    createCanvas(SCENE_SIZE_X, SCENE_SIZE_Y);
    matterEngine = Matter.Engine.create();
    world = matterEngine.world;

    // createDebugRender(engine);

    // Init Scene
    initScene(columns, SCENE_SIZE_X, SCENE_SIZE_Y - GROUND_HEIGHT);
}

function my_mousePressed(): void {
    boxes.push(new Box(mouseX, mouseY, random(10, 40), random(10, 40), world));
}

function my_draw(): void {
    background(51);
    Matter.Engine.update(matterEngine);

    boxes.forEach(box => box.show());

    ground.show();

    columns.forEach(element => {
        element.show();
    });
}

function main() {
    (window as any)["setup"] = my_setup;
    (window as any)["draw"] = my_draw;
    (window as any)["mousePressed"] = my_mousePressed;
}

main();