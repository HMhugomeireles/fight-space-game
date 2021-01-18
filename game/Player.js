import { INITIAL_POSITION, PLAYER_WIDTH } from './configs'
import { moveInRelativePositionX, moveInRelativePositionY } from './util'

class Player {
    constructor(canvasContext, canvas) {
        this.x = INITIAL_POSITION.X;
        this.y = INITIAL_POSITION.Y;
        this.radius = PLAYER_WIDTH,
        this.angle = 0;
        this.frameX = 0;
        this.frameY = 0;
        this.frame = 0;
        this.ctx = canvasContext,
        this.canvas = canvas;
    }

    draw() {
        this.ctx.beginPath();
        this.ctx.arc(this.x, this.y, this.radius, Math.PI * 2, false);
        this.ctx.fillStyle = "white";
        this.ctx.fill();

        this.ctx.beginPath();
        this.ctx.rect(
            moveInRelativePositionX(this.x, (PLAYER_WIDTH * 2)), 
            moveInRelativePositionY(this.y, (PLAYER_WIDTH * 2)), 
            PLAYER_WIDTH * 4, 
            2.5);
        this.ctx.fillStyle = "green";
        this.ctx.fill();
    }

    update(userState){
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

export default Player