let form = document.querySelector("form");
let idInput = document.querySelector(".id-input");
let nameInput = document.querySelector(".name-input");
let amountInput = document.querySelector(".amount-input");
let infoInput = document.querySelector(".info-input");
let errorMsj = document.querySelector("p");
let imgInput = document.querySelector("input[type='file']");
let productExist = false;

form.addEventListener("submit", handleAddProducts);
function handleAddProducts(e) {
  e.preventDefault();

  if (idInput.value && nameInput.value && amountInput.value) {
    errorMsj.style.display = "none";
    checkProduct();
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

// file reader
let imageFile = "";
imgInput.addEventListener("change", (event) => {
  const image = event.target.files[0];
  const reader = new FileReader();
  reader.readAsDataURL(image);
  reader.addEventListener("load", () => {
    imageFile = reader.result;
  });
});

function createDataBase() {
  let productArrays = [];
  localStorage.setItem("products", JSON.stringify(productArrays));
}

function createProduct() {
  console.log(imageFile);
  let product = {
    img: imageFile,
    id: idInput.value,
    name: nameInput.value,
    amount: amountInput.value,
    info: infoInput.value,
    productCount: 1,
  };
  let dataBase = getLocalStorage();
  dataBase.push(product);
  // form.reset();
  localStorage.setItem("products", JSON.stringify(dataBase));
}

function checkProduct() {
  let dataBase = getLocalStorage();

  for (let index = 0; index < dataBase.length; index++) {
    if (dataBase[index].id == idInput.value) {
      console.log(dataBase[index]);

      dataBase[index].productCount += 1;
      console.log("var");
      productExist = true;
      break;
    } else {
      console.log("yoxdur");
      productExist = false;
    }
  }

  if (productExist) {
    localStorage.setItem("products", JSON.stringify(dataBase));
  } else {
    createProduct();
  }
  window.location.href = "../shopPage/index.html";
}
