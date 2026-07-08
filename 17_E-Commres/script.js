
  const cartItems = [
    {
      name: "Wireless Headphones",
      price: 2499,
      quantity: 1,
      image: "https://images.unsplash.com/photo-1505740420928-5e560c06d30e?w=300&h=300&fit=crop"
    },
    {
      name: "Smart Watch",
      price: 5999,
      quantity: 2,
      image: "https://images.unsplash.com/photo-1523275335684-37898b6baf30?w=300&h=300&fit=crop"
    },
    {
      name: "Running Shoes",
      price: 3299,
      quantity: 1,
      image: "https://images.unsplash.com/photo-1542291026-7eec264c27ff?w=300&h=300&fit=crop"
    },
    {
      name: "Leather Backpack",
      price: 1899,
      quantity: 1,
      image: "https://images.unsplash.com/photo-1553062407-98eeb64c6a62?w=300&h=300&fit=crop"
    },
    {
      name: "Bluetooth Speaker",
      price: 1799,
      quantity: 1,
      image: "https://images.unsplash.com/photo-1608043152269-423dbba4e7e1?w=300&h=300&fit=crop"
    },
    {
      name: "Sunglasses",
      price: 899,
      quantity: 2,
      image: "https://images.unsplash.com/photo-1572635196237-14b3f281503f?w=300&h=300&fit=crop"
    },
    {
      name: "Coffee Mug",
      price: 349,
      quantity: 3,
      image: "https://images.unsplash.com/photo-1514228742587-6b1558fcca3d?w=300&h=300&fit=crop"
    },
    {
      name: "Denim Jacket",
      price: 2999,
      quantity: 1,
      image: "https://images.unsplash.com/photo-1544022613-e87ca75a784a?w=300&h=300&fit=crop"
    },
    {
      name: "Yoga Mat",
      price: 999,
      quantity: 1,
      image: "https://images.unsplash.com/photo-1601925260368-ae2f83cf8b7f?w=300&h=300&fit=crop"
    },
    {
      name: "Table Lamp",
      price: 1299,
      quantity: 1,
      image: "https://images.unsplash.com/photo-1507473885765-e6ed057f782c?w=300&h=300&fit=crop"
    },
    {
      name: "Wireless Mouse",
      price: 799,
      quantity: 2,
      image: "https://images.unsplash.com/photo-1527864550417-7fd91fc51a46?w=300&h=300&fit=crop"
    },
    {
      name: "Water Bottle",
      price: 599,
      quantity: 2,
      image: "https://images.unsplash.com/photo-1602143407151-7111542de6e8?w=300&h=300&fit=crop"
    }
  ];
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
      <a href="#" class="btn btn-primary">Go somewhere</a>
    </div>
  </div>

          </div>
          `
      })
      
      
  }

  showProduct();



  // local storage

  // set and get

  const data = {

    name:"rutik",
    work:"developer"
  }

  localStorage.setItem("data",JSON.stringify(data))

// get 

const user = JSON.A(localStorage.getItem("data"));


console.log(user)