

document.getElementById("form").addEventListener("submit", (e) => {

    e.preventDefault();

    const task = document.getElementById("task").value;
    const btn = document.getElementById("btn")

console.log(task)
   
});


document.getElementById("dblClick").addEventListener("dblclick",(e)=>{

    e.preventDefault();

    alert("submit btn");
});


document.getElementById("mouseHover").addEventListener("mouseover",()=>{

    mouseHover.style.color = "red";
});

document.getElementById("mouseHover1").addEventListener("mouseout",()=>{

    mouseHover1.style.color = "blue"

})