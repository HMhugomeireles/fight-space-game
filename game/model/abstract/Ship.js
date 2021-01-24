import { moveInRelativePositionX, moveInRelativePositionY } from '../../util'

class Ship {
    constructor(initialShipState, canvasContext, canvas) {
        this.shipState = initialShipState;
        this.ctx = canvasContext,
        this.canvas = canvas;
        console.log("draw", this.shipState)
    }

    _draw() {
        const { position, ship } = this.shipState
        // ship
        this.ctx.beginPath();
        this.ctx.arc(position.x, position.y, ship.width, Math.PI * 2, false);
        this.ctx.fillStyle = ship.color;
        this.ctx.fill();

        const radarRange = (ship.width * 2) * ship.radarRange;
        const radarPositionX = position.x - ((radarRange / 2) / 2);
        const radarPositionY = position.y - ((radarRange / 2) / 2);
        this.ctx.beginPath();
        this.ctx.rect(radarPositionX, radarPositionY, radarRange, radarRange);
        this.ctx.lineWidth = 0.1;
        this.ctx.strokeStyle = "yellow";
        this.ctx.stroke();

        // health
        const widthHeathRect = ship.width * 4
        const positionX = position.x - ((widthHeathRect / 2) / 2)
        const positionY = position.x - ((widthHeathRect / 2) / 2)
        this.ctx.beginPath();
        this.ctx.rect(positionX, positionY, widthHeathRect, 2.5);
        this.ctx.fillStyle = "green";
        this.ctx.fill();
    }

    _update(userState, secondsPassed){
        const { position } = this.shipState;

        const dx = position.x - userState.x;
        const dy = position.y - userState.y;
        if (userState.x != position.x){
            this.shipState.position.x -= dx / 90;
        }
        if (userState.y != position.y){
            this.shipState.position.y -= dy / 90;
        }
    }
}

export default Ship