const iconHamburger = document.querySelector('.icons-hamburger');
const iconClose = document.querySelector('.icons-close')
const linksNav = document.querySelector('.links-nav-mobile')

const width = window.screen.width

const imgMobileIntro = document.querySelector('.image-intro-mobile')
const imgDesktopIntro = document.querySelector('.image-intro-desktop')


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

// if (width >= 940) {
//     imgMobileIntro.style.display = "none"
//     imgDesktopIntro.style.display = "flex"

// }