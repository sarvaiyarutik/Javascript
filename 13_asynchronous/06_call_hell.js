

// call hell


function Login(){

    setTimeout(function(){
        console.log("login Successfuly....");
    },1000)
}

Login();


function Showmanu(){

    setTimeout(function(){
        console.log("Display Manu....");
    },2000)
}

Showmanu();

function SelectItem(){

    setTimeout(function(){

        console.log("Select Item....");
    },3000)
}

SelectItem();


function ConfigOrder(){

    setTimeout(function(){
        console.log("conform  your order....");
    },4000)
}

ConfigOrder();


function Paymet(){

    setTimeout(function(){

        console.log("Pay your money....")
    },5000)
}

Paymet();

function CheckPaymet(){

    setTimeout(function(){

        console.log("pls check paymet....")
    },6000)
}


CheckPaymet();



function orderSuccess(){

    setTimeout(function(){
        console.log("your order success")
    },7000)
}

orderSuccess();


Login(()=>{
    Showmanu(()=>{
        SelectItem(()=>{
            ConfigOrder(()=>[
                Paymet(()=>{
                    CheckPaymet(()=>{
                        orderSuccess();
                    })
                })
            ])
        })
    })
})

