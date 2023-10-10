let form = document.querySelector("form");
let idInput = document.querySelector(".id-input");
let nameInput = document.querySelector(".name-input");
let amountInput = document.querySelector(".amount-input");
let errorMsj = document.querySelector("p");

form.addEventListener("submit", handleAddProducts);

function handleAddProducts(e) {
  e.preventDefault();
  if (idInput.value && nameInput.value && amountInput.value) {
    errorMsj.style.display = "none";
  } else {
    errorMsj.style.display = "block";
  }
}

function getLocalStorage() {
  let dataBase = JSON.parse(localStorage.getItem("products"));
  if (dataBase) {
    return dataBase;
  } else {
    createDataBase();
    let dataBase = JSON.parse(localStorage.getItem("products"));
    return dataBase;
  }
}

function createDataBase() {
  let userArrays = [];
  localStorage.setItem("products", JSON.stringify(userArrays));
}

function createProduct() {
  let product = {
    id: idInput.value,
    name: nameInput.value,
    amount: amountInput.value,
  };
  let dataBase = getLocalStorage();
  dataBase.push(product);
  form.reset();
  localStorage.setItem("products", JSON.stringify(dataBase));
}

createProduct();
