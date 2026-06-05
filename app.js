import { auth, createUserWithEmailAndPassword } from "./firebaseConfig.js";

let emailInput = document.querySelector("#email-inp");
let passInput = document.querySelector("#password-inp");
let registerForm = document.querySelector("#register-form");
let created= document.querySelector("#success")
let p = document.querySelector("p")
let check = false

created.style.display = "none"
let validateForm = ()=>{
    if(emailInput.value.length < 1 || passInput.value.length < 1){
        console.error(new Error("all fields must be filled!"))
        return false
    }

    else if(passInput.value.length < 6){
        p.style.display = "block"
        return false
    }

    return true;
}

let createUser =  () => {
    try {
        if(!validateForm()){
            return
        }

    createUserWithEmailAndPassword(auth, emailInput.value, passInput.value)
            .then((userCredential) => {
                const user = userCredential.user;
                console.log("Account created!")
                created.style.display = "inline"
                passInput.value = ""
                emailInput.value =""

            });

    } catch (error) {
        console.error(error.code)
        console.error(error.message)
        
    }
}



let hideError = () => {
    p.style.display = "none";
};

passInput.addEventListener("focus", hideError);

passInput.addEventListener("input", hideError);


registerForm.addEventListener("submit", (e)=>{
    e.preventDefault();
    createUser()
})
