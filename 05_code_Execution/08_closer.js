

function closerr(){

    let a = 0;


    function increment(){
       
        console.log(a);
        a++;

    }

    return increment;
}

const counter = closerr();

counter();
counter();
counter();



function c(){

    let num = 10;

    function b(){
        console.log(num);
        num++;
    }

    return b;

}

const counter = c();

counter();
counter();
counter();



function close(){

    let number = 20;

    function n(){
        console.log(number);
        number++;
    }

    return n;
}

const counter = close();

counter();
counter();
counter();