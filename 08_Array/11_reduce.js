

// reduce
// reduce an array to single value 

// accumulator -> store the result of previous iteration 
// currentValue -> current array element 
// initialValue -> string value of the accumulator



let number1 = [10,20,30,40,50];

let totalNumber = number1.reduce((a,c)=>(a+=c),0);

console.log(totalNumber);


// example


let molProduct = [

    {
        name:"soda",
        price : 80,
        quality:10,
    },
    {
        name:"faceWash",
        price:200,
        quality:5,
    },

    {
        name:"food",
        price:1000,
        quality:10
    }
]

const totalPrice = molProduct.reduce((a,c)=>a+c.price*c.quality,0);

console.log(totalPrice);


// example


let number4 = [100,200,300,400,500];

let numberTotal = number4.reduce((a,c)=>(a+=c),0);

console.log(numberTotal);



// example

let leptopDetail = [

    {name:"hp",price:60000,quantity:5},
    {name:"asus",price:70000,quantity:10},
        {name:"dell",price:40000,quantity:3},
]


let nameTotal = leptopDetail.reduce((a,c)=>a+c.price*c.quantity,0);
console.log("total price :",nameTotal);



// example


let  number5 = [11,12,13,14,15,16,17,18,19];

let totalNumber5 = number5.reduce((a,c)=>(a+c),0);

console.log(totalNumber5);

