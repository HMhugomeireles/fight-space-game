

class Cell {
    constructor(x, y, cellSize, cellPosition) {
        this.x = x;
        this.y = y;
        this.width = cellSize;
        this.height = cellSize;
        this.cellPosition = cellPosition;
    }
    draw(ctx) {
        ctx.strokeStyle = 'red';
        ctx.strokeRect(this.x, this.y, this.width, this.height);
    }
    getCellPosition() {
        return this.cellPosition;
    }
}

export default Cell;