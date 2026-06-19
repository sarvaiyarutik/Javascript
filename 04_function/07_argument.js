


function active(){

    let sum = 0;

    for(let i = 0; i<arguments.length; i++){

        sum+=arguments[i];
    }

    console.log("result :",sum);

}

active(10,20,30,40,50,60,70,80,90,100);


function active2(){

    for(let i = 0; i < arguments.length; i++){

        console.log(arguments[i]);

    }

}

active2('apple','mango','banana','cherry');


function active3(){

    for(let i=0;i<arguments.length;i++){
        console.log(arguments[i]);
    }
}

active2('rutik','mit ','tirth','bago');