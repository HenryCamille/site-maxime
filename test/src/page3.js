const loginForm = document.getElementById("login-form");
const loginForm2 = document.getElementById("login-form2");
const loginForm3 = document.getElementById("login-form3");
const loginButton = document.getElementById("login-form-submit");
const loginErrorMsg = document.getElementById("login-error-msg");

loginButton.addEventListener("click", (e) => {
    e.preventDefault();
    const username = loginForm.username.value;
    const rep2 = loginForm2.rep2.value;
    const rep3 = loginForm3.rep3.value;

    if (username === "2010" && rep2 === "6" && rep3 === "george sand") {
        alert("GG !");
        window.location.href='pagen4.html'
    } else {
        loginErrorMsg.style.opacity = 1;
    }
})

