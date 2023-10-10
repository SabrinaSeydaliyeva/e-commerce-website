let form = document.querySelector("form");
let nameInput = document.querySelector("input[type=text]");
let passwordInput = document.querySelector("input[type=password]");
let btn = document.querySelector("button");
let errorMsj = document.querySelector(".error-msj");
let errorNotFound = document.querySelector(".error-not-found");

form.addEventListener("submit", handleLogin);

function handleLogin(e) {
  e.preventDefault();
  if (nameInput.value && passwordInput.value) {
    errorMsj.style.display = "none";
    checkUser();
  } else {
    errorMsj.style.display = "block";
  }
}

function checkUser() {
  let database = JSON.parse(localStorage.getItem("users-data"));

  for (let index = 0; index < database.length; index++) {
    if (
      database[index].name == nameInput.value &&
      database[index].password == passwordInput.value
    ) {
      console.log("nhnh");

      window.location.href = "../homePage/index.html";
      form.reset();
    } else {
      errorNotFound.style.display = "block";
    }
  }
}

console.log(window);
