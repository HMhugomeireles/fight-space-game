class Rectangle {
    constructor(x, y, width, height, color, canvasContext, canvas) {
        this.x = x;
        this.y = y;
        this.width = width;
        this.height = height;
        this.color = color;
        this.ctx = canvasContext
        this.canvas = canvas;
    }

    draw() {
        this.ctx.beginPath();
        this.ctx.rect(this.x, this.y, this.width, this.height);
        this.ctx.fillStyle = this.color;
        this.ctx.fill();
    }

    getPosition() {
        return {
            x: this.x,
            y: this.y
        }
    }

    setPositionX(value) {
        this.x = value
    }

    setPositionY(value) {
        this.y = value
    }
}

export default Rectangle