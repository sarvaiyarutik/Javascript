
// pop is remove the last element 

let fruits = ["apple","water melon","mango"];

console.log(fruits.pop());

console.log("remove last element :",fruits);


// remove the first element 

console.log(fruits.shift());

console.log("remove first element :",fruits);


// splice 

// 1. where start
// 2. how many items to remove 
// 3. first item to inset
// 4. second time to insert


let fruits1 = ["apple","water melon","mango"];

console.log(fruits1.splice(0,2,"cherry","banana"));

console.log("",fruits1);





// 2 examples pop()

let food1 = ["tomato","potato","carrot"];

console.log("remove last element :",food1.pop());

console.log(food1);



// 3 example

let car1 = ["BMW","Volvo","Verna"];

console.log(car1.pop());

console.log(food1)


// 4 example 

let contrary4 = ["india","sri-lanka","franc"];

console.log(contrary4.pop());
console.log(contrary4);


// 5 example 

let movie = ["Durneder","Border 2","Dangle"]

console.log(movie.pop());

console.log(movie);


// shift 

// example 2

let food2 = ["tomato","potato","carrot"];

console.log(food2.shift());

console.log(food2);

// example 3

let car2 = ["BMW","Volvo","Verna"];

console.log(car2.shift());

console.log(car2);


// example 4

let contrary5 = ["india","sri-lanka","franc"];


console.log(contrary5.shift());

console.log(contrary5);


// example 5 

let movie1 = ["Durneder","Border 2","Dangle"]

console.log(movie1.shift());

console.log(movie1);



// splice

// example 2

let fruits2 = ["apple","water melon","mango"];

console.log(fruits2.splice(1,3,"cherry","orange"));

console.log(fruits2);

// example 3

let number1 = [1,2,3,4,5,6,7,8,9];

console.log(number1.splice(3,6,1000,1000000));

console.log(number1);


// example 4

let contrary6 = ["india","Thailand","Germany","sri-lanka"];

console.log(contrary6.splice(0,3,"pakistan","nepal"));

console.log(contrary6);

// example 5

let movie2 = ["durneder","saiyara","border"];

console.log(movie2.splice(0,2,"bahubali","heraferi"));
console.log(movie2);