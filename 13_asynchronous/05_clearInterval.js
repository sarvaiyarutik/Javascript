


let intervalIc = setInterval(()=>{
    
        let time = new Date().toLocaleDateString();

    console.log("Time :- ",time);
},1000)

setTimeout(()=>{
    clearInterval(intervalIc);

    console.log("time out");
},5000)