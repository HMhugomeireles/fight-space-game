const mark0 = {
    shipUI: {
        shipWidth: 10,
        healthWidth: 60,
        radarWidth:  100,
        color: "red"
    },
    base: {
        radarRange: 1.2,
        shield: 0,
        damage: 0.4,
        speed: 1
    }
}

const mark1 = {
    shipUI: {
        shipWidth: 15,
        healthWidth: 70,
        radarWidth:  100,
        color: "red"
    },
    base: {
        radarRange: 1.6,
        shield: 0,
        damage: 0.6,
        speed: 1.5
    }
}

export const ShipTypes = {
    'mark1': mark1,
    'default': mark0
}