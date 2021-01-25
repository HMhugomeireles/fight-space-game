class Radar {
    constructor(x, y, w, canvasContext, canvas) {
        this.x = x;
        this.y = y;
        this.w = w;
        this.h = w;
        this.ctx = canvasContext;
        this.canvas = canvas;
    }
    
    _draw() {
        this.ctx.beginPath();
        this.ctx.rect(this.x, this.y, this.w, this.h);
        this.ctx.lineWidth = 0.2;
        this.ctx.strokeStyle = "yellow";
        this.ctx.stroke();
    }

    _update({ x, y }) {
        this.x = x - (this.w / 2);
        this.y = y - (this.h / 2);
    }

    _logState() {
        console.log("Radar", { x: this.x, y: this.y })
    } 
}

export default Radar