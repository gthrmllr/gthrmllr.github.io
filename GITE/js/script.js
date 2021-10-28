function menu(){
    document.querySelector("nav").classList.toggle("ferme");
}

var position = 0;
var delta = 100;
var nbImg = document.querySelector(".slider").children.length;
var timer;

function partir() {
    timer = setInterval(function () {
        if (position < nbImg - 1) {
            position += 1;
        } else {
            position = 0;
        }
        document.querySelector(".slider").style.transform = 'translate(-' + (position * delta) + 'vw)';
    }, 1000);
}