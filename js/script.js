document.querySelector(".menu").addEventListener("click", function() {
    document.querySelector("nav").classList.toggle("nav-visible");
    document.querySelector("body").classList.toggle("body-overflow");
})

const bulle = document.querySelector('.bulle');
const apropos = document.querySelector("#apropos>.bulle")
window.addEventListener('scroll', () => {

        if (window.scrollY > 350) {
            document.querySelector("#apropos>.bulle").classList.add('bulle-anim');
            document.querySelector("#apropos>.bulle:nth-child(2)").classList.add('bulle-anim');
            document.querySelector("#apropos>.bulle:nth-child(3)").classList.add('bulle-anim');
        };

        if (window.scrollY > 1000) {

            document.querySelector(".profil").classList.add('profil-anim');
            document.querySelector(".profil:nth-child(2)").classList.add('profil-anim');
            document.querySelector(".profil:nth-child(3)").classList.add('profil-anim');
            document.querySelector(".profil:nth-child(4)").classList.add('profil-anim');
            document.querySelector(".profil:nth-child(5)").classList.add('profil-anim');

        };

        if (window.scrollY > 1700) {
            console.log("test222")
            document.querySelector(".pack").classList.add('bulle-anim');
            document.querySelector(".pack:nth-child(2)").classList.add('bulle-anim');
            document.querySelector(".pack:nth-child(3)").classList.add('bulle-anim');


        };


    }



)



document.querySelector(".link_accueil").addEventListener("click", function() {
    document.querySelector("nav").classList.remove("nav-visible");
    document.querySelector("body").classList.remove("body-overflow");
    console.log("a")
})

document.querySelector(".link_apropos").addEventListener("click", function() {
    document.querySelector("nav").classList.remove("nav-visible");
    document.querySelector("body").classList.remove("body-overflow");
    console.log("a")
})

document.querySelector(".link_prestations").addEventListener("click", function() {
    document.querySelector("nav").classList.remove("nav-visible");
    document.querySelector("body").classList.remove("body-overflow");
    console.log("a")
})

document.querySelector(".link_accueil").addEventListener("click", function() {
    document.querySelector("nav").classList.remove("nav-visible");
    document.querySelector("body").classList.remove("body-overflow");
    console.log("a")
})

document.querySelector(".link_realisations").addEventListener("click", function() {
    document.querySelector("nav").classList.remove("nav-visible");
    document.querySelector("body").classList.remove("body-overflow");
    console.log("a")
})

document.querySelector(".link_contact").addEventListener("click", function() {
    document.querySelector("nav").classList.remove("nav-visible");
    document.querySelector("body").classList.remove("body-overflow");
    console.log("a")
})