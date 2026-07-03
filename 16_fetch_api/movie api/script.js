

document.getElementById("form").addEventListener("submit",async(e)=>{

    e.preventDefault();

    const movie = document.getElementById("movie").value.trim();

    console.log("movie name",movie);

    const container = document.getElementById("container");

    container.innerHTML = "";

    try{

        const API = await fetch(`https://www.omdbapi.com/?apikey=603ccc2c&s=${movie}`)
        const Data = await API.json();

        console.log(Data);

        if(Data.Response !== "True"){
            container.innerHTML = "<h2>No Movie Found</h2>";
        }

        else{

            Data.Search.forEach((movieS) => {
                const img = document.createElement("img");

          img.src = movieS.Poster;
          img.alt = movieS.Title;
         img.style.width = "200px";
         img.style.margin = "15px";

            container.appendChild(img);

            });
        }
   
   
    }catch(error){

       console.log(error.message)
    }


});