document.getElementById("parisTract").classList.add("tract") //Montre le tract Paris dès le début
document.getElementById("paris").classList.add("villeDown") //Appuye sur le bouton Paris dès le début

document.getElementById("paris").addEventListener("click", showParis);
document.getElementById("lyon").addEventListener("click", showLyon);
document.getElementById("bordeaux").addEventListener("click", showBordeaux);

function showParis(){
    this.classList.add("villeDown")
    document.getElementById("lyon").classList.remove("villeDown")
    document.getElementById("bordeaux").classList.remove("villeDown")

    document.getElementById("parisTract").classList.add("tract")
    document.getElementById("lyonTract").classList.remove("tract")
    document.getElementById("bordeauxTract").classList.remove("tract")
}

function showLyon(){
    this.classList.add("villeDown")
    document.getElementById("paris").classList.remove("villeDown")
    document.getElementById("bordeaux").classList.remove("villeDown")

    document.getElementById("parisTract").classList.remove("tract")
    document.getElementById("lyonTract").classList.add("tract")
    document.getElementById("bordeauxTract").classList.remove("tract")
}

function showBordeaux(){
    this.classList.add("villeDown")
    document.getElementById("lyon").classList.remove("villeDown")
    document.getElementById("paris").classList.remove("villeDown")

    document.getElementById("parisTract").classList.remove("tract")
    document.getElementById("lyonTract").classList.remove("tract")
    document.getElementById("bordeauxTract").classList.add("tract")
}