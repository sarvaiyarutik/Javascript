

async function fetchAPI() {

    const A1 = await fetch("https://jsonplaceholder.typicode.com/posts")

    const A2 = await A1.json();

    console.log(A2);
    
}

fetchAPI();


const getValue = fetch("https://jsonplaceholder.typicode.com/comments")

getValue.then((res)=>{
    return res.json();
}).then((res)=>{
    console.log(res)
}).catch((err)=>{
    console.log(err);
})



// example



async function FetchApyKey(){

    const api1 = await fetch("https://jsonplaceholder.typicode.com/todos");

    const api2 = await api1.json();

    console.log(api2);
}

FetchApyKey();






const expression = fetch("https://jsonplaceholder.typicode.com/todos");

expression.then((num)=>{

    return num.json();
}).then((num)=>{

    console.log(num);

}).catch((err)=>{

    console.log(err);
})