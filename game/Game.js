
class Game {
    constructor(gameObjects, canvasContext) {
        this.ctx = canvasContext;
        this.gameObjects = [...gameObjects];
        this.secondsPassed = 0;
        this.oldTimeStamp = 0;
    }

    gameLoop(timeStamp) {

        secondsPassed = (timeStamp - oldTimeStamp) / 1000;
        oldTimeStamp = timeStamp;
    
        // Loop over all game objects
        this.gameObjects.forEach(object => {
            object.update(secondsPassed)
        })
    
        this.clearCanvas();
    
        // Do the same to draw
        this.gameObjects.forEach(object => {
            object.draw(secondsPassed)
        })
    
        return window.requestAnimationFrame(gameLoop);

    }

    clearCanvas() {
        this.ctx.fillStyle = "rgba(0,0,0,0.4)"
        this.ctx.fillRect(0, 0, canvas.width, canvas.height)
    }
}
 