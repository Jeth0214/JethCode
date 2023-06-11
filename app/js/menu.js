const menu = document.querySelector(".menu");
const toggler = document.querySelector(".menu--hero__toggle");
const menuItems = document.querySelectorAll(".menu--hero__icon");
const menuBtn = document.querySelector("#menuBtn");

const menuItemsData = [
  "About Me",
  "Projects",
  "Skills",
  "Testimonials",
  "Contact Me",
  "Home",
];
let num = 0;

// This function is for typing text effects
let typed = new Typed("#auto-type", {
  strings: ["analyze.", "develop.", "deploy."],
  typeSpeed: 100,
  backSpeed: 100,
  loop: true,
});

toggler.onclick = () => {
  // console.log("clicked");
  menu.classList.toggle("active");
};

// Animate Circular Menu when the page was loaded
window.addEventListener("load", function (event) {
  menu.classList.add("active");
  if (menu.classList.contains("active")) {
    setTimeout(() => {
      menuBtn.classList.remove("display-n");
      menuItems[0].children[0].classList.add("active");
    }, 1000);
  }
});

window.addEventListener("resize", () => {
  // if (window.innerWidth > 500) {
  //     navbar.classList.remove("nav--open-menu");
  //     overlay.classList.remove("overlay");
  // }
  let menuContainer = document.querySelector("#hero-menu-container");
  console.log("resize", menuContainer.offsetWidth);
  let width = menuContainer.offsetWidth;
  if (width < 442) {
    menuItems.forEach((menu) => {
      menu.style.transformOrigin = width / 2 + 20 + "px";
      menu.style.left = width - (width + 20) + "px";
    });
  } else {
    menuItems.forEach((menu) => {
      menu.style.transformOrigin = 200 + "px";
      menu.style.left = 0 + "px";
    });
  }
});

menuItems.forEach((menu) => {
  menu.addEventListener("mouseover", () => {
    let href = menu.children[0].attributes.href.textContent;
    let menuTitle = href.slice(1).replace("-", " ");
    menuBtn.textContent = menuTitle;
    menuBtn.href = href;
    menu.children[0].classList.add("active");
    let siblingLinks = [...menuItems].filter((child) => child != menu);
    siblingLinks.forEach((element) => {
      element.children[0].classList.remove("active");
    });
  });
});

menuBtn.addEventListener("click", () => {
  menu.classList.remove("active");
});
