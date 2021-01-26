import { generateHealthComponent, generateRadarComponent } from './util'
import { ShipTypes } from './ship-properties'

class Ship {
    constructor(initialShipState, canvasContext, canvas) {
        this.name = initialShipState.name;
        this.position = {};
        this.shipUI = {};
        this.base = {};
        this.health = {};
        this.radar = {};
        this._init(initialShipState)
        this.ctx = canvasContext;
        this.canvas = canvas;
    }

    _init(initialShipState) {
        const { ship } = initialShipState
        const { shipUI, base } = ShipTypes[`${ship.type}`];
        
        this.base = base;
        this.shipUI = { 
            ...shipUI,
            color: ship.color
        }
        this.position = {
            x: 100,
            y: 100
        };
        this.health = generateHealthComponent({ 
            position: this.position, 
            shipUI: shipUI
        })
        this.radar = generateRadarComponent({
            position: this.position, 
            radarWidth: shipUI.radarWidth,
            radarRange: base.radarRange
        })
    }
    
    _draw() {
        const { x, y } = this.position;
        const { shipWidth, color } = this.shipUI;
        // ship
        this.ctx.beginPath();
        this.ctx.arc(x, y, shipWidth, Math.PI * 2, false);
        this.ctx.fillStyle = color;
        this.ctx.fill();


        this._drawHealth();
        this._drawRadar();
        
    }

    _update(shipState, secondsPassed) {
        const { position, ship } = shipState;
        const { health, shield } = ship;

        const dx = this.position.x - position.x;
        const dy = this.position.y - position.y;
        if (this.position.x != position.x){
            this.position.x -= dx / 100
        }
        if (this.position.y != position.y){
            this.position.y -= dy / 100;
        }

        this._updateHealth({ 
            health,
            position: this.position,
            shipSize: this.shipUI.shipWidth
        })
        this._updateRadar({ 
            position: this.position 
        })
    }

    // -------------------------

    _drawHealth() {
        this.ctx.beginPath();
        this.ctx.lineWidth = 1;
        this.ctx.strokeStyle = "#333";
        this.ctx.fillStyle = this.health.color;
        this.ctx.fillRect(this.health.x, this.health.y, this.health.w, this.health.h);
        this.ctx.strokeRect(this.health.x, this.health.y, this.health.maxWidth, this.health.h);
    }

    _updateHealth({ health, position, shipSize }) {
        if (health  > 0) {
            const { x, y } = position;
            this.health = {
                ...this.health,
                healthValue: health,
                x: x - this.health.maxWidth / 2,
                y: y + shipSize * 2,
                w: (health / this.health.maxHealth) * this.health.maxWidth
            }
        }
    }

    _drawRadar() {
        this.ctx.beginPath();
        this.ctx.rect(this.radar.x, this.radar.y, this.radar.w, this.radar.h);
        this.ctx.lineWidth = 0.2;
        this.ctx.strokeStyle = "yellow";
        this.ctx.stroke();
    }

    _updateRadar({ position }) {
        const { x, y } = position;
        const positionX = x - this.radar.w / 2; 
        const positionY = y - this.radar.w / 2;

        this.radar = {
            ...this.radar,
            x: positionX,
            y: positionY
        }
    }

    _toLog() {
        console.log(`[Ship]-[${this.name}]`, {
            position: this.position,
            health: this.health,
            radar: this.radar
        })
    }
}

export default Ship