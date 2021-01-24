import { DEFAULT_INITIAL_POSITION } from './configs'

export const gameState = {
    playerState: {
        name: "Player Ship",
        position: {
            x: DEFAULT_INITIAL_POSITION.x,
            y: DEFAULT_INITIAL_POSITION.y,
            mouseClick: false
        },
        ship: {
            color: 'white',
            type: 'default',
            width: 2,
            radarRange: 1,
            health: 100,
            armor: 0,
            damage: 20
        }
    },
    gameObjectState: [
        {
            name: "Enemy 1",
            position: {
                x: 300,
                y: 400,
            },
            ship: {
                color: 'red',
                type: 'default',
                width: 1.2,
                radarRange: 0.8,
                health: 100,
                armor: 0,
                damage: 20
            }
        }
    ]
}