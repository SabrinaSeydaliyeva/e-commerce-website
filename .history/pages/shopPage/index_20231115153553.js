let main = document.querySelector("main ul");
let items = document.querySelector(".items");

function getProduct() {
  let product = JSON.parse(localStorage.getItem("products"));
  items.innerText = `${product.length} items`;
  console.log(product);

  for (let index = 0; index < product.length; index++) {
    main.innerHTML += `
        <li>
            <img src="${product[index].img}" alt="" />

      <div class="position-text">
        <div class="star">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="16"
            height="16"
            viewBox="0 0 16 16"
            fill="none"
          >
            <g clip-path="url(#clip0_75_1233)">
              <path
                d="M16 6.12414H9.89333L8 0L6.10667 6.12414H0L4.93333 9.90345L3.06667 16L8 12.2207L12.9333 16L11.04 9.87586L16 6.12414Z"
                fill="#FFCE31"
              />
            </g>
            <defs>
              <clipPath id="clip0_75_1233">
                <rect width="16" height="16" fill="white" />
              </clipPath>
            </defs>
          </svg>

          <p>4.3</p>
        </div>

              <div class="heart">
              <img src="./images/no-fav.png" alt="">
              </div>
            </div>

            <h2>${product[index].name}</h2>
            <h3># <span> ${product[index].id} </span> </h3>
            <p>${product[index].info}</p>
            <h4>${product[index].productCount}</h4>
            <h5>$<span>${product[index].amount}</span></h5>

            <div class="div-btn">
            <button class="add-btn">
          <i class="fa-solid fa-cart-shopping"></i>
        </button>
            <button class="delete-btn" role="button">
              <i class="fa-sharp fa-solid fa-trash"></i>
            </button>
          </div>

          </li>


         
        `;
  }

  let noFavImg = document.querySelectorAll(".heart img");

  noFavImg.forEach((element) => {
    element.addEventListener("click", () => changeImg(element));
  });
}

let isFav = false;

function changeImg(element) {
  if (isFav) {
    element.src = "./images/no-fav.png ";
    isFav = false;
  } else {
    element.src = "./images/fav.png ";
    isFav = true;
  }
}

getProduct();

// function deleteProduct(element) {
//   let product = JSON.parse(localStorage.getItem("products"));
//   const newArr = product.filter((object) => {
//     return object.id != element.parentElement.querySelector("h3").innerText;
//   });
//   localStorage.setItem("products", JSON.stringify(newArr));
//   element.parentElement.remove();

//   console.log(newArr);
// }

// delete action

let deleteBtns = document.querySelectorAll(".delete-btn");
deleteBtns.forEach((element) => {
  element.addEventListener("click", () => deleteProductFunc(element));
});

function deleteProductFunc(element) {
  let productCount = element.parentElement.parentElement.querySelector("h4");

  let product = JSON.parse(localStorage.getItem("products"));
  console.log(product);
  let id =
    element.parentElement.parentElement.querySelector("h3 span").innerText;

  if (productCount.innerText > 1) {
    productCount.innerText -= 1;

    product.forEach((element) => {
      if (element.id == id) {
        console.log(element);
        element.productCount--;
        localStorage.setItem("products", JSON.stringify(product));
      }
    });
  } else {
    element.parentElement.parentElement.remove();
    let newArr = product.filter((object) => {
      return object.id != id;
    });
    localStorage.setItem("products", JSON.stringify(newArr));
    element.parentElement.remove();
  }
}

// basket action

let addBtns = document.querySelectorAll(".add-btn");
addBtns.forEach((element) => {
  element.addEventListener("click", () => addProductFunc(element));
});

let basketCount = document.querySelector(".basket-count");
let balance = document.querySelector(".balance");

function addProductFunc(element) {
  let productCount = element.parentElement.parentElement.querySelector("h4");
  let productId =
    element.parentElement.parentElement.querySelector("h3 span").innerText;
  let productAmount =
    element.parentElement.parentElement.querySelector("h5 span");

  basketCount.innerText = +basketCount.innerText + 1;
  productCount.innerText -= 1;

  balance.innerText = +balance.innerText + +productAmount.innerText;
  showProduct(element.parentElement.parentElement);
}

function showProduct(li) {
  let productId= li.querySelector('h3 span')
  let productName= li.querySelector('h2')
  let productImg= li.querySelector('img').src
  let basketUl = document.querySelector(".basket-ul");
let basketList = basketUl.querySelectorAll('li')
for (let index = 0; index < basketList.length; index++) {
  if (basketList[index].querySelector('h3').innerText==productId) {
    basketList[index].querySelector('p').innerText=+ basketList[index].querySelector('p').innerText+1
  break
  }
  
}
  basketUl.innerHTML += `
  <li>
  <img src="${productImg}" alt="" />

  <div class="product-info">
    <h2 class="product-name">${productName.innerText}</h2>
    <h3 class="product-id">${productId.innerText}</h3>
  </div>
  <p>1</p>

</li>
  `;
}
