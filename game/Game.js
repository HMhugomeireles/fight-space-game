import Player from './model/Player'
import Projectile from './model/Projectile'

class Game {
    constructor(canvasContext, canvas) {
        this.canvasContext = canvasContext;
        this.canvas = canvas;
        this.player = new Player('white', canvasContext, canvas);
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
                e.clientY - playerPosition.y, 
                e.clientX - playerPosition.x)

            const velocity = {
                x: Math.cos(angle),
                y: Math.sin(angle)
            }
            const projectile = new Projectile(
                playerPosition, 
                this.canvasContext,
                this.canvas, 
                velocity)
            this.projectiles.push(projectile)
            
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