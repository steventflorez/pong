import DATE from "./DATE.js";
import { game } from "./main.js";



export default class UI {
    
    /**
     * LIMPIAMOS EL INTERVALO Y CAMBIAMOS EL COLOR DEL BODY
     */
   
    static stop(){
        clearInterval(game.controlGame);
        document.body.style.background = "#f00";
    }

    /**
     * CONTROLAMOS EL MOVIMIENTO DE LA PELORA
     */

    static  moveBall (){
        
        this.checkStateBall();
        
        switch(ball.state){
            case 1: 
            
                ball.style.left = (ball.offsetLeft + game.movement) +"px";
                ball.style.top = (ball.offsetTop + game.movement) +"px";
               
                break;
            case 2: 
                ball.style.left = (ball.offsetLeft + game.movement) +"px";
                ball.style.top = (ball.offsetTop - game.movement) +"px";
                break;
            case 3:
                ball.style.left = (ball.offsetLeft - game.movement) +"px";
                ball.style.top = (ball.offsetTop + game.movement) +"px";
                break;
            case 4: 
                ball.style.left = (ball.offsetLeft - game.movement) +"px";
                ball.style.top = (ball.offsetTop - game.movement) +"px";
                break;
        }
    }

    /**
     * REVISAMOS EL ESTADO DE LA PELOTA PARA SABER SU DIRECCION
     */

    static checkStateBall(){
    
        
        if(DATE.collidePlayer2(game)){
            ball.direction = 2;
            if(ball.state == 1) ball.state = 3;
            if(ball.state == 2) ball.state = 4;
        }else if(DATE.collidePlayer1(game)){
            ball.direction = 1;
            if(ball.state == 3) ball.state = 1;
            if(ball.state == 4) ball.state = 2;
        }

        if(ball.direction ===1){
            if(ball.offsetTop >= game.height) ball.state=2;
            else if(ball.offsetTop <=0 ) ball.state=1;
        }else{
            if(ball.offsetTop >= game.height) ball.state=4;
            else if(ball.offsetTop <=0 ) ball.state=3;
        }
    }

    /**
     * CONTROLAMOS EL MOVIMIENTO DE LA BARRA 
     */

    static moveBar(){
        if(game.player1.keyPress){
            if(game.player1.keyCode == 81 && bar1.offsetTop >=0)
                bar1.style.top = (bar1.offsetTop - game.movementBar) + "px";
            if(game.player1.keyCode == 65 && (bar1.offsetTop + bar1.clientHeight)<=game.height)
                bar1.style.top = (bar1.offsetTop + game.movementBar) + "px";
            
        }
        if(game.player2.keyPress){
            if(game.player2.keyCode == 79 && bar2.offsetTop>=0)
                bar2.style.top = (bar2.offsetTop - game.movementBar) +"px";
            if(game.player2.keyCode == 76 && (bar2.offsetTop + bar2.clientHeight)<=game.height)
                bar2.style.top = (bar2.offsetTop + game.movementBar) +"px";
        }
    }
}

