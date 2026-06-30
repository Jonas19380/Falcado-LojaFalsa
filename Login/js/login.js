const form = document.querySelector("#form");
const button = document.querySelector("#button");
const error = document.querySelector("#error");
const time = (ms) => new Promise(resolve => setTimeout(resolve, ms));

form.addEventListener("submit", async (e) => {
    e.preventDefault();

    const getdata = {
        email: document.querySelector("#email").value,
        password: document.querySelector("#password").value
    };

    const gotdata = JSON.parse(localStorage.getItem("data")) || [];
    if (gotdata.email === getdata.email && gotdata.password === getdata.password) {
        window.location.href = "../../Loja/html/loja.html";
    } else {
        document.querySelector("#error").textContent = "Email ou senha incorretos. Tente novamente.";
        error.style.margin = "0.5rem";
        await time(3000);
        error.textContent = "";
        error.style.margin = 0;
    }
});
