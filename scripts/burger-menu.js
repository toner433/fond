const burgerMenu = document.getElementById("burger-menu");
const navLinks = document.getElementById("nav-links");

if (burgerMenu && navLinks) {
    burgerMenu.addEventListener("click", () => {
        navLinks.classList.toggle("active");
    });
}
