'use strict'


function changeTheme() {
    var background = document.body.style.backgroundColor = "white";
    var title = document.querySelector("h1").style.color = "black";
    var parrfs = document.getElementsByTagName("p");
    var subTitle = document.getElementsByTagName("h4");
    var button = document.getElementById("circle").style.display = "none";
    var button2 = document.getElementById("circle1").style.display = "inline";

    for (var parraf of parrfs){
        parraf.style.color = "black";
    }

    for (var sub of subTitle){
        sub.style.color = "black";
    }
    
}

function changeThemeB(){
    var background = document.body.style.backgroundColor = "black";
    var title = document.querySelector("h1").style.color = "white";
    var parrfs = document.getElementsByTagName("p");
    var subTitle = document.getElementsByTagName("h4");
    var button = document.getElementById("circle").style.display = "inline";
    var button2 = document.getElementById("circle1").style.display = "none";

    for (var parraf of parrfs){
        parraf.style.color = "white";
    }

    for (var sub of subTitle){
        sub.style.color = "white";
    }

    

}