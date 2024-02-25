const nav = document.querySelector(".nav-content ul");
const navA = document.querySelector(".main-menu")
const main = document.querySelector("main");
const header = document.querySelector("header");
const closeMenu = document.querySelector(".close-menu-icon");
const openMenu = document.querySelector(".menu-icon");
const logo = document.querySelector(".logo a");

header.addEventListener("click", mobileNavLinkClick);
main.addEventListener("click", mobileNavLinkClick);
navA.addEventListener("click", mobileNavLinkClick);
logo.addEventListener("click", mobileNavLinkClick);

export function mobileNavLinkClick() {
    try {
        if (window.innerWidth <= 684) {
            if (nav.classList.contains("active")) {
                nav.classList.remove("active");

                if(openMenu.style.display === "none") {
                    openMenu.style.display = "flex";
                    closeMenu.style.display = "none";
                } else {
                    openMenu.style.display = "none";
                    closeMenu.style.display = "flex";
                }

            } else {
                openMenu.style.display = "flex";
                            closeMenu.style.display = "none";
            }
        }

    } catch(error) {
        console.log("En feil oppstod med ikonet til menyen");
    }
}