const menuMobile = document.querySelector("#bars");
const menuMobileContainer = document.querySelector(".menu-mobile-container");
const menuMobileClose = document.querySelector("#menu-mobile-close")
const enlaceMobile = document.querySelector(".menu-mobile")
menuMobile.addEventListener("click", showMenuMobile);
menuMobileClose.addEventListener("click", CloseMenuMobile);
enlaceMobile.addEventListener("click", CloseMenuMobile)
function showMenuMobile(){
    menuMobileContainer.classList.toggle("inactive")
    console.log("cerrando")  
}

function CloseMenuMobile(){
    menuMobileContainer.classList.add("inactive")
}