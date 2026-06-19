


// filter method create new array containing only the elements that pass a specific condition

let number2 = [1,2,3,4,56,67,7,65,43,23,45,34,23,45,56,67,34,23,21,344,34,54,45,3,23,34,34,23,344,23,123,45,56,67,8];

const numberFilter = number2.filter((number2)=>number2 % 2 === 0 );

console.log(numberFilter);


// example 

const PersonalDetail =[
    {name:"rutik",age:19,city:"bnv",work:"web developer"},
    {name:"tirth",age:60,city:"surat",work:"engineer"},
    {name:"mit",age:40,city:"rajkot",work:"video Editing"},
]


const NameDetail = PersonalDetail.filter((A)=>A.age>30).map((A)=>A.name);

console.log(NameDetail);


const ageFilter = PersonalDetail.filter((B)=>B.age>20);

console.log(ageFilter);


// example

let number3 = [2,4,4,5,5,6,6,7,7,6,6,6,4,5,4,3,3,2,2,3,2,3,2,4,3,4,3,3,4,3,4,6,4,5,7,8];



let filterNumber = number3.filter((number3)=>number3 %2===  0);

console.log(filterNumber);


// example 


let studentDetail = [

  {

    name:"vraj",age:10,Subject:"hindi"
  },
  {
    name:"ruteek",age:19,Subject:"English"
  },
  {
    name:"tirth",age:18,Subject:"marathi"
  }
]

let nameAccess = studentDetail.filter((na)=>na.age>89).map((na)=>na.name);

console.log(nameAccess);

let agrAccess = studentDetail.filter((name1)=>name1.age>12);

console.log(agrAccess);






