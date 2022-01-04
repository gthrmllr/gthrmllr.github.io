let playSongPlus2 = document.querySelector(".play-song2").children[1];
let playSongMoins2 = document.querySelector(".play-song2").children[5];

let playSong2 = document.querySelector(".play-song2").children[2];
let pauseSong2 = document.querySelector(".play-song2").children[6];

let volumeSongUp2 = document.querySelector(".play-song2").children[3];
let volumeSongDown2 = document.querySelector(".play-song2").children[7];


setInterval(() => {
  document.querySelector(".fr2").innerHTML = "たかやん";
}, 3200);

setInterval(() => {
  document.querySelector(".fr2").innerHTML = "Takayan";
}, 6400);

playSongPlus2.addEventListener("click", plus2);
playSongMoins2.addEventListener("click", moins2);

playSong2.addEventListener("click", play2);
pauseSong2.addEventListener("click", pause2);

volumeSongUp2.addEventListener("click", volumeUP2);
volumeSongDown2.addEventListener("click", volumeDOWN2);

console.log(document.querySelector(".img-song2"));

function plus2() {
  document.querySelector(".img-song2").style.transform = "scaleY(1)";
  document.querySelector(".play-song2").children[1].style.display = "none";
  document.querySelector(".play-song2").children[5].style.display = "block";
}

function moins2() {
  document.querySelector(".img-song2").style.transform =
    "scaleY(0.000000000000000000001)";
  document.querySelector(".play-song2").children[1].style.display = "block";
  document.querySelector(".play-song2").children[5].style.display = "none";
}

function play2() {
  document.querySelector(".play-song2").children[2].style.display = "none";
  document.querySelector(".play-song2").children[6].style.display = "block";
}

function pause2() {
  document.querySelector(".play-song2").children[2].style.display = "block";
  document.querySelector(".play-song2").children[6].style.display = "none";
}

function volumeUP2() {
  document.querySelector(".play-song2").children[3].style.display = "none";
  document.querySelector(".play-song2").children[7].style.display = "block";
  document.querySelector(".song-volume2").style.display = "block";
}

function volumeDOWN2() {
  document.querySelector(".play-song2").children[3].style.display = "block";
  document.querySelector(".play-song2").children[7].style.display = "none";
  document.querySelector(".song-volume2").style.display = "none";
}

let rangeduree2 = document.querySelector(".rangeduree2");
music_name2 = "../audio/music2.mp3";
let song2 = new Audio();


song2.src = music_name2;



function playSongg2() {

console.log(song2)
  document
    .querySelector(".play-song2")
    .children[2].addEventListener("click", function () {
      song2.play();
    });

  document
    .querySelector(".play-song2")
    .children[6].addEventListener("click", function () {
      song2.pause();
    });

  song2.addEventListener("timeupdate", function () {
    rangeduree2.value = song2.currentTime;
  });
}

function volume_change2() {
  let volumerecent2 = document.querySelector(".song-volume2").value;
  song2.volume = volumerecent2 / 100;
}
