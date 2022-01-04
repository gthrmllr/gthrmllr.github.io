let playSongPlus3 = document.querySelector(".play-song3").children[1];
let playSongMoins3 = document.querySelector(".play-song3").children[5];

let playSong3 = document.querySelector(".play-song3").children[2];
let pauseSong3 = document.querySelector(".play-song3").children[6];

let volumeSongUp3 = document.querySelector(".play-song3").children[3];
let volumeSongDown3 = document.querySelector(".play-song3").children[7];


setInterval(() => {
  document.querySelector(".fr3").innerHTML = "ポリフィア×ニト";
}, 3200);

setInterval(() => {
  document.querySelector(".fr3").innerHTML = "Polyphia X Nito";
}, 6400);

playSongPlus3.addEventListener("click", plus3);
playSongMoins3.addEventListener("click", moins3);

playSong3.addEventListener("click", play3);
pauseSong3.addEventListener("click", pause3);

volumeSongUp3.addEventListener("click", volumeUP3);
volumeSongDown3.addEventListener("click", volumeDOWN3);

console.log(document.querySelector(".img-song2"));

function plus3() {
  document.querySelector(".img-song3").style.transform = "scaleY(1)";
  document.querySelector(".play-song3").children[1].style.display = "none";
  document.querySelector(".play-song3").children[5].style.display = "block";
}

function moins3() {
  document.querySelector(".img-song3").style.transform =
    "scaleY(0.000000000000000000001)";
  document.querySelector(".play-song3").children[1].style.display = "block";
  document.querySelector(".play-song3").children[5].style.display = "none";
}

function play3() {
  document.querySelector(".play-song3").children[2].style.display = "none";
  document.querySelector(".play-song3").children[6].style.display = "block";
}

function pause3() {
  document.querySelector(".play-song3").children[2].style.display = "block";
  document.querySelector(".play-song3").children[6].style.display = "none";
}

function volumeUP3() {
  document.querySelector(".play-song3").children[3].style.display = "none";
  document.querySelector(".play-song3").children[7].style.display = "block";
  document.querySelector(".song-volume3").style.display = "block";
}

function volumeDOWN3() {
  document.querySelector(".play-song3").children[3].style.display = "block";
  document.querySelector(".play-song3").children[7].style.display = "none";
  document.querySelector(".song-volume3").style.display = "none";
}

let rangeduree3 = document.querySelector(".rangeduree3");
music_name3 = "../audio/music3.mp3";
let song3 = new Audio();


song3.src = music_name3;



function playSongg3() {

console.log(song3)
  document
    .querySelector(".play-song3")
    .children[2].addEventListener("click", function () {
      song3.play();
    });

  document
    .querySelector(".play-song3")
    .children[6].addEventListener("click", function () {
      song3.pause();
    });

  song3.addEventListener("timeupdate", function () {
    rangeduree3.value = song3.currentTime;
  });
  
}


function volume_change3() {
  let volumerecent3 = document.querySelector(".song-volume3").value;
  song3.volume = volumerecent3 / 100;
}
