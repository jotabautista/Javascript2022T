const prompt = require('prompt');

prompt.start();

prompt.get(['Num1','Num2','Num3'], function (err, result) {
   if (parseInt(result.Num1) > parseInt(result.Num2))   {
       if (parseInt(result.Num1) > parseInt(result.Num3))
       {
        console.log('El mayor es: '+result.Num1);
       }
       else{
        console.log('El mayor es: '+result.Num3); 
       }
   } else if (parseInt(result.Num2) >= parseInt(result.Num1))   {
        if (parseInt(result.Num2) > parseInt(result.Num3))
        {
        console.log('El mayor es: '+result.Num2);
        }
        else if (parseInt(result.Num3) > parseInt(result.Num2)){
        console.log('El mayor es: '+result.Num3); 
        }
        else   {
            console.log('Los tres numeros son iguales');
        }
   } 

  });