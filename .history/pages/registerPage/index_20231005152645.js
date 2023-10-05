let form = document.querySelector("form");
let nameInput = document.querySelector(".name-input");
let passwordInput = document.querySelector(".password-input");
let btn = document.querySelector("button");
let errorMsj = document.querySelector(".error-msj");
let errorUserExist = document.querySelector(".error-user-exist");
userExist = false;
btn.addEventListener("click", handleRegister);

function handleRegister(e) {
  e.preventDefault();
  if (nameInput.value && passwordInput.value) {
    errorMsj.style.display = "none";
    checkUser()
  } else {
    console.log("KEDJEJD");
    errorMsj.style.display = "block";
  }
}

function createDataBase() {
  let userArrays = [];
  localStorage.setItem("users-data", JSON.stringify(userArrays));
}

function getDataBase() {
  let dataBase = JSON.parse(localStorage.getItem("users-data"));
  if (dataBase) {
    return dataBase;
  } else {
    createDataBase();
    let dataBase = JSON.parse(localStorage.getItem("users-data"));
    return dataBase;
  }
}

function checkUser() {
  let dataBase = getDataBase();
  for (let index = 0; index < dataBase.length; index++) {
    if (nameInput.value == dataBase[index].name) {
      userExist = true;
      break;
    } 
    else {
      userExist = false;
    }
  }
  checkExist()
}

function checkExist(){
    if(userExist){
        errorUserExist.style.display="block"
    }
    else {
        createUser()
        errorUserExist.style.display="none"
        form

    }
}

function createUser(){
    let user = {
        name: nameInput.value,
        password: passwordInput.value,
    }
    let dataBase= getDataBase()
    dataBase.push(user)
    localStorage.setItem("users-data", JSON.stringify(dataBase))
}
