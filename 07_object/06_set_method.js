

// set method 

const StudentDetail = {
    name : "rutik",
    age : "",


    set StudentAge(age){
       if(age<18){
        console.log("Student age not valid");
       }
       else{
         this.age = age;
       }
    },

    get StudentAge(){
        return this.age;
    }
};

StudentDetail.StudentAge = 4;

console.log("Student age : ",StudentDetail.StudentAge)





// set value using class



class Student{

    constructor(name,age){
       (( this.name = name),this.age);
        
    }

    set AgeValue(age){

        if(age <18){
            return console.log("not age");
        }

        this.age = age;
    }
}

const ageSet = new Student("tirth");

ageSet.AgeValue = 18;


console.log(ageSet);

console.log(ageSet.age);


// Example


class Employee {

    constructor(name,salary){
        this.name = name,
        this.salary = "";
    }

    set salaryValue(salary){
        if(salary<100000000){
            console.log("invalid salary");
            return 0;

        }

        this.salary = salary;
    }
}


const employeeDetail = new Employee("ruteek");

employeeDetail.salaryValue = 150000;

console.log(employeeDetail);


// example 

class Mark{
    constructor(){
        this.mark  = "";
    }

    set markInfo(mark){

        if(mark> 100 || mark < 0){

            console.log("invalid choice");

            return;
        }

        this.mark = mark;
    }
}
const result = new Mark();

result.markInfo = 37;

console.log(result);



// example



class Exam{
    constructor(math,english,hindi){
        this.math =  math;
        this.english = english;
        this.hindi = hindi;
        this.average = 0;
    }

    set StudentMark(value){
        this.average = (this.math + this.english + this.hindi) / 3;
    }
}

const example = new Exam(50,50,50);

example.StudentMark = true;


console.log(example);






// example


class Exam{
    constructor(math,hindi,english){
        this.math = math;
        this.hindi = hindi;
        this.english = english;
        this.average = 0;
    }

    set markInfo(value){
        this.average = (this.math + this.hindi + this.english) / 3;
    }
}

const exam = new Exam(50,45,34);

exam.markInfo = true;

console.log(exam);