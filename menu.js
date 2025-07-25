const hamburger = document.getElementById("hamburger");
const navLinks = document.querySelector(".nav-link");

hamburger.addEventListener("click", () =>{
    navLinks.classList.toggle("active");
});