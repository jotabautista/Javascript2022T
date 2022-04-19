const prompt = require('prompt');

prompt.start();

prompt.get(['Num1'], function (err, result) {
    if ((parseInt(result.Num1)%2)==0){
        console.log(result.Num1+'  es divisible por 2');
    }else{
        console.log(result.Num1+'  no es divisible por 2');
    }
  });