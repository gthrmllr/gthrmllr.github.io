let slide1 =document.querySelectorAll('.imganime1>img')
let logofirst = document.querySelectorAll('.logo-page1 .logo')
let logofirst1 = document.querySelectorAll('.logo-page1 .logo1')
let slide2 = document.querySelectorAll('.imganime2>img')
let slide3 = document.querySelectorAll('.imganime3>img')
let slide4 = document.querySelectorAll('.imganime4>img')
let slide5 = document.querySelectorAll('.imganime5>img')
let slide6 = document.querySelectorAll('.imganime6>img')
let slide7 = document.querySelectorAll('.imganime7>img')
let boxprix = document.querySelectorAll(".box-prix");
let imagetitre1 = document.querySelector(".imgtitre1");
let imagetitre2 = document.querySelector(".imgtitre2");
let imagetitre3 = document.querySelector(".imgtitre3");
let imagetitre4 = document.querySelector(".imgtitreslide4");

let textdate1 = document.querySelector(".textdate");
let textdate2 = document.querySelector(".textdate2");
let textdate3 = document.querySelector(".textdate3");
let textdate4 = document.querySelector(".textdate4");

let videoo = document.querySelector(".videoo");

let formcontact = document.querySelector(".wrapper")
let boxinfo = document.querySelector(".box-info");



console.log(imagetitre2)
window.addEventListener("load", () => {
  let TL = gsap.timeline({ paused: true });

  TL.staggerFrom(slide1,0.5,{ bottom: -50, opacity: 0, ease: "power2.out" },0.3)
    .from(logofirst1,0.3,{ top: 20, opacity: 0, ease: "power2.out" })
    .from(logofirst,0.3,{ top: 20, opacity: 0, ease: "power2.out" })
    
  TL.play();
});











new fullpage("#fullpage", {
  scrollHorizontallyKey:
    "MDAwd2ViaG9zdGFwcC5jb21feE1oYzJOeWIyeHNTRzl5YVhwdmJuUmhiR3g1bDZN",
  scrollHorizontally: true,
  controlArrows: false,
  continuousHorizontal: false,
  onSlideLeave: function (section, origin, destination, direction) {
    const slide = destination.item;
    console.log(destination);

    const TL = new TimelineMax({ delay: 1 });

    if (destination.index === 0) {
      TL.
        staggerFrom(slide1,0.7,{bottom:-40,opacity:0, ease:'power2.out'},0.3)
        .from(logofirst1,0.3,{ top: 20, opacity: 0, ease: "power2.out" })
    .from(logofirst,0.3,{ top: 20, opacity: 0, ease: "power2.out" })  
    


    }
    if (destination.index === 1) {
      TL.
      staggerFrom(slide2,0.7,{bottom:-300,opacity:0, ease:'power2.out'},0.3)
      .from(imagetitre1,0.7,{ left: -150, opacity: 0, ease: "power2.out" },'=-2')
    .from(textdate1,0.7,{ left: -150, opacity: 0, ease: "power2.out" },'=-2')
          


    }
    if (destination.index === 2) {
      TL.
      staggerFrom(slide3,0.5,{bottom:-300,opacity:0, ease:'power2.out'},0.2)
      .from(imagetitre2,0.7,{ left: -150, opacity: 0, ease: "power2.out" },'=-2')
      .from(textdate2,0.7,{ left: -150, opacity: 0, ease: "power2.out" },'=-2')
      playSongg2();
          


    }
    if (destination.index === 3) {
      TL.
      staggerFrom(slide4,0.7,{bottom:-300,opacity:0, ease:'power2.out'},0.3)
      .from(imagetitre3,0.7,{ left: -150, opacity: 0, ease: "power2.out" },'=-2')
      .from(textdate3,0.7,{ left: -150, opacity: 0, ease: "power2.out" },'=-2')
      playSongg3();
          


    }
    if (destination.index === 4) {
      TL.
      staggerFrom(slide5,0.7,{bottom:-300,opacity:0, ease:'power2.out'},0.3)
      .from(imagetitre4,0.7,{ left: -150, opacity: 0, ease: "power2.out" },'=-2')
      .from(textdate4,0.7,{ left: -150, opacity: 0, ease: "power2.out" },'=-2')
      playSongg4();
          


    }
    if (destination.index === 5) {
      TL.
      staggerFrom(slide6,0.5,{bottom:-300,opacity:0, ease:'power2.out'},0.2)
      .staggerFrom(
        boxprix,
        0.7,
        { top: -150, opacity: 0, ease: "power2.out" },
        0.2,
        "-=1"
      )
      .from(videoo,0.7,
        { left: -150, opacity: 0, ease: "power2.out" }

      )
   
          
      }

      if (destination.index === 6) {
        TL.
        staggerFrom(slide7,0.7,{bottom:-300,opacity:0, ease:'power2.out'},0.3)
        .from(formcontact,0.7,{top:-50, opacity:0,ease :"power2.out"},'=-1')
        .from(boxinfo,0.7,{right:-420, opacity:0, ease :"power2.out"}, '-=0.5')
            
  
  
      }
    
    
    
  }
});

