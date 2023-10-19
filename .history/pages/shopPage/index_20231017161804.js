let main=document.querySelector("main ul")



function getProduct(){
    let product=JSON.parse(localStorage.getItem("products"))

    console.log(product);

    main.innerHTML+=
        `
        <li>
            <img src="${product[index].img}" alt="" />
            <button class="delete-btn">delete product</button>

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
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="24"
                  height="24"
                  viewBox="0 0 24 24"
                  fill="none"
                >
                  <path
                    d="M12 21.35L10.55 20.03C5.4 15.36 2 12.27 2 8.5C2 5.41 4.42 3 7.5 3C9.24 3 10.91 3.81 12 5.08C13.09 3.81 14.76 3 16.5 3C19.58 3 22 5.41 22 8.5C22 12.27 18.6 15.36 13.45 20.03L12 21.35Z"
                    fill="#DB6B97"
                  />
                </svg>
              </div>
            </div>

            <h2>${product[index].name}</h2>
            <h3># ${product[index].id}</h3>
            <p>${product[index].info}</p>
            <h4>${product[index].productCount}</h4>
            <span>${product[index].amount} azn</span>
            <button>Add to cart</button>
          </li>
        `

        document.querySelectorAll('')
}

getProduct()