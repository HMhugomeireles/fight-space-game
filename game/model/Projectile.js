import Circle from './geometrical-figures/circle'

class Projectile extends Circle {
    constructor(position, canvasContext, canvas, velocity) {
        super((position.x + 15), (position.y + 15), 2, "red", canvasContext, canvas);
        this.velocity = velocity;
    }

    update() {
        super.draw()
        this.x = this.x + this.velocity.x
        this.y = this.y + this.velocity.y
    }
}

export default Projectile