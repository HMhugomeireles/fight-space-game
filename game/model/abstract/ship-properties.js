import { DEFAULT_INITIAL_POSITION, DEFAULT_SHIP_RADIUS } from '../../configs'

export const ShipConfiguration = {
    position: {
        x: DEFAULT_INITIAL_POSITION.x,
        y: DEFAULT_INITIAL_POSITION.y
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
}


const BaseShip = {
    type: 'base',
    radarRange: 0.8,
    health: 100,
    armor: 0,
    damage: 10
}