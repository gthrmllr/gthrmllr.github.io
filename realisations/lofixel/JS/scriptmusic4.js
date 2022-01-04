let playSongPlus4 = document.querySelector(".play-song4").children[1];
let playSongMoins4 = document.querySelector(".play-song4").children[5];

let playSong4 = document.querySelector(".play-song4").children[2];
let pauseSong4 = document.querySelector(".play-song4").children[6];

let volumeSongUp4 = document.querySelector(".play-song4").children[3];
let volumeSongDown4 = document.querySelector(".play-song4").children[7];


setInterval(() => {
  document.querySelector(".fr4").innerHTML = "破壊の中";
}, 3200);

setInterval(() => {
  document.querySelector(".fr4").innerHTML = "Within Destruction";
}, 6400);

playSongPlus4.addEventListener("click", plus4);
playSongMoins4.addEventListener("click", moins4);

playSong4.addEventListener("click", play4);
pauseSong4.addEventListener("click", pause4);

volumeSongUp4.addEventListener("click", volumeUP4);
volumeSongDown4.addEventListener("click", volumeDOWN4);


function plus4() {
  document.querySelector(".img-song4").style.transform = "scaleY(1)";
  document.querySelector(".play-song4").children[1].style.display = "none";
  document.querySelector(".play-song4").children[5].style.display = "block";
}

function moins4() {
  document.querySelector(".img-song4").style.transform =
    "scaleY(0.000000000000000000001)";
  document.querySelector(".play-song4").children[1].style.display = "block";
  document.querySelector(".play-song4").children[5].style.display = "none";
}

function play4() {
  document.querySelector(".play-song4").children[2].style.display = "none";
  document.querySelector(".play-song4").children[6].style.display = "block";
}

function pause4() {
  document.querySelector(".play-song4").children[2].style.display = "block";
  document.querySelector(".play-song4").children[6].style.display = "none";
}

function volumeUP4() {
  document.querySelector(".play-song4").children[3].style.display = "none";
  document.querySelector(".play-song4").children[7].style.display = "block";
  document.querySelector(".song-volume4").style.display = "block";
}

function volumeDOWN4() {
  document.querySelector(".play-song4").children[3].style.display = "block";
  document.querySelector(".play-song4").children[7].style.display = "none";
  document.querySelector(".song-volume4").style.display = "none";
}

let rangeduree4 = document.querySelector(".rangeduree4");
music_name4 = "../audio/music4.mp3";
let song4 = new Audio();


song4.src = music_name4;



function playSongg4() {

console.log(song3)
  document
    .querySelector(".play-song4")
    .children[2].addEventListener("click", function () {
      song4.play();
    });

  document
    .querySelector(".play-song4")
    .children[6].addEventListener("click", function () {
      song4.pause();
    });

  song4.addEventListener("timeupdate", function () {
    rangeduree4.value = song4.currentTime;
  });
  
}


function volume_change4() {
  let volumerecent4 = document.querySelector(".song-volume4").value;
  song4.volume = volumerecent4 / 100;
}
