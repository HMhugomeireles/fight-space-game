import Ship from './abstract/Ship'

class Player extends Ship {
    constructor(initialPosition, color, canvasContext, canvas) {
        super(initialPosition, color, canvasContext, canvas)
        this.health = 100;
    }

    draw() {
        super._draw()
    }

    update(userState){
        super._update(userState)
    }
    
}

export default Player