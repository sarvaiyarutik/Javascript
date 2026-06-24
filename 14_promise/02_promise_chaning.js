


const FoodOrder = new Promise((resolve,reject)=>{

    let order = ["pizza","burger"];

    setTimeout(()=>{

        if(order.length > 0){
            resolve(order);

            console.log("order placed")
        }
        else{

            reject("please add some food dish to proceed order");

        }
    },1000)
});


FoodOrder.then((order)=>{
    return new Promise((resolve)=>{

        setTimeout(()=>{
            resolve(order);
            
            console.log("order received");
        },2000);
    });
});


FoodOrder.then((order)=>{

    return new Promise((resolve,reject)=>{

        const material = false;

        setTimeout(()=>{
            if(material){
                resolve(order);
                console.log("order prepared");
            }
            else{

                reject("order rejected");
                console.log("order rejected");
            }
        },3000)
    })
})

.then((order)=>{
    
})
