const form = document.querySelector("#form");
const button = document.querySelector("#button");

form.addEventListener("submit", (e) => {
    e.preventDefault();

    const data = {
        name: document.querySelector("#nome").value,
        email: document.querySelector("#email").value,
        password: document.querySelector("#senha").value
    };

    localStorage.setItem("data", JSON.stringify(data));
    console.log("Dados salvos:", data);
})

button.addEventListener("click", () => {
    window.location.href = "/Loja/html/loja.html";
})