const email = document.querySelector(".email");
const form = document.querySelector(".form");

const emailRegex = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;

form.addEventListener("submit", (e) => {
    e.preventDefault();
    if (!emailRegex.test(email.value)) {
        form.classList.add("error");
    } else form.classList.remove("error");
});
