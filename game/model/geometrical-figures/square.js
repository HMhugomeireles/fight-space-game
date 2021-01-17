class Square {
    constructor(x, y, width, color, canvasContext) {
        this.x = x;
        this.y = y;
        this.width = width;
        this.color = color;
        this.ctx = canvasContext
    }

    draw() {
        this.ctx.beginPath();
        this.ctx.rect(this.x, this.y, this.width, this.width);
        this.ctx.fillStyle = this.color;
        this.ctx.fill();
    }
}

export default Square