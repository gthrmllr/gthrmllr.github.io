let val = -100;
let limite = -500;
function mouv(){

    let valeur = val + 'vw';
    document.querySelector(".container").style.transform="translateX("+valeur+")";

if(val>limite){
    val = val - 100;
} else {
     val = 0;
}
}
setInterval(() => {
    mouv()
}, 5000);