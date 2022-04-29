const hamburgerMenu = document.getElementsByClassName("hamburger-menu") [0]; 
const openMenu = document.getElementById("open-menu");
const closeMenu = document.getElementById("close-menu");
openMenu.addEventListener("click",
    function () {
    hamburgerMenu.style.display= "block";
    }
);
closeMenu.addEventListener("click",
    function () {
    hamburgerMenu.style.display= "none";
    }
);

