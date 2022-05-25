const targetDiv = document.getElementById("congrats");
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