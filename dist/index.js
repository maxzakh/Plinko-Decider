"use strict";
/// <reference types = "./p5/lib/p5.global-mode"/>
var SCENE_SIZE_X = 300;
var SCENE_SIZE_Y = 700;
var GROUND_HEIGHT = 100;
var matterEngine;
var world;
var boxes = [];
var columns = [];
var ground;
function createDebugRender(engine) {
    // Create debug render
    var render = Matter.Render.create({
        element: document.body,
        engine: engine,
        options: {
            width: SCENE_SIZE_X,
            height: SCENE_SIZE_Y,
        }
    });
    Matter.Render.run(render);
}
function my_setup() {
    createCanvas(SCENE_SIZE_X, SCENE_SIZE_Y);
    matterEngine = Matter.Engine.create();
    world = matterEngine.world;
    // createDebugRender(engine);
    // Init Scene
    initScene(columns, SCENE_SIZE_X, SCENE_SIZE_Y - GROUND_HEIGHT);
}
function my_mousePressed() {
    boxes.push(new Box(mouseX, mouseY, random(10, 40), random(10, 40), world));
}
function my_draw() {
    background(51);
    Matter.Engine.update(matterEngine);
    boxes.forEach(function (box) { return box.show(); });
    ground.show();
    columns.forEach(function (element) {
        element.show();
    });
}
function main() {
    window["setup"] = my_setup;
    window["draw"] = my_draw;
    window["mousePressed"] = my_mousePressed;
}
main();
//# sourceMappingURL=index.js.map