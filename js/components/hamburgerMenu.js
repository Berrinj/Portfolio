const nav = document.querySelector(".main-menu");
const hamburgerMenu = document.querySelector(".hamburger-menu");

hamburgerMenu.addEventListener("click", hamburgerMenuClick);

export function hamburgerMenuClick() {
    nav.classList.toggle("active");
    let expandedMenu = hamburgerMenu.getAttribute('aria-expanded') === 'true' || false;
    this.setAttribute('aria-expanded', !expandedMenu);
}