

//1. index of  specific element index position 


let fruits1 = ["banana","apple","cherry","mango"];

console.log("find the specific index position in element => ",fruits1.indexOf("apple"));


//2. include 
// this method check the array contaain the specific element or not.


let movies1 = ["saiyara","dhurender","bahubali","border","rrr"];

console.log("check the contain =>",movies1.includes("border"));

console.log("check the contain =>",movies1.includes("heraferi"))


    
// 3. sort

// ascending

let number1  = [3,5,7,4,2,5,7,3,2,9,7,];

console.log(number1.sort());

console.log(number1.sort((a,b)=>a-b));

// descending

console.log(number1.sort((a,b)=>b-a));


// alphabet

let alphabet = ["W","C","A","N","M","B","D","E"];

console.log(alphabet.sort());




//4. find 


let number2 = [10,20,30,40,50,60,70,80,90];

let number2Find = number2.find((num1)=>num1>40)

console.log(number2Find);


//5. findIndex  


let number3  = [100,200,300,400,500,600,700,800,900];

let number3Find = number3.findIndex((num2)=>num2 >700);

console.log(number3Find);

// 6. slice extract element 

let fruits2 = ["apple","mango","banana","cherry","water melon"];

console.log("extract a element =>",fruits2.slice(1,4))

// 7. splice

// add and remove element 

let contrary1 = ["USA","Canea","south africa","Nigeria"];
console.log(contrary1.splice(2,3,"array"));

console.log(contrary1);


// 8. every  
// method  check whether all elements in the array satisfy the give condition 

let number4 = [1,2,3,4,5,6,7,8,9];

console.log(number4.every((num3)=>num3>10));









// example 

// 1 index 


let number5 = [10,2030,40,50];

console.log(number5.indexOf(40));

// 2

let fruits3 = ["apple ","banana","cherry"];

console.log(fruits3.indexOf("banana"));

// 3 

let contrary2 = ["india","nepal","pakistan","bhutan"];

console.log(contrary2.indexOf("bhutan"));

// 4  

let movies2 = ["dhurender","saiyara","rrr","bahubali"];

console.log(movies2.indexOf("dhurender"));


// 2 include

// 1.

let fruits4  = ["banana","apple","water melon","mango"];

console.log(fruits4.includes("apple"));

// 2.

let contrary3 = ["india","pakistan","bhutan"];

console.log(contrary3.includes("ddchxd"))


// 3. 

let movies3 = ["dhurender","saiyara","rrr","bahubali"];

console.log(movies3.includes(1));

// 4.

let number6 = [1,2,3,4,5,6,7,8,9];

console.log(number6.includes(5))





// sort 

// example

// 1 

let number7  = [2,1,2,3,4,1,4,0,1,4,4,2,2,
    0,2,3
]

console.log(number7.sort((a,b)=>a-b));


// 2

let number8 = [1,2,3,4,5,5,6,7,8,8,9,0]

console.log(number8.sort((a,b)=>b-a))

// 3

let alphabet2 = ["d","v","v","x","u","p"];

console.log(alphabet2.sort());

// 4

let number9 = [11,3,44,5,6,67,7,7,8,9,8,7,6,54,43,3,23,23,22]

console.log(number9.sort((a,b)=>a-b));



// find and findindex

// 1

let number10 = [100,200,300,400,500,600];

console.log(number10.find((a)=>a>100));


// 2

let number11 = [1,2,3,4,5,5,6,7,8,9,0];

console.log(number11.find((b)=>b>10));

// 3

let number12 = [10,20,30,40,50,60,70];

console.log(number12.find((c)=>c>30));

// 4

let number13 = [14,42,1,5,2,5,2,2,4];

console.log(number13.find((d)=>d>12));




// findindex

// 1

let number14 = [100,200,300,400,500,600];

console.log(number14.findIndex((e)=>e>200));

// 2

let number15 = [1,2,3,4,5,5,6,7,8,9,0];

console.log(number15.findIndex((f)=>f>6));


// 3 

let number16 = [5,3,6,8,8,6,5,3,2,1,34,6,9,8,7,6]

console.log(number16.findIndex((z)=>z>5));


// 4 


let number17 = [1,3,4,6,8,6,5,4,3,2,3,4,5,6,7,7];

console.log(number17.findIndex((x)=>x>8))




// slice

// 1

let fruits5 = ["banana","apple","cherry","water melon"]

console.log(fruits5.slice(1,5));


// 2


let movies4 = ["saiyara","dhurender","bahubali","border","rrr"];

console.log(movies4.slice(-1));

// 3

let contrary4 = ["USA","Canea","south africa","Nigeria"];


console.log(contrary4.slice(0));


// 4


let alphabet3 = ["W","C","A","N","M","B","D","E"];

console.log(alphabet3.slice(2))




// splice

// 1

    let fruits6 = ["banana","apple","water melon"]

    console.log(fruits6.splice(3,1,"cherry","mango"))


 // 2
 
 let movies5 = ["saiyara","dhurender","bahubali","border","rrr"];


 console.log(movies5.splice(3,1,"sdsds"));44


//  3


let contrary5 = ["USA","Canea","south africa","Nigeria"];

 
console.log(contrary5.splice(1,3,"asas"))


// 4


let number18 = [100,200,300,400,500,600];


console.log(number18.splice(4,4,))





// every method


// 1

let number19 = [100,200,300,400,500,600];

    console.log(number19.every((num4)=>num4>700));


    // 2

    let number20 = [10,20,30,40,50,60];

    console.log(number20.every((num5)=>num5>12))


    // 3

    let number21 = [1,2,3,4,5,6,7,8,9];

    console.log(number21.every((num6)=>num6>0))


    // 4


    let number22 = [1000,2000,3000,4000,5000,6000,7000];

    console.log(number22.every((num7)=>4564646))


