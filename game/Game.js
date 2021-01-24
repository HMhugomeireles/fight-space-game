
class Game {
    constructor(initialState, { player, gameObjects }, canvasContext, canvas) {
        this.ctx = canvasContext;
        this.canvas = canvas;
        this.gameObjects = [...gameObjects];
        this.player = player;
        this.gameState = initialState;
    }

    start() {
        this.loadPlayerController()

        let secondsPassed;
        let oldTimeStamp;

        console.log("[Game start] with", {gameState: this.gameState, gameObjects: this.gameObjects})

        const gameLoop = (timeStamp) => {

            secondsPassed = (timeStamp - oldTimeStamp) / 1000;
            oldTimeStamp = timeStamp;
            
            this.player.update(this.gameState.playerState, secondsPassed);
            // Loop over all game objects
            this.gameObjects.forEach((gameObject, index) => {
                gameObject.update(this.gameState.gameObjectState[index], secondsPassed)
            })
            
            this.clearCanvas();
            
            this.player.draw(this.gameState.playerState, secondsPassed);
            // Do the same to draw
            this.gameObjects.forEach((gameObject, index) => {
                gameObject.draw(this.gameState.gameObjectState[index], secondsPassed)
            })
            
            requestAnimationFrame(gameLoop);
        }
        gameLoop()
    }

    clearCanvas() {
        this.ctx.fillStyle = "rgba(0,0,0,0.4)"
        this.ctx.fillRect(0, 0, this.canvas.width, this.canvas.height)
    }

    updateGameState(state) {
        this.gameState = state;
    }

    loadPlayerController() {
        document.onmousedown = (e) => {
            this.gameState.playerState.position = {
                ...this.gameState.playerState.position,  
                mouseClick: false
            }
        }
        
        document.onmouseup = (e) => {
            this.gameState.playerState.position = {
                x: e.clientX,
                y: e.clientY,
                mouseClick: true
            }
        }
    }
}

export default Game