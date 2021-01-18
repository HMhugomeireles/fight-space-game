import { useEffect, useRef } from 'react'
import Player from '../game/model/Player'
import Enemy from '../game/model/Enemy'
import { INITIAL_POSITION } from '../game/configs'

export default function Home() {
  const canvasRef = useRef()

  useEffect(() => {
    const canvas = canvasRef.current;
    const canvasContext = canvas.getContext('2d')
    
    canvas.width = innerWidth
    canvas.height = innerHeight

    let userState = {
      x: INITIAL_POSITION.X,
      y: INITIAL_POSITION.Y,
      mouseClick: false
    }
  
    document.onmousedown = (e) => {
      userState = {
        ...userState,  
        mouseClick: false
      }
    }
    
    document.onmouseup = (e) => {
      userState = {
        x: e.clientX,
        y: e.clientY,
        mouseClick: true
      }
    }
    
    const player = new Player(INITIAL_POSITION, "white", canvasContext, canvas)
    const enemies = [new Enemy({ X: 200, Y: 400 }, "red", canvasContext, canvas)]

    function animateEnemies() {
      enemies.forEach(enemy => {
        enemy.draw()
      })
    }

    function render() {
      canvasContext.fillStyle = "rgba(0,0,0,0.4)"
      canvasContext.fillRect(0, 0, canvas.width, canvas.height)
      player.draw()
      player.update(userState)
      animateEnemies()
      requestAnimationFrame(render)
    }
    render()

  }, [])

  return <canvas ref={canvasRef} />
}
