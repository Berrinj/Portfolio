const nav = document.querySelector(".main-menu");
const hamburgerMenu = document.querySelector(".hamburger-menu");
const closeMenu = document.querySelector(".close-menu-icon");
const openMenu = document.querySelector(".menu-icon");

hamburgerMenu.addEventListener("click", hamburgerMenuClick);

export function hamburgerMenuClick() {
    try {
    nav.classList.toggle("active");
    if(openMenu.style.display === "none") {
        openMenu.style.display = "flex";
        closeMenu.style.display = "none";
} else {
    openMenu.style.display = "none";
    closeMenu.style.display = "flex";
}
    let expandedMenu = hamburgerMenu.getAttribute('aria-expanded') === 'true' || false;
    hamburgerMenu.setAttribute('aria-expanded', !expandedMenu);
} catch(error) {
    console.log("En feil oppstod med den mobile menyen");
}
}