

export default class GAME {


    constructor(time, movement,movementBar,width,height,controlGame,player1,player2){
        this.time = time
        this.movement = movement
        this.movementBar = movementBar
        this.width = width  - movement
        this.height = height - movement
        this.controlGame = controlGame
        this.player1 = player1
        this.player2 = player2
        

    }
    

 }