

// // in javascript, there are two kinds of object properties:

// // data properties 
// // Accessor properties


// const Student ={

//     firstName :"rutik",
//     lastName : "tirth",

//     get  fullName(){
//         return `${this.firstName} ${this.lastName}`
//     }
// }




// console.log("full name :", Student.fullName);
// // In JavaScript, accessor properties are methods that get or set the value of an object. For that, we use these two keywords:


// // get - to define a getter method to get the property value
// // set - to define a setter method to set the property value


class person{
    constructor(fritName,LastName){
        this.fritName = fritName,
        this.LastName = LastName;
    }

    get fullName(){


        return `${this.fritName} ${this.LastName}`
    }
}

const S1 = new person("rutik","tirth");

const S2 = new person("mit","ruchitii")

console.log("Student name 1:",S1);
console.log("Student name 2:",S2);

console.log("Full name Student 1 :",S1.fullName);
console.log("Full name Student 2 :",S2.fullName);



// example 


class Student {

    constructor(name,age){

        this.name = name;
        this.age = age;

    }

    get twoName (){
        return `${this.name} ${this.age}`
    }
}

const student1 = new Student ("rutik",19);

const student2 = new Student("tushal",20);

console.log(student1);

console.log(student2);

console.log("Student full name :",student1.twoName);

console.log("student full name :",student2.twoName);




// example 


class CarDetail{
    constructor(name,model){

        this.name = name;
        this.model = model;
    }

    get CarInfo(){

       return `${this.name} ${this.model}`;
    }
}

const Car1 = new CarDetail("BMW",2013);

const Car2 = new CarDetail("Aodi",2001);


console.log(Car1);
console.log(Car2);

console.log("cobain name :",Car1.CarInfo);
console.log("cobain name :",Car2.CarInfo);



// example 

class Employee{
    constructor(name,salary){
        this.name = name;
        this.salary = salary;
    }

    get EmployeeInfo(){

        return `${this.name} ${this.salary}`
    }
}

const employee = new Employee("rutik",12000);

console.log(employee);

console.log(employee.EmployeeInfo);


// example 

class Student111{

    constructor(roll,sub){
        this.roll = roll;
        this.sub = sub;
    }

    get StudentInfo(){
       return `${this.roll} ${this.sub}`;
    }
}

const std1 = new Student111(1,"English");

console.log(std1);

console.log(std1.StudentInfo);