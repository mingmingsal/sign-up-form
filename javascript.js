const pass1 = document.querySelector("#password");
const pass2 = document.querySelector("#confirmPassword");
const passwordError = document.querySelector("#passwordError");
const button = document.querySelector("button[type='submit']")
button.addEventListener('click',()=>{
    passwordError.textContent= pass1.value;
    if(pass1.value != pass2.value)  
    {   
      passwordError.textContent="*Passwords don't match!";
    }  
    else {
        passwordError.textContent="";
    }
});