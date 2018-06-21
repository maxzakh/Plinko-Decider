function createColumn(x, y, r) {
    var options = {
        isStatic: true
    }
    this.body = Bodies.circle(x, y, r / 2, options);
    this.r = r;
    World.add(world, this.body);

    this.show = function () {
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

function initScene(columns) {
    let COLUMNS_X = 4;
    let COLUMNS_Y = 4;
    const COLUMN_WIDTH = 30;

    let offset_x = SCENE_SIZE / COLUMNS_X;
    let offset_y = SCENE_SIZE / COLUMNS_Y;

    // offset_x = (SCENE_SIZE - COLUMNS_X * COLUMN_WIDTH) / COLUMNS_X;
    // offset_y = 0;

    for (let y = 0; y < COLUMNS_Y; y++) {
        for (let x = 0; x < COLUMNS_X; x++) {
            let row = offset_x / 2 + offset_x * x;
            let col = offset_y  * y;
            if (y % 2 == 0) {
                row += offset_x / 2;
            }
            let column = new createColumn(row, col, COLUMN_WIDTH);
            columns.push(column);
            World.add(world, column.body);
        }
    }
    
    // let column = new createColumn(SCENE_SIZE / 2, SCENE_SIZE / 2, 100);
    // columns.push(column);
    // World.add(world, column.body);

}