

// const data = {

//     name : "tirth",
//     roll:10,
//     work:"developer"
// }


// localStorage.setItem("data",JSON.stringify(data));

// const res = JSON.parse("data",localStorage.getItem(data));

// console.log(res)


const products = [
  {
    name: "Wireless Mouse",
    price: 599,
    quantity: 25,
    image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS8kgP39bkGsX_LrOt8wuyQSzH2m61tz8ku3g43IecpEg&s=10"
  },
  {
    name: "Bluetooth Headphones",
    price: 1499,
    quantity: 15,
    image: "https://m.media-amazon.com/images/I/61RahTQtAqL.jpg "
  },
  {
    name: "Mechanical Keyboard",
    price: 2999,
    quantity: 10,
    image: "https://www.redragon.in/cdn/shop/products/K551RGB.png?v=1628502100&width=2048"
  },
  {
    name: "USB-C Charger",
    price: 799,
    quantity: 40,
    image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTijDyDQ00y6s3tm9Bfd9AcOOcr_Lgpy5PHPjdxclUitA&s=10"
  },
  {
    name: "Laptop Stand",
    price: 1199,
    quantity: 20,
    image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS5ZrlYgrZ0qz-zQOOyC_L9xsummGMV6HCtVnxADJukmg&s=10"
  },
  {
    name: "Smart Watch",
    price: 3499,
    quantity: 12,
    image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQmR87qFnZDJ5x5Kd3IcxgFWp5F5Jh4aFaJiPOZvyGP9w&s=10"
  },
  {
    name: "Portable SSD 1TB",
    price: 6999,
    quantity: 8,
    image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQpdXSqi3cEcskeoDAinIbfZX6qEaWm3-oH79XOfN_o6w&s=10"
  },
  {
    name: "Webcam HD",
    price: 1899,
    quantity: 18,
    image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQBEbnIvVi1jTcnkmr1u66mmoRETHWw3QARJKdOnrTX8A&s=10"
  },
  {
    name: "Gaming Chair",
    price: 8999,
    quantity: 5,
    image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRbVyGAZ6e2--pUljRtm0C3TLqe_bIywe1xtXouWWt_Fg&s"
  },
  {
    name: "Power Bank 20000mAh",
    price: 1299,
    quantity: 30,
    image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRd17CYxsB-RQD5mEpuJzqAiy4hyclsUAsqCiNAWjIoGA&s=10"
  },
 
];

function allShow(){
 
    const product_i = document.getElementById("product");

    product_i.innerHTML = "";

    products.forEach((e)=>{

        product_i.innerHTML += `
      
        <div class = "col-md-3 flex ">

        <div class="card m-1">
  <img src="${e.image}" class="card-img-top" alt="${e.name}">
  <div class="card-body">
    <h5 class="card-title">${e.price}</h5>
    <p class="card-text">${e.quantity}</p>
    <h4>${e.name}</h3>
  </div>
</div>
        </div>

        `
    })
    

}

allShow();