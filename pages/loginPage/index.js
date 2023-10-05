let form = document.querySelector("form");
let nameInput = document.querySelector("input[type=text]");
let passwordInput = document.querySelector("input[type=password]");
let btn = document.querySelector("button");
let errorMsj = document.querySelector(".error-msj");
let errorUserExist = document.querySelector(".error-user-exist");

form.addEventListener("submit", handleLogin)

function handleLogin(e){
    e.preventDefault()
    if (nameInput.value && passwordInput.value){
errorMsj.style.display="none"

    }

    else {
        errorMsj.style.display="block"
    }

}