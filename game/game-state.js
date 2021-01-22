import { INITIAL_POSITION } from './configs'

export const gameState = {
    playerState: {
        x: INITIAL_POSITION.x,
        y: INITIAL_POSITION.y,
        mouseClick: false
    },
    gameObjectState: [
        {
            x: 300,
            y: 400,
        }
    ]
}