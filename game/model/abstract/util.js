import Health from './Health'
import Radar from './Radar'

export function generateHealthComponent({ position, shipUI, base }) {
    const w = shipUI.healthWidth + shipUI.shipWidth
    const x = position.x - (w / 2)
    const y = position.y + shipUI.shipWidth * 2
    const maxHealth = base;

    return Health.build(x, y, w, maxHealth, "green")
}

export function generateRadarComponent({ position, radarWidth, radarRange }) {
    const w = radarWidth * radarRange
    const x = position.x - (w / 2)
    const y = position.y - (w / 2);

    return Radar.build(x, y, w)
}