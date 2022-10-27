const menu = document.querySelector(".menu");
const nav = document.querySelector("nav")
const lien = document.querySelector("nav ul ")


document.querySelector(".menu").addEventListener("click", function() {
    nav.classList.toggle("nav-open");
})

lien.addEventListener("click", function() {
    nav.classList.toggle("nav-open");
    console.log("éaa")
})