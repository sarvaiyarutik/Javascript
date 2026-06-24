

function PlaceOrder(food,callBack){

    if(!food){

        return callBack("Please select your food item");


    }

    else{
        setTimeout(()=>{
            console.log(`${food} order placed`)
              callBack(null,food);        
        },1000)
    }
}


function ConfirmRestaurant(food,callBack){

    setTimeout(()=>{

        console.log(`Restaurant confirmed for ${food}`);

        callBack(null,food);
    },1000)
}


function PrepareFood(food,callBack){

    setTimeout(()=>{

        console.log(`${food} is being prepared`);
        callBack(null,food)
    },1000);
}
 
function AssignDeliveryPartner(food,callBack){

    setTimeout(()=>{
        console.log("Delivery Assigned");
        callBack(null,food)
    },1000)
}

function DeliverFood(food,callBack){

    setTimeout(()=>{
        console.log(`${food} Delivery Successfully`);

        callBack(null,food);
    },2000)

}


PlaceOrder("pizza",(err,food)=>{
    if(err){
        return console.log(err);
    }else{

        ConfirmRestaurant(food,(err,food)=>{

            if(err){
                return console.log(err);
            }
            else{

                PrepareFood(food,(err,food)=>{

                    if(err){
                       return console.log(err);
                    }
                    else{
                        AssignDeliveryPartner(food,(err,food)=>{

                            if(err){
                                return console.log(err);
                            }
                            else{
                                DeliverFood(food,(err,food)=>{

                                    if(err){
                                        return console.log(err)
                                    }

                                    console.log("Order Complete 👉")
                                })
                            }
                        })
                    }
                })
            }
        })
    }
})
