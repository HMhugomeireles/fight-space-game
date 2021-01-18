import { DISTANCE_BETWEEN } from './configs'

function moveInRelativePositionX(positionX, playerSize) {
    return positionX - playerSize
}

function moveInRelativePositionY(positionY, playerSize) {
    return positionY + playerSize
}

export {
    moveInRelativePositionX,
    moveInRelativePositionY
}