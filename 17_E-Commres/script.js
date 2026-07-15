
//     const cartItems = [
//       {
//         id:1,
//         name: "Wireless Headphones",
//         price: 2499,
//         quantity: 1,
//         image: "https://images.unsplash.com/photo-1505740420928-5e560c06d30e?w=300&h=300&fit=crop"
//       },
//       {
//         id:2,
//         name: "Smart Watch",
//         price: 5999,
//         quantity: 2,
//         image: "https://images.unsplash.com/photo-1523275335684-37898b6baf30?w=300&h=300&fit=crop"
//       },
//       {
//             id:3,
//         name: "Running Shoes",
//         price: 3299,
//         quantity: 1,
//         image: "https://images.unsplash.com/photo-1542291026-7eec264c27ff?w=300&h=300&fit=crop"
//       },
//       {
//             id:4,
//         name: "Leather Backpack",
//         price: 1899,
//         quantity: 1,
//         image: "https://images.unsplash.com/photo-1553062407-98eeb64c6a62?w=300&h=300&fit=crop"
//       },
//       {
//             id:5,
//         name: "Bluetooth Speaker",
//         price: 1799,
//         quantity: 1,
//         image: "https://images.unsplash.com/photo-1608043152269-423dbba4e7e1?w=300&h=300&fit=crop"
//       },
//       {
//             id:6,
//         name: "Sunglasses",
//         price: 899,
//         quantity: 2,
//         image: "https://images.unsplash.com/photo-1572635196237-14b3f281503f?w=300&h=300&fit=crop"
//       },
//       {
//             id:7,
//         name: "Coffee Mug",
//         price: 349,
//         quantity: 3,
//         image: "https://images.unsplash.com/photo-1514228742587-6b1558fcca3d?w=300&h=300&fit=crop"
//       },
//       {
//         id:8,
//         name: "Denim Jacket",
//         price: 2999,
//         quantity: 1,
//         image: "https://images.unsplash.com/photo-1544022613-e87ca75a784a?w=300&h=300&fit=crop"
//       },
//       {
//         id:9,
//         name: "Yoga Mat",
//         price: 999,
//         quantity: 1,
//         image: "https://images.unsplash.com/photo-1601925260368-ae2f83cf8b7f?w=300&h=300&fit=crop"
//       },
//     ];

// let localCartItem = JSON.parse(localStorage.getItem("cart-item")) || [];


//   console.log("localCart",localCartItem);

//     function showProduct(){
        
//         const product = document.getElementById("product-list");

//         product.innerHTML = "";

//         cartItems.forEach((e)=>{

//             product.innerHTML += `
        
//             <div class="col-md-4">
            
//     <div class="card product-card">
//       <img src="${e.image}" class="card-img-top" alt="${e.name}">
//       <div class="card-body">
//         <h5 class="card-title">${e.name}</h5>
//         <p class="card-text">${e.price}</p>
//         <button class="btn btn-primary" onclick="addCart(${e.id})">Add Cart</button>
//       </div>
//     </div>

//             </div>
//             `
//         })
        
        
//     }

//     showProduct();



    // local storage

    // set and get

  //   const data = {

  //     name:"rutik",
  //     work:"developer"
  //   }

  //   localStorage.setItem("data",JSON.stringify(data))

  // // get 

  // const user = JSON.A(localStorage.getItem("data"));


  // console.log(user)



  // function addCart(id){



  //   try{


  //     let product = localCartItem.find((p)=>p.id=== id)

  //     console.log("already product")

  //     if(product){
  //       product.quantity++;
  //     }
  //     else{

  //       product =  cartItems.find((p)=>p.id === id)
  //       localCartItem.push({...product,quantity: 1})
  //     }

  //     alert("cart item added ")
      
  // update(); 

  //     console.log("add item",localCartItem)
  //   }catch(err){

  //     console.log("error ")
  //   }
  // };


  // const update = ()=>{

  //   localStorage.setItem("cart-item",JSON.stringify(localCartItem));

  // }



  // function showCartModel(){

  //   const cartModal = document.getElementById("cartmodal")

  //   const modal = new bootstrap.Modal(cartModal);

  //   modal.show(); 

  //   showItem();

  // }


  // function showItem(){

  //   try{

  //     const cartTable = document.getElementById("carttable")

  //     cartTable.innerHTML="";

  //   localCartItem.forEach((p)=>{

  //     cartTable.innerHTML+=`
      
  //     <tr>

  //     <td>${p.id}</td>
  //     <td><img src="${p.image}" class="img-fluid" height="40px" width="70px"/></td>
  //   <td>${p.name}</td>
  //       <td>${p.price}</td>
  //             <td>${p.quantity}</td>
  //      <td>

  //       <div class= "d-flex gap-2 align-item-center justify-content-center">
        
        
  //       <button class = "btn btn-outline-primary">+</button>
  //       <h4>${p.quantity}<h4>

  //       <button class = "btn btn-outline-danger">-</button>
        
  //       </div>      
  //      </td>
       

  //     </tr>
    
  //     `
  //   })

  //   }catch(error){

  //     console.log(error)
  //   }

  // }





let products = [];

let localCartItem = JSON.parse(localStorage.getItem("cartData"))|| [];


async function productShow(){


  const productList = document.getElementById("product-list")


  try{

    const API = await fetch("https://kolzsticks.github.io/Free-Ecommerce-Products-Api/main/products.json")

    const Data = await API.json();

    products = Data;


    productList.innerHTML = "";

      products.forEach((p)=>{

      productList.innerHTML += `
      
      <div class = "col-md-6 w-25 h-100">

      <div class = "card h-25 shadow">
      
      <img src="${p.image}" class = "card-img-top" height="205">

      <div class ="card-body text-center">
      
      <h4>${p.name}</h4>

      <h4>₹${(p.priceCents / 100).toFixed(2)}</h4>

      <button class = "btn btn-danger " onclick="addCart('${p.id}')">Add to Cart</button>

      </div>
      
      </div>
      </div>

      `
    })

  }catch(err){

    console.log(err);
  }



}

productShow();



function addCart(id){

  try{


    let product = localCartItem.find((e)=>e.id === id);

    console.log("product Added");


    if(product){

      product.qty++;
    }
    else{

      product = products.find((e)=>e.id === id);


      localCartItem.push({...product,qty:1})
    }

    alert("Product added successfully");

    update();

    console.log("product add",localCartItem);
  }catch(err){

    console.log(err)
  }


}

  const update = () =>{

    localStorage.setItem("CartData",JSON.stringify(localCartItem));
  }


  function showCartModel(){


    let modal = new bootstrap.Modal(document.getElementById("cartmodal"))

    modal.show();

    updataData();

  }

  function updataData(){


    try{

      let table = document.getElementById("carttable");


      table.innerHTML = "";

      localCartItem.forEach((p)=>{

        table.innerHTML += `
        
        
        <tr>
        
        <td>${p.id}</td>
        <td><img src="${p.image}" class = "img-fluid" height="35px" width="35px"></td>
        
        <td>${p.name}</td>

        <td>${p.priceCents}</td>
        <td>${p.qty}</td>


        <td>
    
        <div class ="d-flex gap-2 align-item-center justify-contact-center">
        
        <button class = "btn btn-danger">+</button>

        <h5>${p.id}</h5>
<button class = "btn btn-danger">-</button>
        </div>
        </td>
        </tr>

        `
      })
    }catch(err){
      console.log(err);
    }
  }




