
    const cartItems = [
      {
        id:1,
        name: "Wireless Headphones",
        price: 2499,
        quantity: 1,
        image: "https://images.unsplash.com/photo-1505740420928-5e560c06d30e?w=300&h=300&fit=crop"
      },
      {
        id:2,
        name: "Smart Watch",
        price: 5999,
        quantity: 2,
        image: "https://images.unsplash.com/photo-1523275335684-37898b6baf30?w=300&h=300&fit=crop"
      },
      {
            id:3,
        name: "Running Shoes",
        price: 3299,
        quantity: 1,
        image: "https://images.unsplash.com/photo-1542291026-7eec264c27ff?w=300&h=300&fit=crop"
      },
      {
            id:4,
        name: "Leather Backpack",
        price: 1899,
        quantity: 1,
        image: "https://images.unsplash.com/photo-1553062407-98eeb64c6a62?w=300&h=300&fit=crop"
      },
      {
            id:5,
        name: "Bluetooth Speaker",
        price: 1799,
        quantity: 1,
        image: "https://images.unsplash.com/photo-1608043152269-423dbba4e7e1?w=300&h=300&fit=crop"
      },
      {
            id:6,
        name: "Sunglasses",
        price: 899,
        quantity: 2,
        image: "https://images.unsplash.com/photo-1572635196237-14b3f281503f?w=300&h=300&fit=crop"
      },
      {
            id:7,
        name: "Coffee Mug",
        price: 349,
        quantity: 3,
        image: "https://images.unsplash.com/photo-1514228742587-6b1558fcca3d?w=300&h=300&fit=crop"
      },
      {
        id:8,
        name: "Denim Jacket",
        price: 2999,
        quantity: 1,
        image: "https://images.unsplash.com/photo-1544022613-e87ca75a784a?w=300&h=300&fit=crop"
      },
      {
        id:9,
        name: "Yoga Mat",
        price: 999,
        quantity: 1,
        image: "https://images.unsplash.com/photo-1601925260368-ae2f83cf8b7f?w=300&h=300&fit=crop"
      },
    ];

let localCartItem = JSON.parse(localStorage.getItem("cart-item")) || [];


  console.log("localCart",localCartItem);

    function showProduct(){
        
        const product = document.getElementById("product-list");

        product.innerHTML = "";

        cartItems.forEach((e)=>{

            product.innerHTML += `
        
            <div class="col-md-4">
            
    <div class="card product-card">
      <img src="${e.image}" class="card-img-top" alt="${e.name}">
      <div class="card-body">
        <h5 class="card-title">${e.name}</h5>
        <p class="card-text">${e.price}</p>
        <button class="btn btn-primary" onclick="addCart(${e.id})">Add Cart</button>
      </div>
    </div>

            </div>
            `
        })
        
        
    }

    showProduct();



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



  function addCart(id){



    try{


      let product = localCartItem.find((p)=>p.id=== id)

      console.log("already product")

      if(product){
        product.quantity++;
      }
      else{

        product =  cartItems.find((p)=>p.id === id)
        localCartItem.push({...product,quantity: 1})
      }

      alert("cart item added ")
      
  update(); 

      console.log("add item",localCartItem)
    }catch(err){

      console.log("error ")
    }
  };


  const update = ()=>{

    localStorage.setItem("cart-item",JSON.stringify(localCartItem));

  }



  function showCartModel(){

    const cartModal = document.getElementById("cartmodal")

    const modal = new bootstrap.Modal(cartModal);

    modal.show(); 

    showItem();

  }


  function showItem(){

    try{

      const cartTable = document.getElementById("carttable")

      cartTable.innerHTML="";

    localCartItem.forEach((p)=>{

      cartTable.innerHTML+=`
      
      <tr>

      <td>${p.id}</td>
      <td><img src="${p.image}" class="img-fluid" height="20px" width="20px"/></td>
    <td>${p.name}</td>
        <td>${p.price}</td>
              <td>${p.quantity}</td>

        <div class= "d-flex gap-2 align-item-center justify-contact-center">
        
        
        <button>+</button>
        
        </div>      

      </tr>
    
      `
    })

    }catch(error){

      console.log(error)
    }

  }
