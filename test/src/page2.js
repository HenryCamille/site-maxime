const loginForm = document.getElementById("login-form");
const loginButton = document.getElementById("login-form-submit");
const loginErrorMsg = document.getElementById("login-error-msg");

loginButton.addEventListener("click", (e) => {
    e.preventDefault();
    const username = loginForm.username.value;

    if (username === "03/04/2021") {
        alert("Bien joué, tu t'en rappelles !");
        window.location.href='page3.html'
    } else {
        loginErrorMsg.style.opacity = 1;
    }
})