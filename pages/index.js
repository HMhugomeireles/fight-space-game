import { useEffect, useRef } from 'react'
import Game from '../game/Game'
import Player from '../game/model/Player'
import Enemy from '../game/model/Enemy'
import gameState from '../game/game-state'

export default function Home() {
  const canvasRef = useRef()

  useEffect(() => {
    const canvas = canvasRef.current;
    const canvasContext = canvas.getContext('2d')
    
    canvas.width = innerWidth
    canvas.height = innerHeight

    const playerInitialState = {
      name: "Player Ship",
      ship: {
        type: 'mark1',
        color: "white"
      }
    }
  
    const player = new Player(playerInitialState, canvasContext, canvas)
    const gameObjects = gameState.gameObjectState.map((gameObjectState, index) => {
      const enemyInitialState = {
        ...gameObjectState,
        name: `Enemy ${index}`,
        ship: {
          ...gameObjectState.ship,
          type: "default"
        }
      }
      return new Enemy(enemyInitialState, canvasContext, canvas)
    })
    
    const game = new Game(gameState, {player, gameObjects }, canvasContext, canvas);
    game.loadPlayerController();
    game.start()

  }, [])

  return <canvas ref={canvasRef} />
}
