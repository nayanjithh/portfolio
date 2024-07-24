// var menu = true;
// var links = document.querySelector(".links");

// function toggleMenu(){
//     if(menu)
//         links.style.height = "9rem";
//     else   
//         links.style.height = "0";
//     menu = !menu;
// }

var type;
var edu = document.querySelector(".EDUCATION");
var exp = document.querySelector(".EXPIRIENCE");
var lan = document.querySelector(".LANGUAGES");
var cer = document.querySelector(".CERTIFICATES");
var ski = document.querySelector(".SKILLS");

function display(type){
    if(type === 'edu'){
        edu.style.display = "block"
        exp.style.display = "none"
        lan.style.display = "none"
        cer.style.display = "none"
        ski.style.display = "none"
    }
    else if(type === 'exp'){
        edu.style.display = "none"
        exp.style.display = "block"
        lan.style.display = "none"
        cer.style.display = "none"
        ski.style.display = "none"
    }
    else if(type === 'lan'){
        edu.style.display = "none"
        exp.style.display = "none"
        lan.style.display = "block"
        cer.style.display = "none"
        ski.style.display = "none"
    }
    else if(type === 'cer'){
        edu.style.display = "none"
        exp.style.display = "none"
        lan.style.display = "none"
        cer.style.display = "block"
        ski.style.display = "none"
    }
    else{
        edu.style.display = "none"
        exp.style.display = "none"
        lan.style.display = "none"
        cer.style.display = "none"
        ski.style.display = "block"
    }
}