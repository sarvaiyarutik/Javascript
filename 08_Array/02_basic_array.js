
// // Accessing Element of an array

let fruits = ["banana","apple","mango","charry"];

console.log("Access value :",fruits[3]);

console.log("Access value :",fruits[0])

console.log("Access value :",fruits[2])

console.log("Access value :",fruits[-1])

console.log("Access value :",fruits[12]);



// Accessing last element of array

let fruits1 = ["banana","apple","mango","charry"];


console.log("last element access :",fruits1[fruits1.length - 1]);
console.log("last element Access :",fruits1[fruits1.length - 2]);
console.log("last element Access :",fruits1[fruits1.length - 3]);
console.log("last element Access :",fruits1[fruits1.length - 12]);
console.log("last element Access :",fruits1[fruits1.length - "yt"])



// // modifying the array element 

let fruits2 = ["banana","apple","mango","charry"];


fruits2[2] = "water melon";

console.log(fruits2);

fruits2[0] = "mango";

console.log(fruits2);

fruits2[1] = "banana";


console.log(fruits2);

fruits2[3] = "apple";

console.log(fruits);

fruits2[4] = "cherry";

console.log(fruits);




// push

// //end  add element 

let fruits3 = ["banana","apple","mango"];


fruits3.push("orange");
console.log("add array :",fruits3);

fruits3.push("cherry");
console.log("add value :",fruits3)

fruits3.push("water melon");
console.log("add value :",fruits3);

fruits3.push("papaya");
console.log("add value :",fruits3);

fruits3.push("pear");
console.log("add value :",fruits3);

// manually push add element 

let element = ["mango","cherry","papaya"];


let length = 0;

for(let key of element){

    length++;
}


element[length] = "apple";
console.log("added value in end for manually  :",element);




// unshift add value for start 


    let fruits = ["banana","water melon","mango"];
console.log("add for start :",fruits);


fruits.unshift("water melon");

console.log("add for start :",fruits);


// manually unshift add start

let count = 0;

for(let key of fruits){
    count++;
}

console.log(count);

for(let i = count - 1;i >= 0;i--){

    fruits[i + 1] = fruits[i];

}
fruits[0] = "apple";

console.log(fruits);



// example 

let number = [100,200,300,400,500];

number.unshift(400);
console.log(number);

number.unshift(100);
console.log(number);

number.unshift(800);
console.log(number);

number.unshift(200);
console.log(number);



// example 

// manually pop 

let number1 = [100,200,300,400,500];

let count= 0;

for(let key of number1){

    count++;
}

number1[count] = 10000;

console.log(number1);

// // example 

let vegetables = ["potato","carrot","tomato"]


let veg = 0;
   
for(let key of vegetables){

    veg++;

}

vegetables[veg] = "onion";

console.log(vegetables);

// example 

let car = ["bmw","audi","varna",]

let carCount = 0;

for(let key of car){

    carCount++;
}

car[carCount] = "alto";

console.log(car);


// // example


let contrary = ["india","pakistan","america"]

let contraryCount = 0;

for(let key of contrary){
    contraryCount++;
}

contrary[contraryCount] = "Thailand";

console.log(contrary);




// unshift manually 

//2 example


let number2 = [100,200,300,400,500];

let numberCount = 0;

for(let key of number2){

    numberCount++;
}


console.log(numberCount);

for(let i=numberCount - 1;i>=0;i--){

    number2[i+1] = number2[i];
}
number2[0]=200;

console.log(number2);



// 3 example

let car2 = ["BMW","Verna","Thar"]

let unshiftCarCount = 0;

for(let key of car2){

    unshiftCarCount++;
}

console.log(unshiftCarCount);

for(let i=unshiftCarCount-1;i>=0;i--){

    car2[i+1] = car2[i];

}

car2[0] = "endeavor";

console.log(car2);


// 4 example

let movie = ["Durneder","Border 2","Dangle"]

let unshiftMovieCount = 0;

for(let key of movie){

    unshiftMovieCount++;
}

console.log(unshiftMovieCount);

for(let i=unshiftMovieCount - 1; i>= 0;i--){

    movie[i+1] = movie[i];
}

movie[0] = "Saiyara";

console.log(movie)


//5 example

let contrary1 = ["brazil","Thailand","Sri-lanka","England"];

let contrary1Count = 0;

for(let key of contrary1){

    contrary1Count++;
}

console.log(contrary1Count);

for(let i=contrary1Count-1;i>=0;i--){
    contrary1[i+1] = contrary1[i];
}

contrary1[0] = "Newzilend"

console.log(contrary1);