// LECTEUR AUDIO //

let playSongPlus = document.querySelector(".play-song").children[1];
let playSongMoins = document.querySelector(".play-song").children[5];

let playSong = document.querySelector(".play-song").children[2];
let pauseSong = document.querySelector(".play-song").children[6];

let volumeSongUp = document.querySelector(".play-song").children[3];
let volumeSongDown = document.querySelector(".play-song").children[7];

let index = 0;

setInterval(() => {
  document.querySelector(".fr").innerHTML = "ジェーン・ポップ";
}, 3200);

setInterval(() => {
  document.querySelector(".fr").innerHTML = "Jane Pop";
}, 6400);

playSongPlus.addEventListener("click", plus);
playSongMoins.addEventListener("click", moins);

playSong.addEventListener("click", play);
pauseSong.addEventListener("click", pause);

volumeSongUp.addEventListener("click", volumeUP);
volumeSongDown.addEventListener("click", volumeDOWN);

console.log(document.querySelector(".img-song"));

function plus() {
  document.querySelector(".img-song").style.transform = "scaleY(1)";
  document.querySelector(".play-song").children[1].style.display = "none";
  document.querySelector(".play-song").children[5].style.display = "block";
}

function moins() {
  document.querySelector(".img-song").style.transform =
    "scaleY(0.000000000000000000001)";
  document.querySelector(".play-song").children[1].style.display = "block";
  document.querySelector(".play-song").children[5].style.display = "none";
}

function play() {
  document.querySelector(".play-song").children[2].style.display = "none";
  document.querySelector(".play-song").children[6].style.display = "block";
}

function pause() {
  document.querySelector(".play-song").children[2].style.display = "block";
  document.querySelector(".play-song").children[6].style.display = "none";
}

function volumeUP() {
  document.querySelector(".play-song").children[3].style.display = "none";
  document.querySelector(".play-song").children[7].style.display = "block";
  document.querySelector(".song-volume").style.display = "block";
}

function volumeDOWN() {
  document.querySelector(".play-song").children[3].style.display = "block";
  document.querySelector(".play-song").children[7].style.display = "none";
  document.querySelector(".song-volume").style.display = "none";
}

let rangeduree = document.querySelector(".rangeduree");
music_name = "../audio/drive.mp3";
let isPlaying = false;
let song = new Audio();

window.onload = playSongg;

song.src = music_name;
function playSongg() {
  console.log(song);

  document
    .querySelector(".play-song")
    .children[2].addEventListener("click", function () {
      song.play();
    });

  document
    .querySelector(".play-song")
    .children[6].addEventListener("click", function () {
      song.pause();
    });

  song.addEventListener("timeupdate", function () {
    rangeduree.value = song.currentTime;
  });
}

function volume_change() {
  let volumerecent = document.querySelector(".song-volume").value;
  song.volume = volumerecent / 100;
}


// BUTTON INFO+ //

let infoplus = document.querySelector(".infoplus");

console.log(infoplus);

