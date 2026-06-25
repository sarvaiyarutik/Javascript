

function Payment(amount){

  return new Promise((resolve,reject)=>{

    if(amount < 0){
      reject("Invalid Amount")
    }
    else{
      setTimeout(()=>{
        console.log(`${amount} Payment initialized`);

        resolve(amount);
      },1000)
    }
  });
}

let balance = 20000;

function CheckBalance(amount){

  return new Promise((resolve,reject)=>{

    if(amount >   balance){
      reject("insufficient balance")
    }
    else{
      setTimeout(()=>{

        console.log("available balance :",`${balance}`);

        resolve(amount);

      },1000);
    }
  });
}

function WithDraw(amount){

  return new Promise((resolve,reject)=>{
   
    setTimeout(()=>{
        console.log(`${amount} has been deduct `);

        balance -= amount;

        resolve(amount);
    },2000)
    
  });
}


function updataBalance(amount){

  return new Promise((resolve,reject)=>{

    if(balance<= 0){
      reject("empty balance");
    }
    else{

      setTimeout(()=>{
        console.log(`${amount} is currently available`)
        resolve(amount);
      },2000)
    }
  });
}


function PaymentStatus(amount){

  return new Promise((resolve,reject)=>{

    setTimeout(()=>{

      resolve(`${amount} amount payment has been successfully`);

    },2000);
  });
}

Payment(-12)
.then((am)=>{
  return CheckBalance(am);
}).then((am)=>{
  return WithDraw(am);
}).then((am)=>{
    return updataBalance(am);
}).then((am)=>{

  return PaymentStatus(am);
}).catch((err)=>{
  console.log(err);
})