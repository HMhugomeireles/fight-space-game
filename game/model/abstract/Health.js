const HealthBar = {
    build: function(x, y, w, maxHealth, color) {
        return {
            x: x,
            y: y,
            w: w,
            h: 5,
            maxHealth: maxHealth,
            maxWidth: w,
            health: maxHealth,
            color: color,
        }
    }
}

export default HealthBar