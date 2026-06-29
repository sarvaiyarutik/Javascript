// as async function always return the promise 




// function order(){

//     let item = ["samosa","gathiya"]

//     return new Promise((resolve,reject)=>{


//         if(item.length === 0){

//             reject("Please add item");
//         }
//         else{

//             setTimeout(()=>{

//                 console.log("Order Book");
//                 resolve(item);
//             })
//         }
//     })
// }

// function orderReceive(item){

//     return new Promise((resolve,reject)=>{

//         setTimeout(()=>{


//             resolve(item);

//             console.log("Order Confirm");

//         },2000)
//     })
// }

// function orderPeeper(item){

//     let multi = true;

//     return new Promise((resolve,reject)=>{

//         if(!multi){

//             reject("item not available");

//             console.log("failed this item");
//         }

//         else{

//             console.log("Food Prepared")

//             resolve(item);
//         }
//     })
// }

// function foodDelivered(item){

//     return new Promise((resolve)=>{

//         if(item){
//             resolve("food delivered");
//             console.log("enjoy your food");
//         }
//     })
// }

// async function foodOrder(item) {
    
//     const f = await order();
    
//     const o = await orderReceive(f);

//     const p = await orderPeeper(o);

//     const d = await foodDelivered(p);

// }

// foodOrder();



// example car bucking


    // function BookCar(){

    //     let carAvailable = true;

    //     return new Promise((resolve,reject)=>{

    //         setTimeout(()=>{

    //             if(carAvailable){

    //                 console.log("Car booked Successfully")
    //                 resolve(carAvailable)
                    
    //             }
    //             else{
    //                 reject("No cab available");
    //             }
    //         },1000)
    //     })
    // }

    // function driverArrives(driver){

    //     let driverOnTime = false;

    //     return new Promise((resolve,reject)=>{

    //         setTimeout(()=>{

    //             if(driverOnTime){
    //                 console.log("Driver Arrived");

    //                 resolve(driverOnTime);
    //             }
    //             else{

    //                 reject("Driver cancelled ride")
    //             }
    //         },3000)
    //     })
    // }


    // function startRide(){

    //     return new Promise((resolve,reject)=>{

    //         let trafficClear = true;
        
    //         setTimeout(()=>{
        
    //             if(trafficClear){
        
    //                 resolve("Ride Started")
    //             }
    //             else{
    //                 reject("Heavy Traffic,Ride Delayed");
    //             }
    //         },3000)
    //     })

    // }

    // async function CabBooking(){

    

    //         const A1 = await BookCar();
        
    //         const A2 = await driverArrives(A1);
        
    //         const A3 = await startRide(A2);
        
    //         console.log(A3);

    // }


    // CabBooking();





    // example  WhatsApp


    function TypeSmg(){

        return new Promise((resolve,reject)=>{

            console.log("typing massage ....")

            setTimeout(()=>{
                resolve("Hello Sir");

            },1000)
        })
    }

    function sendSmg(Smg){

        return new Promise((resolve,reject)=>{

            console.log("Sending Smg",Smg);

            setTimeout(()=>{
                resolve(Smg);
            },1500)
        })
    }

    function  serverReceive(Smg){

        return new Promise((resolve,reject)=>{

            console.log("Server Received Message")
        
            setTimeout(()=>{

                resolve(Smg);
            },1500)
        })

    }


    function friendReceive(Smg){

        return new Promise((resolve,reject)=>{

            console.log("friend received",Smg);


            setTimeout(()=>{
                resolve(Smg);
            },2000)
        })
    }

    function seenSmg(Smg){

        return new Promise((resolve,reject)=>{

            console.log("Friend is Reading...");

            setTimeout(()=>{
                resolve("Seen");
            },1000)
        })
    }


    async function WhatsAppMessage() {

        let A1 = await TypeSmg();

        let A2 = await sendSmg(A1);

        let A3 = await serverReceive(A2);

        let A4 = await friendReceive(A3);

        let A5 = await seenSmg(A4);

        console.log(A5);
        
    }

    WhatsAppMessage();