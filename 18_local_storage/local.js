

let products = [];


let localCartItem = JSON.parse(localStorage.getItem("cartData")) || [];


async function  ShowProduct(){
    
    const product_list = document.getElementById("product-list");

    try{

        const API = await fetch("https://kolzsticks.github.io/Free-Ecommerce-Products-Api/main/products.json")
   
        const Data = await API.json();

        console.log(Data);

       products = Data;
       
       product_list.innerHTML = "";

       products.forEach((e)=>{

        product_list.innerHTML += `
        
      <div class = "col-md-3  w-25 h-100">

      <div class = "card h-25 shadow">
      
      <img src="${e.image}" class = "card-img-top" height="350">

      <div class ="card-body text-center">
      
      <h4>${e.name}</h4>

      <h4>₹${(e.priceCents / 100).toFixed(2)}</h4>


      <button class = "btn btn-outline-danger" onclick="addCart('${e.id}')">Add to Cart</button>
      </div>
      
      </div>
      </div>

        `

       })
   
       
    }catch(error){

        console.log(error)
    }

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
                <td>${(e.priceCents *e.qty)}</td>


         <td>

        <div class ="d-flex gap-2">
        <button class = "btn btn-danger" onclick="decrease('${e.id}')"> - </button>
        
        ${e.qty }
       <button class="btn btn-success" onclick="increase('${e.id}')">+</button>
        </div>
    
       
        </td>

        <td>

        <button class = "btn btn-danger" onclick="remove('${e.id}')">remove</button>
        
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

     return ( a += c.priceCents * c.qty);
    },0)


    total.innerHTML = `₹ ${totalAmount}`;

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
    }catch(error){

        console.log(error);
    }

}