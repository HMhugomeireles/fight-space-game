import Ship from './abstract/Ship'

class Enemy extends Ship {
    constructor(initialShipState, canvasContext, canvas) {
        super(initialShipState, canvasContext, canvas)
    }

    draw() {
        super._draw()
    }

    update(userState) {
        super._update(userState)
    }

    getCurrentPosition() {
        return super.getPosition()
    }

    isSamePosition(positionToCheck) {
        return (JSON.stringify(positionToCheck) === JSON.stringify(super.getPosition()))
    }
}

export default Enemy