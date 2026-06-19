
// A constant is a type of variable whose value cannot be changed.

// In JavaScript, we use the const keyword to create constants.

// A const variable has block scope, which means it is only accessible within that block.

// When declaring a variable using const, we must assign a value immediately; otherwise, it will generate an error.


function Person1(){ 

    const num1 = "My name is rutik";

    console.log(" Your name ?\n",num1);

    function Person2(){

        const num2 = " I am developer";

        console.log(num2);
    }

    Person2();
}

Person1();

// Re-declaring or changing a const variable is not allowed



const num = 10;

const std ={

    name : "rutik",
};

console.log(std.name)

std.name = "abc";

console.log(std.name);








// function activity1(){

//    const name1 = "Rutik";

//    console.log("my name is",name1);

//    function activity2(){

//     const name2 = "tushal" ;

//     console.log("your name is",name2);
//    }

//  activity2();


// }

// activity1();





// const num = 10;

// const active = {

//      std : "seven",
// }

// console.log(active.std);
// active.std = "one";

// console.log(active.std);