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
prompt.get(['username', 'email'], function (err, result) {
    //
    // Log the results.
    //
    console.log('Command-line input received:');
    console.log('  username: ' + result.username);
    console.log('  email: ' + result.email);
  });