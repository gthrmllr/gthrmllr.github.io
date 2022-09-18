const menu = document.querySelector(".menu");
const nav = document.querySelector("nav")

document.querySelector(".menu").addEventListener("click", function() {
    nav.classList.toggle("nav-open");
    document.querySelector("body").classList.toggle("body-overflow");

})