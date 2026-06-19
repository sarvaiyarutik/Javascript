

// object using class  constructor

class StudentDetail1{

    constructor(name,age,sub){

        this.name = name;
        this.age = age;
        this.sub = sub;

    }
}


const class1 = new StudentDetail1("rutik",19,"hindi");


console.log("Student detail : ",class1);


// creating one more object with different value using object literals

const StudentDetail2={
    name : "vraj",
    age : "16",
}

const totalStudent ={...StudentDetail1,...StudentDetail2};
console.log(totalStudent);


// Object length


console.log(Object.keys(totalStudent).length);





// example


class CarDetail{
    constructor(name,color,condition){

        this.name = name;
        this.color = color;
        this.condition = condition;
    }

}


const Car1 = new CarDetail("BMw","Red","good");

console.log(Car1);


const CarDetail1 = {
    
    name : "Bugatti",
    color : "black",
    condition : "all good ",
}

const TotalCar  = {...Car1,...CarDetail1};

console.log(TotalCar);

console.log(Object.keys(totalStudent).length);


// example


class Vehicle{

    constructor(name,model){
        this.name = name,
        this.model = model;
    }
}

const vehi1 = new Vehicle("hero",2013);

console.log(vehi1);

const vehi2 = {

    name : "honda",
    model:2011,
}

const totalVehicle =  {...Vehicle,...vehi2};

console.log(totalVehicle);



// example

class Employee  {

    constructor(name,salary){

        this.name = name;
        this.salary = salary;
    }
    
}

const Employee1 = new Employee("rutik",1222222);


console.log(Employee1);

const Employee2 ={

    name : "tirth",
    salary : 1111111,
}

const total = {...Employee1,...Employee2};

console.log(total)