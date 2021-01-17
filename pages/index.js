import { useEffect, useRef } from 'react'
import Head from 'next/head'

import Game from '../game/Game'

export default function Home() {
  const canvasRef = useRef()

  useEffect(() => {
    const canvas = canvasRef.current;
    const canvasContext = canvas.getContext('2d')
    
    canvas.width = innerWidth
    canvas.height = innerHeight
    
    const game = new Game(canvasContext, canvas)
    
    function render() {
      requestAnimationFrame(render)
      canvasContext.fillStyle = "rgba(0,0,0,0.1)"
      canvasContext.fillRect(0, 0, canvas.width, canvas.height)
      game.start()
    }
    render()

  }, [])

  return <canvas ref={canvasRef}/>
}
