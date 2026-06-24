

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
