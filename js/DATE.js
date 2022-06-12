import GAME from "./GAME.js";
import { game } from "./main.js";
import UI from "./UI.js";

export default class DATE {

    

   /**
    * CONTROLAMOS EL CONTACTO DE LAS BARRA1 CON LA PELOTA
    * @returns RETORNA UN BOOLEAN PARA CONTROLAR EL CONTACTO CDE LA BARRA CON LA PELOTA
    */

    static collidePlayer1(){
       
        if(ball.offsetLeft <= (bar1.clientWidth) &&
           ball.offsetTop >= bar1.offsetTop &&
           ball.offsetTop <= (bar1.offsetTop + bar1.clientHeight)){
            return true;
        }

        return false;
    }
    /**
     * CONTROLAMOS EL CONTACTO DE LAS BARRA2 CON LA PELOTA
     * @returns RETORNA UN BOOLEAN PARA CONTROLAR EL CONTACTO CDE LA BARRA CON LA PELOTA
     */

    static collidePlayer2(){
        
        if(ball.offsetLeft >= (game.width-bar2.clientWidth) &&  
           ball.offsetTop >= bar2.offsetTop &&
           ball.offsetTop <= (bar2.offsetTop + bar2.clientHeight)){
            return true;
        }
        return false;

    }
   
    /**
     * CONTROLAMOS SI LA BOLLA SUPERA LOS LIMITES Y DETERMINAR UN GANADOR
     */

    static checkIfLost(){
        
        if(ball.offsetLeft >= game.width){
            UI.stop(game);
            console.log("punto player 1");
        }
        if(ball.offsetLeft <= 0){
            
            UI.stop(game);
            console.log("punto player 1");
        }
    }
    
    

    

}