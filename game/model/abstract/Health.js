const HealthBar = {
    build: function(x, y, w, maxHealth, color) {
        return {
            x: x,
            y: y,
            w: w,
            h: 6,
            maxHealth: maxHealth,
            maxWidth: w,
            healthValue: maxHealth,
            color: color,
        }
    }
}

export default HealthBar