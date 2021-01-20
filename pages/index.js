import { useEffect, useRef } from 'react'
import Game from '../game/Game'
import Player from '../game/model/Player'
import Enemy from '../game/model/Enemy'
import { INITIAL_POSITION } from '../game/configs'
import { gameState } from '../game/game-state'

export default function Home() {
  const canvasRef = useRef()

  useEffect(() => {
    const canvas = canvasRef.current;
    const canvasContext = canvas.getContext('2d')
    
    canvas.width = innerWidth
    canvas.height = innerHeight
  
    const player = new Player(INITIAL_POSITION, "white", canvasContext, canvas)
    const gameObjects = [new Enemy({ X: 400, Y: 200 }, "red", canvasContext, canvas)]
    
    const game = new Game(gameState, {player, gameObjects }, canvasContext, canvas);
    game.loadPlayerController();
    game.start()

  }, [])

  return <canvas ref={canvasRef} />
}
