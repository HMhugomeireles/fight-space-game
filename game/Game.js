
class Game {
    constructor(initialState, { player, gameObjects }, canvasContext, canvas) {
        this.ctx = canvasContext;
        this.canvas = canvas;
        this.gameObjects = [...gameObjects];
        this.player = player;
        this.gameState = initialState;
        this.count = 0
    }

    start() {
        this.loadPlayerController()

        let secondsPassed;
        let oldTimeStamp;

        console.log("[Game start] with", { gameState: this.gameState })

        const gameLoop = (timeStamp) => {

            secondsPassed = (timeStamp - oldTimeStamp) / 1000;
            oldTimeStamp = timeStamp;
            
            this.player.update(this.gameState.playerState, secondsPassed);
            // Loop over all game objects
            this.gameObjects.forEach((gameObject, index) => {
                gameObject.update(this.gameState.gameObjectState[index], secondsPassed)
            })
            
            this.clearCanvas();
            
            this.player.draw();
            // Do the same to draw
            this.gameObjects.forEach((gameObject, index) => {
                gameObject.draw()
            })

            // logger
            if (this.gameState.logger) {
                this.player.log()
                this.gameState.logger = false;
            }
            
            requestAnimationFrame(gameLoop);
        }
        gameLoop()
    }

    clearCanvas() {
        this.ctx.fillStyle = "rgba(0,0,0,1)"
        this.ctx.fillRect(0, 0, this.canvas.width, this.canvas.height)
    }

    updateGameState(state) {
        this.gameState = state;
    }

    loadPlayerController() {
        document.onmousedown = (e) => {
            // check if other object are in the position
            // move to the range
            // fire projectiles

            this.gameState.playerState.position = {
                x: e.clientX,
                y: e.clientY
            }
            //this.gameState.logger = true;
        }
        
        document.onmouseup = (e) => {
            //this.gameState.logger = false;
        }
    }
}

export default Game