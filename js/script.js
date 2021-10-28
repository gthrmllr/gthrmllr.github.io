function menu(){
    document.querySelector("nav").classList.toggle("ferme");
}

var myFullpage = new fullpage('#main', {
    anchors: ['firstPage', 'secondPage', '3rdPage'],
    navigation: true,
    navigationPosition: 'right',

});