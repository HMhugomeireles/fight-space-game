import Ship from './abstract/Ship'

class Player extends Ship {
    constructor(initialShipState, canvasContext, canvas) {
        super(initialShipState, canvasContext, canvas)
    }

    draw() {
        super._draw()
    }

    update(userState){
        super._update(userState)
    }

    log() {
        super._toLog()
    }
    
}

export default Player