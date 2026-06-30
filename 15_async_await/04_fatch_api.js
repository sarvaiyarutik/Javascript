

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