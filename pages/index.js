import { useEffect, useRef, useState } from 'react'
import Player from '../game/Player'
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
    
    const player = new Player(canvasContext, canvas)


    function render() {
      canvasContext.fillStyle = "rgba(0,0,0,0.1)"
      canvasContext.fillRect(0, 0, canvas.width, canvas.height)
      player.draw()
      player.update(userState)
      requestAnimationFrame(render)
    }
    render()

  }, [])

  return <canvas 
            ref={canvasRef} 
            //onMouseDown={mouseDownCanvas} 
            //onMouseUp={mouseUpCanvas}
          />
}
