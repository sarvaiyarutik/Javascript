
// spreed 


// example 1

let array1 = [10,20,30,40,50];

console.log(...array1);



function array2(f){

    console.log(...f);
    
}

let fruits1 = ['apple','mango','banana','orange'];

array2(fruits1);



// example 2

function array3(a2){

    console.log(...a2)
}

let name = ['rutik','tirth','mit','yagnrajsihn'];

array3(name);

// example3

function array4(a3){

    console.log(...a3);
}

let number1 = [1,2,3,4,5,6,7,8,9];

array4(number1)

// rest 


function restOperator(...ff){

    console.log("Fruits Name :",...ff);
}

restOperator(

    "mange",
    "apple",
    "banana",
    "orange",
    "cherry",
);


// example 2

function rest(...r2){

    console.log(...r2);
}

rest(
    1,3,4,4,5,6,6,77,7,
);

// example 3


function rest3(...r3){

    console.log(...r3);
}

rest3(
    10,20,30,40,50
);
