

// id selector

document.getElementById("heading").innerText = "this is a heading";

// class selector

let workFlow = document.getElementsByClassName("work")[0].innerHTML ="my work ";


// tag selector


let tagSelector = document.getElementsByTagName("h2")[0].innerHTML = "<h1>yes heading 2<h1>";



// Query selector


const query1 = document.querySelector(".q-1");


console.log("change query :",query1);

query1.innerHTML="change a query selector";

const query2 = document.querySelector("#q-1");

console.log(query2);

query2.innerHTML="change id selector";



// query selector all


const query3 = document.querySelectorAll(".q-1");

query3.forEach((num)=>{


    num.innerHTML="change all element";
});


// use to create a new HTMl element dynamically using js.


let h2 = document.createElement("h2");

h2.innerHTML = "this change color";

h2.style.color = "yellow";

document.body.append(h2);







