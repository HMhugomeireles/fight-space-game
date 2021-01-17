class Circle {
    constructor(x, y, radius, color, canvasContext) {
        this.x = x;
        this.y = y;
        this.radius = radius;
        this.color = color;
        this.ctx = canvasContext
    }

    draw() {
        this.ctx.beginPath();
        this.ctx.arc(this.x, this.y, this.radius, Math.PI * 2, false);
        this.ctx.fillStyle = this.color;
        this.ctx.fill();
    }
}

export default Circle