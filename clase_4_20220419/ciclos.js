/**
 * Ciclos son secuencias repetitivas 
 */

/**
 * ciclo for
 * for ([expresiónInicial]; [expresiónCondicional]; [expresiónDeActualización])
  instrucción
 */
let stop = 10
for (let i = 0; i < stop; i = i + 1) {
    // console.log("Contemos: " + i)
}

const prompt = require('prompt');
prompt.start();

prompt.get(['stop'], function(error, resultado) {
    let userStop = +resultado.stop;
    console.log("EL usuario quiere contar hasta: " + userStop);
    
    for (let i = 0;i < userStop; i = i + 1) {
        console.log("Contemos: " + i)
    }
})