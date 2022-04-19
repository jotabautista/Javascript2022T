const prompt = require('prompt');

prompt.start();

prompt.get(['Num1'], function (err, result) {
    let cont = 0;

    for (let i = parseInt(result.Num1); i > 1; i--){
        if ((parseInt(result.Num1)%i)==0){
            cont++;
        }
    }
    if (cont==1){
        console.log(result.Num1+'  es primo');
    }else{
        console.log(result.Num1+'  no es primo');
    }
  });