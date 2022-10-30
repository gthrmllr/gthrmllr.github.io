const menu = document.querySelector(".menu");
const nav = document.querySelector("nav");
const lien = document.querySelector("nav ul ");
const bb1 = document.querySelector(".barre-blanche1");
const bb2 = document.querySelector(".barre-blanche2");
const bb3 = document.querySelector(".barre-blanche3");


document.querySelector(".menu").addEventListener("click", function() {
    nav.classList.toggle("nav-open");
    bb1.classList.toggle("barre-blanche1-toggle");
    bb2.classList.toggle("barre-blanche2-toggle");
    bb3.classList.toggle("barre-blanche3-toggle");

})

lien.addEventListener("click", function() {
    nav.classList.toggle("nav-open");
    console.log("éaa")
})