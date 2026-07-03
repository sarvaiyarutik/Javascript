

document.getElementById("btn").addEventListener("click",async()=>{


   
     const image  = document.getElementById("img");

    try{

        const bes = await fetch("https://api.thecatapi.com/v1/images/search");

        const data = await bes.json();

        console.log(data);

    
        image.src = data[0].url;
    }catch(error){
        console.log("API failed",error);
    }
})