const iconHamburger = document.querySelector('.icons-hamburger');
const iconClose = document.querySelector('.icons-close')
const linksNav = document.querySelector('.links-nav-mobile')

iconHamburger.addEventListener("click", () => {
    linksNav.style.display = "flex"
    iconClose.style.display = "inherit"
    iconHamburger.style.display = "none"
})
iconClose.addEventListener("click", () => {
    iconHamburger.style.display = "inherit"
    iconClose.style.display = "none"
    linksNav.style.display = "none"
})