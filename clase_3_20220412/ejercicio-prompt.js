/**
 * 3) Escribe un programa que pida el 
 * nombre del usuario con un prompt y escriba un texto 
 * que diga “Hola nombreUsuario”.
 */
/**
 * Incluimos la dependencia prompt, OJO tiene que 
 * instalarla con el comando npm install prompt
 */
 const prompt = require('prompt');

 /**
  * Arrancar el prompt
  */
 prompt.start();
 
 /**
  * Con esta instruccion prodemos obtener los valores
  * que digite el usuario
  */
 prompt.get(['nombreUsuario'], function (err, result) {
     console.log('  Hola: ' + result.nombreUsuario);
});