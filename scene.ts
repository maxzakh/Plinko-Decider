class Column {
    r: number;
    body: Matter.Body;
    
    constructor(x: number, y: number, r: number, world: Matter.World) {
        var options = {
            isStatic: true
        };
        this.body = Matter.Bodies.circle(x, y, r / 2, options);
        this.r = r;
        Matter.World.add(world, this.body);    
    }
    show() {
        var pos = this.body.position;
        push();
        translate(pos.x, pos.y);
        rectMode(CENTER);
        strokeWeight(1);
        stroke(255);
        fill(color(0, 255, 0));
        arc(0, 0, this.r, this.r, 0, TWO_PI);
        pop();
    }
}

class Ground {
    body: Matter.Body;
    w: number;
    h: number;
    
    constructor(x: number, y: number, w: number, h: number, world: Matter.World) {
        this.w = w;
        this.h = h;
        var options = {
            isStatic: true
        };        
        this.body = Matter.Bodies.rectangle(x + w / 2, y + h / 2, w, h, options);
        Matter.World.add(world, this.body);
    }
    show() {
        push();
        noStroke();
        fill(color(0, 200, 200));
        rectMode(CENTER);
        rect(this.body.position.x, this.body.position.y, this.w, this.h);
        pop();   
    }
}

function createBuckets(x: number, y: number, w: number, h: number, world: Matter.World, columns: Shape[]) {
    const SHAPE_W = 20;
    const COUNT = 3;
    let a = SHAPE_W * COUNT;
    let b = (w - a) / (COUNT - 1);
    let c = SHAPE_W + b;
    for (let i = 0; i < COUNT; i++) {
        let bucket = new Ground(i * c, y - h, SHAPE_W, h, world);
        columns.push(bucket);
    }    
}

function initScene(columns: Shape[], width: number, height: number) {  
    let COLUMNS_X = 4;
    let COLUMNS_Y = 4;
    const COLUMN_WIDTH = 10;

    let offset_x = width / COLUMNS_X;
    let offset_y = height / COLUMNS_Y;

    // offset_x = (SCENE_SIZE - COLUMNS_X * COLUMN_WIDTH) / COLUMNS_X;
    // offset_y = 0;

    for (let y = 0; y < COLUMNS_Y; y++) {
        let currentY = offset_y / 2 + offset_y  * y;
        let offsetRow = 0;
        let columnX = COLUMNS_X;
        if (y % 2 == 0) {
            offsetRow = offset_x / 2;
            columnX = COLUMNS_X - 1;
        }

        for (let x = 0; x < columnX; x++) {
            let currentX = offsetRow + offset_x / 2 + offset_x * x;
            let column = new Column(currentX, currentY, COLUMN_WIDTH, world);
            columns.push(column);
            Matter.World.add(world, column.body);
        }
    }
    
    // let column = new createColumn(SCENE_SIZE / 2, SCENE_SIZE / 2, 100);
    // columns.push(column);
    // Matter.World.add(world, column.body);

    let ground = new Ground(0, SCENE_SIZE_Y - GROUND_HEIGHT, SCENE_SIZE_X, GROUND_HEIGHT, world);
    columns.push(ground);

    createBuckets(0, SCENE_SIZE_Y - GROUND_HEIGHT, SCENE_SIZE_X, 50, world, columns);
}