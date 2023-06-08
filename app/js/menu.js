const menu = document.querySelector(".menu");
const toggler = document.querySelector(".menu--hero__toggle");


// This function is for typing text effects
let typed = new Typed("#auto-type", {
    strings: ["analyze.","develop.", "deploy."],
    typeSpeed: 100,
    backSpeed: 100,
    loop: true
});

toggler.onclick = () => {
    // console.log("clicked");
    menu.classList.toggle("active");
};

document.addEventListener("DOMContentLoaded", function(event){
    menu.classList.toggle("active");
  });