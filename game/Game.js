import Player from './model/Player'
import Projectile from './model/Projectile'

class Game {
    constructor(canvasContext, canvas) {
        this.canvasContext = canvasContext;
        this.canvas = canvas;
        this.player = new Player('green', canvasContext, canvas);
        this.playerMovement = { LEFT: false, RIGHT: false, TOP: false, DOWN: false }
        this.projectiles = []
    }

    start() {

        // Player movement on keyDown
        document.onkeydown = (e) => {
            this.player.move(e.key)
        }

        // Player fire action
        document.onmousedown = (e) => {
            const playerPosition = this.player.getPosition()

            const angle = Math.atan2(
                e.clientY - this.canvas.height / 2, 
                e.clientX - this.canvas.width / 2)

            const velocity = {
                x: Math.cos(angle),
                y: Math.sin(angle)
            }
            const p = new Projectile(
                playerPosition, 
                this.canvasContext, 
                this.canvas, 
                velocity)
            this.projectiles.push(p)
            
        }
        
        this.player.draw()
        this.projectiles.forEach(projectile => {
            projectile.draw()
            projectile.update()
        })
    }

    stop() {
        //cancelAnimationFrame(this.animationId)
    }
}

export default Game