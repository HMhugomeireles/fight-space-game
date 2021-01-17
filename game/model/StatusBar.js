import Rectangle from './/geometrical-figures/rectangle'

const DISTANCE_BETWEEN = 15
const MAX_HEIGHT_STATUSBAR = 2.5

function moveInRelativePositionX(positionX) {
    return positionX - DISTANCE_BETWEEN
}

function moveInRelativePositionY(positionY, minHeight) {
    return positionY + minHeight + 10
}

class StatusBar extends Rectangle {
    constructor(position, eleMaxWidth, canvasContext, canvas) {
        super(
            moveInRelativePositionX(position.y), 
            moveInRelativePositionY(position.y, eleMaxWidth), 
            eleMaxWidth + 30, 
            MAX_HEIGHT_STATUSBAR, 
            "green", 
            canvasContext, 
            canvas
            )
        this.eleMaxWidth = eleMaxWidth
        
    }

    moveStatusBar(position) {
        super.setPositionX(moveInRelativePositionX(position.x))
        super.setPositionY(moveInRelativePositionY(position.y, this.eleMaxWidth))
    }
    
    draw() {
        super.draw()
    }

}

export default StatusBar;