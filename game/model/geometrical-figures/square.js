class Square {
    constructor(x, y, width, color, canvasContext, canvas) {
        this.x = x;
        this.y = y;
        this.width = width;
        this.color = color;
        this.ctx = canvasContext
        this.canvas = canvas;
    }

    draw() {
        this.ctx.clearRect(0, 0, this.canvas.width, this.canvas.height)
        this.ctx.beginPath();
        this.ctx.rect(this.x, this.y, this.width, this.width);
        this.ctx.fillStyle = this.color;
        this.ctx.fill();
    }

    moveLeft() {
        this.update()
        this.x = this.x - 2
    }

    moveRight() {
        this.update()
        this.x = this.x + 2
    }

    moveTop() {
        this.update()
        this.y = this.y - 2
    }

    moveDown() {
        this.update()
        this.y = this.y + 2
    }

    update() {
        this.draw()
    }

    getPosition() {
        return {
            x: this.x,
            y: this.y
        }
    }
}

export default Square