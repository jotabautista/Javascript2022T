 const prompt = require('prompt');

 prompt.start();

 prompt.get(['username'], function (err, result) {
     console.log('  Hola ' + result.username);
   });