// BUTTON SLIDE 1 //
infoplus.addEventListener("click", function () {
  document.querySelector(".div-info").style.transform = "scaleY(1)";
  document.querySelector(".infopluss").style.display = "block";
  document.querySelector(".infoplus").style.display = "none";
  let TL = gsap.timeline({ paused: true });
  let slided = document.querySelector('.block-info')
  TL.from(slided,0.7,{top:-500 ,opacity:0,ease:"power2.out"})
  TL.play();
});

document.querySelector(".infopluss").addEventListener("click", function () {
  document.querySelector(".div-info").style.transform = "scaleY(0.00001)";
  document.querySelector(".infoplus").style.display = "block";
  document.querySelector(".infopluss").style.display = "none";
});

// BUTTON SLIDE 2 //
document.querySelector(".infoplus-slide2").addEventListener("click", function () {
  document.querySelector(".jan-info").style.transform = "scaleY(1)";
  document.querySelector(".infopluss-slide2").style.display = "block";
  document.querySelector(".infoplus-slide2").style.display = "none";
  let TL = gsap.timeline({ paused: true });
  let slided2 = document.querySelector('.block-info-slide2')
  TL.from(slided2,0.7,{top:-500 ,opacity:0,ease:"power2.out"})
  TL.play();


});

document.querySelector(".infopluss-slide2").addEventListener("click", function () {
  document.querySelector(".jan-info").style.transform = "scaleY(0.00001)";
  document.querySelector(".infoplus-slide2").style.display = "block";
  document.querySelector(".infopluss-slide2").style.display = "none";
});

// BUTTON SLIDE 3 //
document.querySelector(".infoplus-slide3").addEventListener("click", function () {
  document.querySelector(".takayan-info").style.transform = "scaleY(1)";
  document.querySelector(".infopluss-slide3").style.display = "block";
  document.querySelector(".infoplus-slide3").style.display = "none";
  let TL = gsap.timeline({ paused: true });
  let slided3 = document.querySelector('.block-info-slide3')
  TL.from(slided3,0.7,{top:-500 ,opacity:0,ease:"power2.out"})
  TL.play();


});

document.querySelector(".infopluss-slide3").addEventListener("click", function () {
  document.querySelector(".takayan-info").style.transform = "scaleY(0.00001)";
  document.querySelector(".infoplus-slide3").style.display = "block";
  document.querySelector(".infopluss-slide3").style.display = "none";
});
// BUTTON SLIDE 4 //
document.querySelector(".infoplus-slide4").addEventListener("click", function () {
  document.querySelector(".Polyphia-info").style.transform = "scaleY(1)";
  document.querySelector(".infopluss-slide4").style.display = "block";
  document.querySelector(".infoplus-slide4").style.display = "none";
  let TL = gsap.timeline({ paused: true });
  let slided4 = document.querySelector('.block-info-slide4')
  TL.from(slided4,0.7,{top:-500 ,opacity:0,ease:"power2.out"})
  TL.play();


});

document.querySelector(".infopluss-slide4").addEventListener("click", function () {
  document.querySelector(".Polyphia-info").style.transform = "scaleY(0.00001)";
  document.querySelector(".infoplus-slide4").style.display = "block";
  document.querySelector(".infopluss-slide4").style.display = "none";
});

// BUTTON SLIDE 5 //
document.querySelector(".infoplus-slide5").addEventListener("click", function () {
  document.querySelector(".Within-info").style.transform = "scaleY(1)";
  document.querySelector(".infopluss-slide5").style.display = "block";
  document.querySelector(".infoplus-slide5").style.display = "none";
  let TL = gsap.timeline({ paused: true });
  let slided5 = document.querySelector('.block-info-slide5')
  TL.from(slided5,0.7,{top:-500 ,opacity:0,ease:"power2.out"})
  TL.play();



});

document.querySelector(".infopluss-slide5").addEventListener("click", function () {
  document.querySelector(".Within-info").style.transform = "scaleY(0.00001)";
  document.querySelector(".infoplus-slide5").style.display = "block";
  document.querySelector(".infopluss-slide5").style.display = "none";
});

console.log(document.querySelector('.block-info'))