

let ticketID = "";

const Ticket = new Promise((resolve,reject)=>{

    let seats = 0;


    if(seats === 0){

        reject("No Seat Available")
    }
    else{
        setTimeout(()=>{

            console.log("Seat Selected")
        
            resolve("GJ181818");

        },2000)
    }

}).then((id)=>{

    ticketID = id;

    return new Promise((resolve,reject)=>{

        setTimeout(()=>{

            console.log("Payment SuccessFully")

            resolve(ticketID);

        },2000)
    })
}).then((id)=>{

    return new Promise((resolve,reject)=>{

        setTimeout(()=>{

             console.log("Ticket Confirmed");

             resolve(ticketID);
        },2000)
    });
}).then((id)=>{

    return new Promise((resolve,reject)=>{

        setTimeout(()=>{

            console.log("Ticket Sent to Email");

            resolve(ticketID);

        },2000)
    })
}).catch((err)=>{

    console.log(err)
}).finally(()=>{

    console.log("Enjoy Your Movie");
})

