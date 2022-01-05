/********************/
/* Touches Blanches */
/********************/

document.querySelectorAll(".touche").forEach(e=>{
    e.addEventListener("click", note);
});

function note(){   
    var note = new Audio(`notes/${this.dataset.son}`);
    note.play();
    
    this.classList.add("toucheDown");

    setTimeout(()=>{
        this.classList.remove("toucheDown");
    },200)
}

document.querySelectorAll(".touche").forEach(e=>{
    new Audio(`notes/${e.dataset.son}`);
})

/******************/
/* Touches Noires */
/******************/

document.querySelectorAll(".noire").forEach(e=>{
    e.addEventListener("click", diese);
});

function diese(){
    var note = new Audio(`notes/${this.dataset.son}`);
    note.play();
    
    this.classList.add("noireDown");

    setTimeout(()=>{
        this.classList.remove("noireDown");
    },200)
}

document.querySelectorAll(".noire").forEach(e=>{
    new Audio(`notes/${e.dataset.son}`);
})

/*******************/
/* Touches Clavier */
/*******************/

document.body.addEventListener("keypress", touche);

function touche(event){
    switch(event.key){
        case 's':
            document.querySelector(".blanches").children[0].click();
            break;
        case 'd':
            document.querySelector(".blanches").children[1].click();
            break;
        case 'f':
            document.querySelector(".blanches").children[2].click();
            break;
        case 'g':
            document.querySelector(".blanches").children[3].click();
            break;
        case 'h':
            document.querySelector(".blanches").children[4].click();
            break;
        case 'j':
            document.querySelector(".blanches").children[5].click();
            break;
        case 'k':
            document.querySelector(".blanches").children[6].click();
            break;
        case 'l':
            document.querySelector(".blanches").children[7].click();
            break;
        case 'e':
            document.querySelector(".dieses").children[0].click();
            break;
        case 'r':
            document.querySelector(".dieses").children[1].click();
            break;
        case 'y':
            document.querySelector(".dieses").children[3].click();
            break;
        case 'u':
            document.querySelector(".dieses").children[4].click();
            break;
        case 'i':
            document.querySelector(".dieses").children[5].click();
            break;
    }
}