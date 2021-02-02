import Ship from './abstract/Ship'

class Player extends Ship {
    constructor(initialShipState, canvasContext, canvas) {
        super(initialShipState, canvasContext, canvas)
        this.bulletsUI = [];
        this.missiesUI = {};
        this.numberOfMissies = 3;
    }

    draw() {
        super._draw()
    }

    update(userState){
        super._update(userState)
    }

    getPosition() {
        return super.getPosition()
    }

    log() {
        super._toLog()
    }
    
}

export default Player