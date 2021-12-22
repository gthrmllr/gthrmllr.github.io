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

    }

)