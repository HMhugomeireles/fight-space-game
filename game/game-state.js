const gameState = {
    logger: true,
    playerState: {
        position: {
            x: 100,
            y: 100,
        },
        ship: {
            health: 100,
            shield: 0,
        }
    },
    gameObjectState: [
        {
            position: {
                x: 300,
                y: 400,
            },
            ship: {
                health: 100,
                shield: 0,
            }
        }
    ]
}

export default gameState