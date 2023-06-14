const menu = document.querySelector(".menu");
const toggler = document.querySelector(".menu--hero__toggle");
const menuItems = document.querySelectorAll(".menu--hero__icon");
const menuBtn = document.querySelector("#menuBtn");
const menuImage = document.querySelector(".hero__image");

// This function is for typing text effects
let typed = new Typed("#auto-type", {
  strings: ["Analyzing.", "Development.", "Deployment."],
  typeSpeed: 100,
  backSpeed: 100,
  loop: true,
});

// Animate Circular Menu when the page was loaded
window.addEventListener("load", function (event) {
  menu.classList.add("active");
  resizeMenu();
  if (menu.classList.contains("active")) {
    setTimeout(() => {
      menuBtn.classList.remove("display-n");
      menuItems[0].children[0].classList.add("active");
    }, 1000);
  }
});

window.addEventListener("resize", () => {
  resizeMenu();
});

toggler.onclick = () => {
  // console.log("clicked");
  menu.classList.toggle("active");
};

menuItems.forEach((menuItem) => {
  menuItem.addEventListener("mouseover", () => {
    let href = menuItem.children[0].attributes.href.textContent;
    let menuTitle = href.slice(1).replace("-", " ");
    menuBtn.textContent = menuTitle;
    menuBtn.href = href;
    menuItem.children[0].classList.add("active");
    let siblingLinks = [...menuItems].filter((child) => child != menuItem);
    siblingLinks.forEach((element) => {
      element.children[0].classList.remove("active");
    });
  });
  menuItem.children[0].addEventListener("click", (event) => {
    menu.classList.remove("active");
  });
});

menuBtn.addEventListener("click", () => {
  menu.classList.remove("active");
});

function resizeMenu() {
  let menuContainer = document.querySelector("#hero-menu-container");
  let width = menuContainer.offsetWidth;
  if (width < 442) {
    menuItems.forEach((menu) => {
      menu.style.transformOrigin = width / 2 + 22 + "px";
      menu.style.left = width - (width + 25) + "px";
      menu.style.zIndex = 10;
    });
    setTimeout(() => {
      menuImage.style.zIndex = 2;
    }, 1500);
  } else {
    menuItems.forEach((menu) => {
      menu.style.transformOrigin = 220 + "px";
      menu.style.left = 0 + "px";
    });
  }
}
