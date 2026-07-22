
    const products = [
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




let localCartItem = JSON.parse(localStorage.getItem("cartData")) || [];


async function  ShowProduct(){
    
    const product_list = document.getElementById("product-list");


       
       product_list.innerHTML = "";

       products.forEach((e)=>{

        product_list.innerHTML += `
        
      <div class = "col-md-3  w-25 h-100">

      <div class = "card h-25 shadow">
      
      <img src="${e.image}" class = "card-img-top" height="350">

      <div class ="card-body text-center">
      
      <h4>${e.name}</h4>

      <h4>₹${(e.price / 100).toFixed(2)}</h4>


      <button class = "btn btn-outline-danger" onclick="addCart(${e.id})">Add to Cart</button>
      </div>
      
      </div>
      </div>

        `

       })
   
       
}
ShowProduct();


function addCart(id){

    try{

        let product = localCartItem.find((p)=>p.id === id);


        if(product){

            product.qty++;
        }
        else{

            product = products.find((p)=>p.id === id);


            localCartItem.push({...product,qty:1});
        }
        console.log(localCartItem)
        
                alert("Product Added Successfully");
        
                update();
                
    }catch(error){

        console.log(error);
    }



}


function update(){

  localStorage.setItem("cartData", JSON.stringify(localCartItem));
    console.log(localCartItem)

}


function shoModal(){

    let modal = new bootstrap.Modal(document.getElementById("shoModal"))

    modal.show();
   

updateData();
}

function updateData(){

    try{

        let table = document.getElementById("cartTable")

        table.innerHTML = "";

        localCartItem.forEach((e)=>{

            table.innerHTML += `
            
            <tr>
            
              <td>${e.id}</td>
        <td><img src="${e.image}" class = "img-fluid" height="35px" width="35px"></td>
        
        <td>${e.name}</td>
                <td>${(e.price *e.qty)}</td>


         <td>

        <div class ="d-flex gap-2">
        <button class = "btn btn-danger" onclick="decrease(${e.id})"> - </button>
        
        ${e.qty }
       <button class="btn btn-success" onclick="increase(${e.id})">+</button>
        </div>
    
       
        </td>

        <td>

        <button class = "btn btn-danger" onclick="remove(${e.id})">remove</button>
        
        </td>
        </div>
        </td>

            </tr>
            
            `
        })
         total();
    }catch(error){

        console.log(error);
    }

}

function increase(id){

    try{

        let product = localCartItem.find((p)=>p.id === id);

        if(product){

            product.qty++;
        }

        update();
        updateData();


    }catch(error){

        console.log(error);
    }

}


function decrease(id){

    try{

        let product = localCartItem.find((p)=>p.id===id);

        if(product){

            product.qty--;
        }
        if(product.qty === 0){

            localCartItem = localCartItem.filter((p)=>p.id !== id);
        }

        update();
        updateData();   
    }catch(error)
{
    console.log(error);
}
}


function remove(id){

    try{

        localCartItem = localCartItem.filter((p)=>p.id !== id);

        update();
        updateData();

    }catch(error){

        console.log(error)
    }


}


function total(){

    const total = document.getElementById("total");


    total.innerHTML = "";

    const totalAmount = localCartItem.reduce((a,c)=>{

     return ( a += c.price * c.qty);
    },0)


    total.innerHTML = `₹${totalAmount}`;

    console.log("Total Amount :",totalAmount)

}

function checkOut(){


    try{

        if(localCartItem.length === 0){

            return alert("your card is empty please added items");
        }

        alert("your order is successfully");

        localCartItem = [];

        updateData();

        const cartModel = document.getElementById("cartModel");

        const modal = new bootstrap.Modal(cartModel);

        modal.hide();

        ShowProduct();
    }catch(error){

        console.log(error);
    }

}