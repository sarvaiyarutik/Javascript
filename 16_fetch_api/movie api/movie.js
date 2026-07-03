

document.getElementById("form").addEventListener("submit",async(e)=>{


    e.preventDefault();

    const movie = document.getElementById("movie").value.trim();

    console.log("movie api",movie);

    const container = document.getElementById("container");
 
    try{

        const API = await fetch(`https://www.omdbapi.com/?apikey=603ccc2c&s=${movie}`);

        const Data = await API.json();

        console.log(Data); 


        if(Data.Response !== "True"){

            container.innerHTML = "<h1>Not A Movie</h1>";
        }
        else{

            Data.Search.forEach((movies)=>{
                const img = document.createElement("img");

                img.src = movies.Poster;
                img.alt = movies.Title;
                img.style.width = "400px";
                img.style.margin = "20px"; 
                
                container.appendChild(img);
            })
        }

        
    }catch(error){
        console.log(error.massage);
    }

})