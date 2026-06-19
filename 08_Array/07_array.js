

//1. join method is convert into string 
// join method is return a new string

let fruits1 = ["apple","cherry","mango","banana"];

console.log("fruits :",fruits1);
console.log("join method :",fruits1.join(""));
console.log("fruits join :",fruits1.join())



// 2. flat nesting parent 

let number1 = [10,20,30,40,50,[60,70,[80,90]]]

console.log("number :",number1);

console.log("use for flat :",number1.flat());
console.log("multiple number in nested :",number1.flat(2))

let number2 = [10,20,30,40,50,[60,70,[80,90,[100,200,[300,[400,[500,[600,[700]]]]]]]]];

console.log("i don't number :",number2.flat(Infinity));
 

//3 slice is a extract to array 
// return new array
// return original array . on the  start and end index as argument.

let contrary1 = ["india","japan","brazil","france"];

console.log("slice method :",contrary1.slice(1,3));



//4. some method that check if at least one element passes a condition
// return value for boolean(true false  )


let number3 = [1,2,3,4,5,6,7,8];

const result = number3.some((A) =>{

    return A > 10;
});

console.log(result);


//5 reverse method 
// return a new array iteration

console.log("reverse in array :",number3.reverse());









// Example 

// 1. join


let car1 = ["BNW","Thar","Verna"];

console.log(car1.join(""));
console.log(car1.join());

// 2. 

let contrary2 = ["india","nepal","bhutan","bangladesh"];

console.log(contrary2.join());
console.log(contrary2.join("-"))

// 3 .

let fruits2 = ["mango","apple","banana","water melon"]

console.log(fruits2.join("ABCD"));

// 4 .


let movies = ["Dhurnder","bahubali","siddt"];

console.log(movies.join("+"));


// 5 .


let CricketPlayer = ["Virat","Rohit","Dhoni","gill"];

console.log(CricketPlayer.join().length);





// example flat


// 1. 

let car2 = ["Bleno","T20","farari"];


console.log(car2.flat());

// 2. 

let fruits3 = ["apple","banana",["cherry"]];

console.log(fruits3.flat());

// 3.

let contrary3 = ["saudi","australia","newzilend",["india","nepal",["england","germany",["usa"]]]];

console.log(contrary3.flat(1));

// 4. 

let number4 = [1,2,3,4,5,[6,7,8,[9,10,[11,[12,[13,[14,[15,[16,[17,[18,[19,[20]]]]]]]]]]]]];

console.log(number4.flat(Infinity));

// 5. 

let cricketPlayer = ["virat","dhaavan","ab","rahul"];

console.log(cricketPlayer.flat("sdfdfdf"))



// Slice

// 1.

let car3 = ["XQV","thar","Breaza","verna"];

console.log(car3.slice(1,4));

// 2.

let contrary4 = ["india","nepal","Bhutan","pakistan"];

console.log(contrary4.slice(-1));

// 3.

let fruits4 = ["mango","banana","water melon"];

console.log(fruits4.slice("ddss"));

// 4. 

let number5 = [1,2,3,4,5,6,7,8,9];

console.log(number5.slice(1,7));

// 5.

let cricket1 = ["T20","ODI","Test"];

console.log(cricket1.slice(1));




// some 


// 1.

let number6 = [1,2,3,4,5,6,7,8,9];

const num1 = number6.some((A)=>{

    return A > 5;
});

console.log(num1);


// 2. 

let number7 = [11,12,13,14,15,16,17,18,19,20];

const num2 = number7.some((N)=>{

    return N > 100;
})

console.log(num2);


3.


let number8 = [100,200,300,400,500,600,700,800,900]

const num3 = number8.some((B)=>{

    return B>10000;
})

console.log(num3);


// 4.


let number9 = [-1,-2,-3,-4];

const num4 = number9.some((C)=>{

    return C>-1;
})

console.log(num4);

// 5.

let number10 = [1000,2000,3000,4000,5000,6000,7000,8000,9000];

const num5 = number10.some((D)=>{
    return D >1000;
})

console.log(num5);


// reverse 

// 1.

let fruits5  = ["apple","banana","cherry","water melon"];

console.log(fruits5.reverse());

// 2.

let contrary5 = ["india","bhutan","nepal","sri-lanka"];

console.log(contrary5.reverse())


// 3. 


let car4 = ["verna","thar","BMW"];

console.log(car4.reverse());


// 4. 

let movies1 = ["saiyara","dhurender","border","bahubali"];

console.log(movies1.reverse());


// 5.

let cricket2 = ["virat","rohit","sachin","rahul","panth"];

console.log(cricket2.reverse());