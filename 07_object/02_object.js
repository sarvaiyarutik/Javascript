

const student = {

    name:"alice",
    std:12,
    rollN:18,
    address:"Bhavnagar",
}

console.log("student detail :",student);

//  Access the specific value using object . notation


console.log("notation :",student.name);

console.log("access std :",student.std);


// bracket notation using access

console.log("using bracket :",student["rollN"]);

console.log("access address :",student["address"]);


// modification for . notation value in js

student.name = "john";

console.log("modification name :",student.name);

student.rollN = "12";

console.log("modification rollN :",student.rollN);



// using bracket [] modification 


student["std"] = 10;

console.log("update std :",student.std)

student["address"] = "Talaja";

console.log("update address :",student.address);


// add properties to an object using brackets natation too

student.subject = "psychology";

console.log("add value :",student)


// using brackets for 

student["language"] = "hindi,English";

console.log("using bracket :",student);




const Student = {
name : "rutik",
age : 19,

}

// access value for . notation 

console.log(Student.name);

console.log(Student.age);


// Access value for brackets []

console.log(Student["name"]);

console.log(Student['age'])


// modification for . notation

Student.name = "tirth";

console.log(Student);

Student.age = 20;
console.log(Student);


// modification for [] Brackets

Student["name"] = "mit";
console.log(Student);

Student["age"] = 23;
console.log(Student);

// added property 

Student.roll = 12;
console.log(Student);


// using [] brackets using

Student["Subject"] = "Telugu";
console.log(Student);



// example 3


const Mobile = {

    name : "oneplus",
    price : 25000,
}

console.log(Mobile);


// access value by . notation 

console.log(Mobile.name);

// access value by [] brackets 

console.log(Mobile["price"])


// modification by . notation 

Mobile.name = "vivo";
console.log(Mobile)

// modification by [] brackets

Mobile["price"] = 12000;
console.log(Mobile);

// add value by . notation 

Mobile.RAM = "8GB";
console.log(Mobile);

// added value by [] Brackets

Mobile["Memory"] = "512GB";
console.log(Mobile);

