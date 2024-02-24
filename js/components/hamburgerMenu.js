const nav = document.querySelector(".main-menu");
const hamburgerMenu = document.querySelector(".hamburger-menu");
const closeMenu = document.querySelector(".close-menu-icon");
const openMenu = document.querySelector(".menu-icon");

hamburgerMenu.addEventListener("click", hamburgerMenuClick);

export function hamburgerMenuClick() {
    nav.classList.toggle("active");
    closeMenu.style.display = "flex";
    let expandedMenu = hamburgerMenu.getAttribute('aria-expanded') === 'true' || false;
    this.setAttribute('aria-expanded', !expandedMenu);
}