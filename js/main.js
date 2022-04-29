const hamburgerMenu = document.getElementsByClassName("hamburger-menu") [0]; 
const openMenu = document.getElementById("open-menu");
openMenu.addEventListener("click",
    function () {
    hamburgerMenu.style.display= "block";
    }
);

