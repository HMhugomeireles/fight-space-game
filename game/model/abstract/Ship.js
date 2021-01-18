import { SHIP_WIDTH } from '../../configs'
import { moveInRelativePositionX, moveInRelativePositionY } from '../../util'

class Ship {
    constructor(initialPosition, color, canvasContext, canvas) {
        this.x = initialPosition.X;
        this.y = initialPosition.Y;
        this.radius = SHIP_WIDTH,
        this.angle = 0;
        this.frameX = 0;
        this.frameY = 0;
        this.frame = 0;
        this.color = color;
        this.ctx = canvasContext,
        this.canvas = canvas;
    }

    _draw() {
        this.ctx.beginPath();
        this.ctx.arc(this.x, this.y, this.radius, Math.PI * 2, false);
        this.ctx.fillStyle = this.color;
        this.ctx.fill();

        this.ctx.beginPath();
        this.ctx.rect(
            moveInRelativePositionX(this.x, (SHIP_WIDTH * 2)), 
            moveInRelativePositionY(this.y, (SHIP_WIDTH * 2)), 
            SHIP_WIDTH * 4, 
            2.5);
        this.ctx.fillStyle = "green";
        this.ctx.fill();
    }

    _update(userState){
        const dx = this.x - userState.x;
        const dy = this.y - userState.y;
        if (userState.x != this.x){
            this.x -= dx / 70;
        }
        if (userState.y != this.y){
            this.y -= dy / 70;
        }
    }
    
}

export default Ship