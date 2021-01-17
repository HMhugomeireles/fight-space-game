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
      game.start()
    }
    render()

  }, [])

  return (
    <>
      <Head>
        <title>Fight Space</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      
      <canvas 
        id="game-screen"
        ref={canvasRef}
        
      />
    </>
  )
}
