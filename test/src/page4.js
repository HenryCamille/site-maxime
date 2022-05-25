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

    if (username === "iroko" && rep2 === "sapin" && rep3 === "olivier") {
        window.location.href='page5.html';
    } else {
        loginErrorMsg.style.display = "block";
    }
})



const targetDiv = document.getElementById("main-holder");
const btn = document.getElementById("show");
btn.onclick = function () {
    if (targetDiv.style.display !== "none") {
        targetDiv.style.display = "none";
    } else {
        targetDiv.style.display = "block";
    }
};

btn.addEventListener('click', () => {
    // 👇️ hide button
    btn.style.display = 'none';

});