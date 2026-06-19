
// using object function constructor

const CarDetail1 = {

    name : "swift",
    model:"suzuki",
    color:"black",
    
}

console.log("object method : ",CarDetail1.name);

// destructure 0

const CarDetail2 = {

    name : "innova",
    model:"toyota",
    color:"white",
}

const CarDetail3 = {
    name:"thar",
    model:"mahendar",
    color:"grey",
}

function car(name,model,color){

    this.name = name;
    this.model = model;
    this.color = color;

}
const car1 = new CarDetail("aodi","a4","green");
const car2 = new CarDetail("breza","A","yellow");

console.log("car :",car1);
console.log("car :",car2);



function CarDetail (name,model,color){

    this.name = name;
    this.model = model;
    this.color = color;
}

const CarDetail4 = new CarDetail("BMW","X3","blue");
const CarDetail5 = new CarDetail("range rover","a6","orange");

console.log("car 2 :",CarDetail2);
console.log("car 3 :",CarDetail3);


console.log("car 4 :",CarDetail4);
console.log("car 5 :",CarDetail5);

// add value 

CarDetail.prototype.type = "petrol";
console.log(CarDetail4.type)

// remove value

delete CarDetail4.color;

console.log(CarDetail4);

console.log("checking if a property exists :",CarDetail2.hasOwnProperty("mmm"))
console.log("checking if a property exists :",CarDetail2.hasOwnProperty("color"))



for(let key in CarDetail){
    console.log(CarDetail[key]);
}





// example


const Student ={
    name:"rutik",
    roll:18,
}

console.log("Student detail :",Student)



const Student1={
    name:"tirth",
    roll:7,
}

const Student2={
    name:"mit",
    roll:6,
}

function StudentsDetail(name,roll){
    (this.name=name),
    (this.roll=roll);
}

const std1 = new StudentsDetail("tirth","7");
const std2 = new StudentsDetail("mit","6");


console.log("Std 1 : ",std1);
console.log("Std 2 :",std2);


function StudentDetail2(name,roll){
    this.name= name,
    this.roll=roll;
}

const std3  = new StudentDetail2("ruchit",1);
const std4 = new StudentDetail2("parth",6);

console.log("std 3 :",std3);
console.log("std 4 :",std4);

// add value

Student1.Subject = "hindi";
console.log("add value :",Student1);


// remove value 

delete Student1.name;
console.log("remove value :",Student1);


console.log("check property :",Student1.hasOwnProperty("color"));

console.log("check property :",Student2.hasOwnProperty("name"));


for(let key in std1){
    console.log(std1[key])
}





const vehicle1 = {
    name : "slender",
    company : "hero",
}

console.log(vehicle1);


const vehicle2 = {

    name : "cd100",
    company : "tvs",
}

const vehicle3 = {
    name:"supper",
    company : "honda",
}

function vehicles1(name,company){
    this.name=name;
    this.company=company;
}

const veh1 = new vehicles1("sp","hero");

console.log(vehicle2);
console.log(vehicle3);
console.log(veh1);

// add value 

vehicle2.type= "nnn";

console.log(vehicle2);

// remove

delete veh1.company;
console.log(veh1);

console.log(vehicle2.hasOwnProperty("name"));
console.log(vehicle3.hasOwnProperty("sdd"))

// looping access value

for(let i in veh1){
    console.log(veh1[i]);
}

