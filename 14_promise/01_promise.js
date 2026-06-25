
// The promise object represents the eventual completion of an asynchronous operation and  its resulting value

// promise as an object that links producing code and consuming code 




const shopping = new Promise((resolve,reject)=>{

    let cart = ["shoes","choklet"];

    cart = [];

    setTimeout(()=>{

        if(cart.length === 0){
           return reject("no product found in cart");
        }
        else{
         return resolve("please proceed to check out")
        }
    },500)
});


shopping.then((smg)=>{
    console.log(smg);
});



shopping.catch((err)=>{
    console.log(err);
});






// example 


let WatchOrder = new Promise((resolve,reject)=>{

    let shope = false;

    setTimeout(()=>{

        if(shope){
            resolve("watch is available")
        }

        else{
            reject("The shope is close");
        }
    },1000)
})


WatchOrder.then((smg)=>{
    console.log(smg);
});

WatchOrder.catch((err)=>{
    console.log(err);
})



// milk example 

const milkOrder = new Promise((resolve,reject)=>{

    let milk = false;

    setTimeout(() => {
        
        if(milk){
            resolve("milk has been found")
        }

        else{
            reject("milk shope is not open ")
        }
    }, 1000);
})

milkOrder.then((result)=>{
    console.log(result);
})

milkOrder.catch((err)=>{
    console.log(err);
})