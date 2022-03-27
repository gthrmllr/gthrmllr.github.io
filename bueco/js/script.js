const menu = document.querySelector(".menu")
const nav = document.querySelector("nav")

menu.addEventListener("click", e => {
    console.log("tt");
    nav.classList.toggle("nav-open");
})


/*** SCRIPT CHOIX MAITRISTE PLONGEE **/

const amateur = document.querySelector(".div-maitrise>ul>li:nth-child(1)")
const intermediaire = document.querySelector(".div-maitrise>ul>li:nth-child(2)")
const confirme = document.querySelector(".div-maitrise>ul>li:nth-child(3)")
const li = document.querySelector(".div-maitrise>ul>li")
const prix1 = document.querySelector(".prix1")
const prix2 = document.querySelector(".prix2")
const prix3 = document.querySelector(".prix3")
const prix4 = document.querySelector(".prix4")
const infos = document.querySelector(".infos")
const nvx = document.querySelector(".nvx-requis")



amateur.addEventListener("click", e => {

    intermediaire.style.color = 'white';
    confirme.style.color = 'white';

    intermediaire.style.fontWeight ="400";
    confirme.style.fontWeight ="400";
    
    amateur.style.color = '#FFCF26';
    amateur.style.fontWeight = 'bolder';

    infos.innerText="Randonnée amateur : descente à 10 mètres de profondeur. Durée : 1h30."

    prix1.innerText="50 €"
    prix2.innerText="90 €"
    prix3.innerText="225 €"
    prix4.innerText="40 €"

    nvx.innerText="Niveau 1"
   
})


intermediaire.addEventListener("click", e => {

    amateur.style.color = 'white';
    confirme.style.color = 'white';

    amateur.style.fontWeight ="400";
    confirme.style.fontWeight ="400";

    intermediaire.style.color = '#FFCF26';
    intermediaire.style.fontWeight = 'bolder';
    intermediaire.style.letterSpacing= '-1px';

    prix1.innerText="65 €"
    prix2.innerText="105 €"
    prix3.innerText="300 €"
    prix4.innerText="55 €"

    infos.innerText="Randonnée intermédiaire : descente à 22 mètres de profondeur. Durée : 2h."
  
    nvx.innerText="Niveau 2"
})

confirme.addEventListener("click", e => {

    amateur.style.color = 'white';
    intermediaire.style.color = 'white';

    amateur.style.fontWeight ="400";
    intermediaire.style.fontWeight ="400";

    confirme.style.color = '#FFCF26';
    confirme.style.fontWeight = 'bolder';

    prix1.innerText="75 €"
    prix2.innerText="125 €"
    prix3.innerText="350 €"
    prix4.innerText="70 €"
    
    infos.innerText="Randonnée confirmé : descente à 35 mètres de profondeur. Durée : 2h30."

    nvx.innerText="Niveau 3"
})

