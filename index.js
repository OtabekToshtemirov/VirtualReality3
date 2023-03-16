const burgerMenu = document.querySelector(".menu__icon");
const navBar = document.querySelector(".header__nav");

burgerMenu.addEventListener("click", () => {
    document.body.classList.toggle("_lock");
    navBar.classList.toggle("_active");
});
