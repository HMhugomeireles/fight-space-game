import { moveInRelativePositionX, moveInRelativePositionY } from '../../util'
import { ShipConfiguration } from './ship-properties'

class Ship {
    constructor(initialPosition, color, canvasContext, canvas) {
        this.position = initialPosition
        this.radius = SHIP_WIDTH,
        this.angle = 0;
        this.squareRange = 
        this.frameX = 0;
        this.frameY = 0;
        this.frame = 0;
        this.color = color;
        this.ctx = canvasContext,
        this.canvas = canvas;
    }

    _draw() {
        // ship
        this.ctx.beginPath();
        this.ctx.arc(this.position.x, this.position.y, this.radius, Math.PI * 2, false);
        this.ctx.fillStyle = this.color;
        this.ctx.fill();

        this.ctx.beginPath();
        this.ctx.rect(this.position.x - 200, this.position.y - 200, 400, 400);
        this.ctx.lineWidth = 0.1;
        this.ctx.strokeStyle = "yellow";
        this.ctx.stroke();

        // health
        this.ctx.beginPath();
        this.ctx.rect(
            moveInRelativePositionX(this.position.x, (SHIP_WIDTH * 2)), 
            moveInRelativePositionY(this.position.y, (SHIP_WIDTH * 2)), 
            SHIP_WIDTH * 4, 
            2.5);
        this.ctx.fillStyle = "green";
        this.ctx.fill();
    }

    _update(userState, secondsPassed){
        const dx = this.position.x - userState.x;
        const dy = this.position.y - userState.y;
        if (userState.x != this.position.x){
            this.position.x -= dx / 90;
        }
        if (userState.y != this.position.y){
            this.position.y -= dy / 90;
        }
    }

    _updateShipType(gameState) {

    }
    
}

export default Ship