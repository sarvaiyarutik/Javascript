



let orderId = [""];

const Shopping = new Promise((resolve,reject)=>{

  let  cart = ["shoes","mobile","laptop"];

//   cart = [];

    if(cart.length <= 0){

        reject("please enter your item");
    }
    else{
        setTimeout(()=>{
            orderId = "1234567qwee";
            console.log("order Book");
            resolve(orderId);
        },1000);
    }
});


Shopping.then((orderId)=>{

    return new Promise((resolve,reject)=>{

        if(orderId === ""){
            reject("order failed");
        }
        else{
            setTimeout(()=>{

                console.log("order created");
                resolve(orderId);

            },1000);
        }
    });
}).then((orderId)=>{

    return new Promise((resolve,reject)=>{

        setTimeout(()=>{

            console.log("seller was informal for the order");

            resolve(orderId);
        },1000)
    });
}).then((orderId)=>{

    return new Promise((resolve,reject)=>{

        setTimeout(()=>{

            console.log(orderId,"Deliver customer");

            resolve(orderId);
        },1000)
    })
}).catch((err)=>{

    console.log(err)
}).finally(()=>{

    setTimeout(()=>{


        console.log("do you want to explore more then")
    },1000)
})


