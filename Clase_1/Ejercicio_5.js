const prompt = require('prompt');

prompt.start();

prompt.get(['Num1','Num2'], function (err, result) {
   if (parseInt(result.Num1) > parseInt(result.Num2))   {
    console.log(result.Num1 +' es mayor que '+result.Num2);
   } else if (parseInt(result.Num2) > parseInt(result.Num1))   {
    console.log(result.Num2 +' es mayor que '+result.Num1);
   }  else   {
    console.log('Los dos numeros son iguales');
   }

  });