import { INITIAL_POSITION } from './configs'

export const gameState = {
    playerState: {
        position: {
            x: INITIAL_POSITION.x,
            y: INITIAL_POSITION.y,
            mouseClick: false
        },
        ship: {
            type: 'default',
            radarRange: 1.1,
            health: 80,
            damage: 20
        }
    },
    gameObjectState: [
        {
            x: 300,
            y: 400,
        }
    ]
}