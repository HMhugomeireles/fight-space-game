import Square from './geometrical-figures/square'
import Projectile from './Projectile'

class Player extends Square {
    constructor(color, canvasContext, canvas) {
        super(200, 200, 30, color, canvasContext, canvas);
    }

    move(position) {
        switch (position) {
            case 'a':
            case 'A':
            case "ArrowLeft":
                super.moveLeft()
                return
            case "d":
            case "D":
            case 'right':
                super.moveRight();
                return
            case "w":
            case "W": 
            case "ArrowTop":
                super.moveTop();
                return 
            case "s":
            case "S":
            case 'ArrowDown':
                super.moveDown();
                return
            default:
                return;
        }
    }

    getPosition() {
       return super.getPosition()
    }
}

export default Player