// var menu = true;
// var links = document.querySelector(".links");

// function toggleMenu(){
//     if(menu)
//         links.style.height = "9rem";
//     else   
//         links.style.height = "0";
//     menu = !menu;
// }


var vector1 = document.querySelector(".vector1");
var vector3 = document.querySelector(".vector3");

document.querySelector(".Titel").addEventListener("click", function() {
    document.body.classList.toggle("lightTheme");
    if(document.body.classList.contains("lightTheme")){
        vector1.style.display = "none";
        vector3.style.display = "block";
    }
    else{
        vector1.style.display = "block";
        vector3.style.display = "none";
    }
});

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