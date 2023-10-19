let main = document.querySelector("main ul");

function getProduct() {
  let product = JSON.parse(localStorage.getItem("products"));

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
            <h3># ${product[index].id}</h3>
            <p>${product[index].info}</p>
            <h4>${product[index].productCount}</h4>
            <span>${product[index].amount} azn</span>
            <button>Add to cart</button>
          </li>
        `;
  }
  let noFavImg = document.querySelectorAll(".heart img");

  noFavImg.forEach((element) => {
    element.addEventListener("click", () => changeImg(element));
  });

  console.log(noFavImg);
}

let isFav = false;

function changeImg(element) {
  element.src = "./images/fav.png ";
  isFav=true
  if()
}

getProduct();
