

// map method is a  create a new array by applying a function to every element of the original array.

//  new array not return 
// use for iteration
// 

let number1 = [100,200,300,400,500,600,700,800,900];

let number1Map = number1.map((num1)=>num1*5);

console.log(number1Map);


// example 


const PersonalDetail =[
    {name:"rutik",age:19,city:"bnv",work:"web developer"},
    {name:"tirth",age:20,city:"surat",work:"engineer"},
    {name:"mit",age:17,city:"rajkot",work:"video Editing"},
]

// name detail

const FindName = PersonalDetail.map((num1)=>num1.name);

console.log(FindName);

// age detail

const AgeDetail = PersonalDetail.map((num1)=>num1.age);

console.log(AgeDetail);

// city detail

const cityDetail = PersonalDetail.map((num1)=>num1.city);
console.log(cityDetail);

// work detail

const workDetail = PersonalDetail.map((num1)=>num1.work);

console.log(workDetail);




// example


let number2 = [1,2,3,4,5,6,7,8,9];

console.log(number2.map((num2)=>num2*12));


// example


let carDetail = [

    {name:"thar",model:2001,color:"black"},
    {name:"BMW",model:2015,color:"white"},
    {name:"varna",model:1990,color:"dark"},

]

let nameAccess = carDetail.map((num3)=>num3.name);

console.log(nameAccess);

let modelAccess = carDetail.map((num3)=>num3.model);

console.log(modelAccess);

let colorAccess = carDetail.map((num4)=>num4.color);

console.log(colorAccess);

