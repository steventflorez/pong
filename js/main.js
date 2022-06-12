import DATE from "./DATE.js";
import GAME from "./GAME.js";
import UI from "./UI.js";

//TODO CREAMOS UN OBJETO CON LAS ESPESIFICACIONES DEL JUEGO

export  let game = new GAME(50,20,20,document.documentElement.clientWidth ,document.documentElement.clientHeight )




 var games = function(){

/**
 * INICIAMOS EL JUEGO CON UN INTERVALO DE TIEMPO
 */
function start(){
    init();
    
  
    game.controlGame = setInterval(play, 50);
    
}

/**
 * CONTROLAMOS EL MOVIMIENTO DE LAS BARRAS Y LA PELOTA
 */
function  play(){
    
    UI.moveBall(game);
    UI.moveBar(game);
    DATE.checkIfLost(game);
}

/**
 * INICIALIZAMOS LOS PARAMETROS DEL JUEGO Y EL CONTROL DE LOS JUGADORES
 */

function init(){
    ball.style.left = 0;
    ball.state = 1;
    ball.direction = 1; 
    game.player1 = new Object();
    game.player2 = new Object();
    game.player1.keyPress = false;
    game.player1.keyCode = null;
    game.player2.keyPress = false;
    game.player2.keyCode = null;
}

/**
 * LE DAMOS DIRECCION A LAS BARRAS PLAYER
 * @param {*} e EVENTO DE PRESION DE UNA TECLA DEL TECLADO
 */
document.onkeydown = function(e){

        e = e || window.event;
        switch(e.keyCode){
            case 81: 
            case 65: 
                game.player1.keyCode = e.keyCode;
                game.player1.keyPress = true;
            break;
            case 79: 
            case 76: 
                game.player2.keyCode = e.keyCode;
                game.player2.keyPress = true;
            break;
        }
    }

    /**
     * MCONTROLAMOS SI UNA TECLA ESTA CIENDO PRECIONADA PARA MOVER O DETENER LA BARRA PLAYER
     * @param {*} e EVENTO PARA SABER SI UNA TECLA ESTA CIENDO PRECIONADA
     */

    document.onkeyup = function(e){
        if(e.keyCode == 81 || e.keyCode == 65)
            game.player1.keyPress = false;
        if(e.keyCode == 79 || e.keyCode == 76)
            game.player2.keyPress = false;
    }

start();
}();    



