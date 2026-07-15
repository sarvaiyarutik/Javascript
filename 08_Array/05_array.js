

// integrity element 


let movieName = ["dangle","RRR","bahubali","bhutbangla","shivaji"];

for(let i=0;i<movieName.length;i++){

    console.log(movieName[i]);
}

// using for of loop 

for(let key of movieName){

    
    console.log(key);
}   


// forEach 



let number = [1,2,3,4,5,6,7,8,9,10]

number.forEach((num)=>{

    console.log(num*num);
})


// concat

// joint to string

let fruits2 = ["apple","banana","cherry"]

let concatJoint = movieName.concat(fruits2);

console.log(concatJoint);


// Tostring this method is number to string convert

console.log("number to string convert :",number.toString());





// integrity 

let contrary1 = ["india","nepal","bangladesh","bhutan","chin","pakistan","sri-lanka"];


for(let i=0;i<contrary1.length;i++){
    console.log(contrary1[i]);
}

for(let key of contrary1){
    console.log(key)
}

// example

let movie1 = ["dhurander","border","saiyara","bhutbangala","firHeraferi","dhamal","siddt"];

for(let i=0;i<movie1.length;i++){
    console.log(movie1[i]); 
}

for(let key of movie1){
    console.log(key);
}


// example 

let car1 = ["volvo","bmw","innova","verna"];

for(let i=0;i<car1.length;i++){
    console.log(car1[i])
}

for(let key of car1){
    console.log(key);
}


// example  

let num1 = [1,2,3,4,5,6,7,8,9,10];

for(let i=0;i<num1.length;i++){

    console.log(num1[i]);
}

for(let key of num1){
    console.log(key);
}


// forEach

let movie3 = ["dhurander","border","saiyara","bhutbangala","firHeraferi","dhamal","siddt"];

movie3.forEach((movie)=>{

    console.log(movie);
})

 
// example 

let car3 =  ["volvo","bmw","innova","verna"];

car3.forEach((car)=>{

    console.log(car+car)
})

// example 

let number2 = [1000,2000,3000,4000,5000]

number2.forEach((multiple)=>{

    console.log(multiple*multiple);
})


// example


let contrary3 = ["india","nepal","bangladesh","bhutan","chin","pakistan","sri-lanka"];

contrary3.forEach((contrary)=>{
    console.log(contrary)
})



// concat method 
// example

let concatMethod1 = movieName.concat(number); 
console.log(concatMethod1);

let concatMethod2 = fruits2.concat(contrary1);

console.log(concatMethod2);

let concatMethod3 = movieName.concat(movie1);

console.log(concatMethod3);

let concatMethod4 = car1.concat(contrary1);
console.log(concatMethod4);



// TOstring 


// example 

console.log("array to string :",contrary1.toString());

console.log(car1.toString());

console.log(movie1.toString());

console.log(number.toString());