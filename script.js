let backgroundBlack = document.getElementById("background-start");
let backgroundWhite = document.getElementById("background-start-2");
let pinkufoclick = document.getElementById("circlepink1");
let circlepink2 = document.getElementById("circlepink2");
let bluerocketclick = document.getElementById("circleblue1");
let circleblue2 = document.getElementById("circleblue2");
let pinkufo = document.getElementById("pinkufo");
let bluerocket = document.getElementById("bluerocket");
let title = document.getElementById("title");
let navUl = document.querySelector("#navbar ul");
let starsW = document.getElementById("stars-2");
let starsB = document.getElementById("stars-1");
let starAccentB1 =  document.getElementById("staraccentblack1");
let starAccentB2 =  document.getElementById("staraccentblack2");
let starAccentW1 =  document.getElementById("staraccentwhite1");
let starAccentW2 =  document.getElementById("staraccentwhite2");
let logoLine = document.getElementById("logo-line");
let navList = document.querySelector("#navbar ul");
let projects = document.getElementById("projects");
let skills = document.getElementById("skills");

logoLine.addEventListener("click", ()=> {
    console.log(navList.style.top);
    if(navList.style.top === "" || navList.style.top === "-38%"){
         navList.style.top = "0px"
     } else { navList.style.top = "-38%"};
})


pinkufoclick.addEventListener("click", ()=> {
    if (pinkufo.style.filter="contrast(0%)") {
        pinkufo.style.filter="contrast(100%)"
        bluerocket.style.filter="contrast(0%)"
        pinkufoclick.style.background="#ff6969ff"
        circlepink2.style.background="#ff3a3aff"
        bluerocketclick.style.background="#ffcacaff"
        circleblue2.style.background="#ffdadaff"
       
        document.body.classList.add("theme-pink")
        document.body.classList.remove("theme-blue")
        backgroundBlack.style.opacity = "1"
        backgroundWhite.style.opacity = "0"
        navUl.style.background = "black"
        navUl.style.color = "white"
        starsB.style.opacity = "0"
        starsW.style.opacity = "1"
        starAccentW1.style.opacity = "1"
        starAccentW2.style.opacity = "1"
        starAccentB1.style.opacity = "0"
        starAccentB2.style.opacity = "0"
    }
});

bluerocketclick.addEventListener("click", ()=> {
    if (bluerocket.style.filter="contrast(0%)") {
        bluerocket.style.filter="contrast(100%)"
        pinkufo.style.filter="contrast(0%)"
        bluerocketclick.style.background = "#6cc3ecff"
        circleblue2.style.background = "#3fb1e6ff"
        pinkufoclick.style.background = "#9dd7f3ff"
        circlepink2.style.background = "#dbf0fbff"
    
        document.body.classList.add("theme-blue")
        document.body.classList.remove("theme-pink")
        backgroundWhite.style.opacity = "1"
        backgroundBlack.style.opacity = "0"
        navUl.style.background = "white"
        navUl.style.color = "black"
        starsB.style.opacity = "1"
        starsW.style.opacity = "0"
        starAccentW1.style.opacity = "0"
        starAccentW2.style.opacity = "0"
        starAccentB1.style.opacity = "1"
        starAccentB2.style.opacity = "1"
    }
});

//Jquery Code
  $(document).ready(function scrollToSection() {

    $("#li1").click(function() {
        $("html,body").animate({
            scrollTop: $("#projects").offset().top
        }, 500);
    });

    $("#li2").click(function() {
        $("html,body").animate({
            scrollTop: $("#skills").offset().top
        }, 800);
    });

    $("#li3").click(function() {
        $("html,body").animate({
            scrollTop: $("#about").offset().top
        }, 1200);
    });

    $("#li4").click(function() {
        $("html,body").animate({
            scrollTop: $("#contact").offset().top
        }, 1500);
    });
});
