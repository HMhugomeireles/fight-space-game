class Circle {
    constructor(x, y, radius, color, canvasContext, canvas) {
        this.x = x;
        this.y = y;
        this.radius = radius;
        this.color = color;
        this.ctx = canvasContext
        this.canvas = canvas;
    }

    draw() {
        this.ctx.beginPath();
        this.ctx.arc(this.x, this.y, this.radius, Math.PI * 2, false);
        this.ctx.fillStyle = this.color;
        this.ctx.fill();
    }
}

export default Circle