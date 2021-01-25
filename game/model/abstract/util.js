import Health from './Health'
import Radar from './Radar'

export function generateHealthComponent({ position, shipUI, base, canvasContext, canvas }) {
    const w = shipUI.healthWidth + shipUI.shipWidth
    const x = position.x - (w / 2)
    const y = position.y + shipUI.shipWidth
    const maxHealth = base;

    return new Health(x, y, w, maxHealth, "green", canvasContext, canvas)
}

export function generateRadarComponent({ position, radarWidth, radarRange, canvasContext, canvas }) {
    const w = radarWidth * radarRange
    const x = position.x - (w / 2)
    const y = position.y - (w / 2);

    return new Radar(x, y, w, canvasContext, canvas)
}