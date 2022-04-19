const prompt = require('prompt');

prompt.start();

prompt.get(['Num1','Num2'], function (err, result) {
    let suma = parseInt(result.Num1)+parseInt(result.Num2);
    console.log('  Resultado de la suma ' + suma);
  });