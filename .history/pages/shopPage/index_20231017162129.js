let main=document.querySelector("main ul")



function getProduct(){
    let product=JSON.parse(localStorage.getItem("products"))

    console.log(product);
for (let index = 0; index < product.length; index++) {
  
  
}


        document.querySelectorAll('.delete-btn').addEventListener('click', deleteProduct)
}

getProduct()

function deleteProduct(){
  console.log('deleted');
}