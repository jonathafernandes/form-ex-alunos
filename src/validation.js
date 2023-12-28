const form = document.getElementById("form");
const firstName = document.getElementById("name");
const email = document.getElementById("email");
const phoneNumber = document.getElementById("phone-number");


form.addEventListener("submit", (event) =>{
    event.preventDefault();

    checkForm();
})

firstName.addEventListener("blur", () => {
    checkInputName();
})

email.addEventListener("blur", () => {
    checkInputEmail();
})

phoneNumber.addEventListener("blur", () => {
    checkInputPhoneNumber();
})

function checkInputName(){
    const firstNameValue = firstName.value; 

    if(firstNameValue === ""){
        errorInput(firstName, "Campos obrigatórios!")
    } else {
        const formItem = firstName.parentElement
        formItem.className = "field"
    }
}

function checkInputEmail(){
    const emailValue = email.value;

    if (emailValue === ""){
        errorInput(email, "Por favor, preencha com seu e-mail!")
    } else {
        const formItem = email.parentElement
        formItem.className = "field"
    }
}

function checkInputPhoneNumber(){
    const phoneNumberValue = phoneNumber.value;

    if(phoneNumberValue === ""){
        errorInput(phoneNumber, "Por favor, preencha com seu número de telefone!")
    } else {
        formItem = phoneNumber.parentElement
        formItem.className = "field"
    }
}

function checkForm(){
    checkInputName();
    checkInputEmail();
    checkInputPhoneNumber();

    const formItems = form.querySelectorAll(".field");

    const isValid = [...formItems].every((item) => {
        return item.className === "field"
    })

    if (isValid) {
        alert("Cadastro feito com sucesso!")
    }

}

function errorInput(input, message){
    const formItem = input.parentElement;
    const textMessage = formItem.querySelector("a");
    
    textMessage.innerText = message;

    formItem.className = "field error"
}