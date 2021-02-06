import Cell from './model/Cell'

function moveInRelativePositionX(positionX, playerSize) {
    return positionX - playerSize
}

function moveInRelativePositionY(positionY, playerSize) {
    return positionY + playerSize
}

const CELL_SIZE = 10;
function createGridMap(maxWidth, maxHeight, canvasContext) {
    const gameMap = []
    let rowNumber = 0;
    let colNumber = 0;

    for (let row = 0; row < maxHeight; row += CELL_SIZE) {
        for (let col = 0; col < maxWidth; col += CELL_SIZE) {
            gameMap.push(new Cell(col, row, CELL_SIZE, [colNumber, rowNumber], canvasContext))
        }
        rowNumber += 1;
        colNumber += 1;
    }

    return gameMap;
}

export {
    moveInRelativePositionX,
    moveInRelativePositionY,
    createGridMap
}