const passwordInput = document.querySelector(".password-input");
const confirmPasswordInput = document.querySelector(".confirm-password-input");
const submitButton = document.querySelector(".create-account-btn");

confirmPasswordInput.addEventListener('input', (e) => {
    if(e.target.value === passwordInput.value) {
        confirmPasswordInput.classList.remove("error");
        submitButton.removeAttribute("disabled")
    }

    if(e.target.value !== passwordInput.value) {   
        submitButton.setAttribute("disabled", "true")
    }
})