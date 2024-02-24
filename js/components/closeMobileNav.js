const nav = document.querySelector(".nav-content ul");
const navA = document.querySelector(".main-menu")
const main = document.querySelector("main");
const header = document.querySelector("header");

header.addEventListener("click", mobileNavLinkClick);
main.addEventListener("click", mobileNavLinkClick);
navA.addEventListener("click", mobileNavLinkClick);

export function mobileNavLinkClick() {
    nav.classList.remove("active");
}