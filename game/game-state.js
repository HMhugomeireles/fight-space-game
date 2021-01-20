import { INITIAL_POSITION } from './configs'

export let gameState = {
    playerState: {
        x: INITIAL_POSITION.X,
        y: INITIAL_POSITION.Y,
        mouseClick: false
    },
    gameObjectState: [
        {
            x: 300,
            y: 400,
        }
    ]
}