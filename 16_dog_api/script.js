
document.getElementById("btn").addEventListener("click",async()=>{

    const image = document.getElementById("img");

    try{
        const DogAPI = await fetch("https://dog.ceo/api/breeds/image/random");
        const Dog = await DogAPI.json();

        console.log(Dog);

if (Dog.status !== "success") {
    throw new Error("API failed");
} else {
    image.src = Dog.message;
}
    }catch(error){
        console.log("error this smg",error);
    }


})


//  async function BTNcLICK(){

//         const image = document.getElementById("img");
        

//         try{

//             const dogApi = await fetch("https://www.themealdb.com/api/json/v2/");



//             const dog = await dogApi.json();

//             if(dog.status !== "success"){
//                 throw new Error("API failed");
//             }
//             else{
//                 image.src = dog.message;
//             }

            
//         }catch(error){

//             console.log("error this api",error);
//         }

        
// }