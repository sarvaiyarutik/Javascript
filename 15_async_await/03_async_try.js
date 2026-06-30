
// using for try catch


    // function TypeSmg(){

    //     return new Promise((resolve,reject)=>{

    //         let network = false;


    //         if(network){
    //             setTimeout(()=>{
             
    //                 resolve("Hello Sir");
    //          },1000)
    //         }
    //         else{
    //             reject("failed this smg")
    //         }
         
    //     })
    // }

    // function sendSmg(network){

    //     return new Promise((resolve,reject)=>{

    //         console.log("Sending Smg");

    //         setTimeout(()=>{
    //             resolve(network);
    //         },1500)
    //     })
    // }

    // function  serverReceive(network){

    //     return new Promise((resolve,reject)=>{

    //         console.log("Server Received Message")
        
    //         setTimeout(()=>{

    //             resolve(network);
    //         },1500)
    //     })

    // }


    // function friendReceive(network){

    //     return new Promise((resolve,reject)=>{

    //         console.log("friend received");


    //         setTimeout(()=>{
    //             resolve(network);
    //         },2000)
    //     })
    // }

    // function seenSmg(network){

    //     return new Promise((resolve,reject)=>{

    //         console.log("Friend is Reading...");

    //         setTimeout(()=>{
    //             resolve("Seen");
    //         },1000)
    //     })
    // }


    // async function WhatsAppMessage() {

    //     try{
    //         let A1 = await TypeSmg();

    //     let A2 = await sendSmg(A1);

    //     let A3 = await serverReceive(A2);

    //     let A4 = await friendReceive(A3);

    //     let A5 = await seenSmg(A4);

    //     console.log(A5);
    //     } catch(err){
   
    //         console.log(err);
    //     }
        
    // }

    // WhatsAppMessage();



    // example


    function order(){

        let food = ["pizza","samosa"];

        return new Promise((resolve,reject)=>{

            if(food.length === 0){

                return reject("please add food");
            }
            else{

                setTimeout(()=>{

                    resolve(food);
                    console.log("order booked")
                },2000)
            }
        })
    }

    function orderReceive(food){

        return new Promise((resolve,reject)=>{

            setTimeout(()=>{

                resolve(food);
                console.log("order confirmed")
            })
        })
    }

    function itemPrepare(food){

        let material = false;

        return new Promise((resolve,reject)=>{

            if(!material){

                reject("failed to prepare food");
            }
            else{
                    setTimeout(()=>{
                        resolve(food);

                        console.log("food prepare");
                    },2000)
            }
        })

    }

    function foodDelivered(food){

        return new Promise((resolve,reject)=>{

            if(!food){
                reject("food not delivered");
            }
            else{
                setTimeout(()=>{
                    resolve(food);
                    console.log("food delivered")
                },2000)
            }
        })

    }


    async function foodOrder(){

       try {

         const A1 = await order();
        const A2 = await orderReceive(A1);
        const A3 = await itemPrepare(A2)
        const A4 = await foodDelivered(A3);

        console.log(A4);
       }catch(err){
        console.log(err);
       }   
    }

    foodOrder();