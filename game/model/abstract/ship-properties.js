import { DEFAULT_INITIAL_POSITION, DEFAULT_SHIP_RADIUS } from '../../configs'

export const ShipConfiguration = {
    position: {
        x: DEFAULT_INITIAL_POSITION.x,
        y: DEFAULT_INITIAL_POSITION.y
    },
    ship: {
        type: 'default',
        radarRange: 1.3,
        health: 100,
    }
}