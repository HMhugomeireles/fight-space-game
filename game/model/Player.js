import Square from './geometrical-figures/square'
import StatusBar from './StatusBar'

const PLAYER_WIDTH = 20

class Player extends Square {
    constructor(color, canvasContext, canvas) {
        super(200, 200, PLAYER_WIDTH, color, canvasContext, canvas);
        this.statusBar = new StatusBar({ x: 200, y: 200 }, PLAYER_WIDTH, canvasContext, canvas);
    }
    
    draw() {
        super.draw()
        this.statusBar.draw()
    }

    move(position) {
        switch (position) {
            case 'a':
            case 'A':
            case "ArrowLeft":
                super.moveLeft()
                break
            case "d":
            case "D":
            case 'right':
                super.moveRight();
                break
            case "w":
            case "W": 
            case "ArrowTop":
                super.moveTop();
                break 
            case "s":
            case "S":
            case 'ArrowDown':
                super.moveDown();
                break
        }
        this.statusBar.moveStatusBar(this.getPosition())
    }

    getPosition() {
       return super.getPosition()
    }
}

export default Player