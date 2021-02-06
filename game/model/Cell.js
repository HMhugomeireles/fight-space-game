

class Cell {
    constructor(x, y, cellSize, canvasContext) {
        this.x = x;
        this.y = y;
        this.width = cellSize;
        this.height = cellSize;
        this.ctx = canvasContext
    }
    draw() {
        this.ctx.strokeStyle = 'black';
        this.ctx.strokeRect(this.x, this.y, this.width, this.height);
    }
}

export default Cell;