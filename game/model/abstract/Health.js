class HealthBar {
    constructor(x, y, w, maxHealth, color, canvasContext, canvas) {
        this.x = x;
        this.y = y;
        this.w = w;
        this.h = 2.5;
        this.maxHealth = maxHealth;
        this.maxWidth = w;
        this.health = maxHealth;
        this.color = color;
        this.ctx = canvasContext;
        this.canvas = canvas;
    }
    
    _draw() {
        this.ctx.beginPath();
        this.ctx.lineWidth = 2;
        this.ctx.strokeStyle = "#333";
        this.ctx.fillStyle = this.color;
        this.ctx.fillRect(this.x, this.y, this.w, this.h);
        this.ctx.strokeRect(this.x, this.y, this.maxWidth, this.h);    
    }

    _update({ health, position, shipSize }) {
        if (this.health  > 0) {
            const { x, y } = position;
            this.health = health;
            this.x = x - (this.w / 2);
            this.y = y - shipSize;
            this.w = (this.health / this.maxHealth) * this.maxWidth;
        }
    }
}

export default HealthBar