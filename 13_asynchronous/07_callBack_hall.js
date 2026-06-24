


function Payment(amount,callBack){

    if(amount < 0){

        return console.log("submit sufficient balance")

    }
    else{

        setTimeout(()=>{
           (`${amount} payment initiated`);

           callBack(null,amount);
        },500)
    }
};


let balance = 222220;

function CheckBalance(amount,callBack){

    if(amount > balance){

        return callBack("Insufficient Balance",balance)
    }

    else{

        setTimeout(()=>{

            console.log("Balance Checked",balance)
            callBack(null,amount);
        },1000)
    }
};

function PaymentDeduct(amount,callBack){

    setTimeout(()=>{
        console.log(`${amount} withdrawal balance`);

        callBack(null,amount)
    },1000)
};

function UpdateBalance(amount,callBack){

    setTimeout(()=>{
        balance-=amount;

        console.log(`Remaining Balance : ${balance}`);

        callBack(null,amount);
    },1000)

}


function PaymentStatus(amount,callBack){

    setTimeout(()=>{

        console.log("Payment Successfully");

        callBack(null,balance);
    },2000)


};

Payment(0,(err,amount)=>{

    if(err){

        console.log(err)
    }
    else{

        CheckBalance(amount,(err,amount)=>{

            if(err){
                return console.log(err)
            }
            else{
                PaymentDeduct(amount,(err,amount)=>{

                    if(err){
                        console.log(err)
                    }
                    else{
                        UpdateBalance(amount,(err,amount)=>{
                            if(err){
                                console.log(err)
                            }
                            else{
                                PaymentStatus(amount,(err,amount)=>{
                                   if(err){

                                    console.log(err);
                                   }
                                })
                            }
                        })
                    }
                })
            }
        })

    }
})


