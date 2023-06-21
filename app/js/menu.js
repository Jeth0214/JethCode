// Toolbar
const header = document.querySelector("#Home");
const navToggle = document.getElementById("nav__toggle");
const navbar = document.querySelector(".nav");
const navLinks = document.querySelector(".nav__links");
const navList = document.querySelectorAll(".nav__list");
const overlay = document.querySelector("#overlay");
const sections = document.querySelectorAll("section");
const fabButton = document.querySelector(".fab-button");
// Circular menu
const menu = document.querySelector(".menu");
const toggler = document.querySelector(".menu--hero__toggle");
const menuItems = document.querySelectorAll(".menu--hero__icon");
const menuBtn = document.querySelector("#menuBtn");
const menuImage = document.querySelector(".hero__image");

let href;
let menuIndex;
let menuTitle = "Home";

/**
 * Global
 * Windows
 * Doucument
 */

// windows on load
window.addEventListener("load", function (event) {
  menu.classList.add("active");
  resizeMenu();
  // Animate Circular Menu when the page was loaded
  if (menu.classList.contains("active")) {
    setTimeout(() => {
      menuBtn.classList.remove("display-n");
      menuItems[0].children[0].classList.add("active");
    }, 500);
  }

  if (window.scrollY > 80 || navbar.classList.contains("nav--open-menu")) {
    navLinks.style.display = "flex";
  }
});

//  window on resize
window.addEventListener("resize", () => {
  resizeMenu();
  if (window.innerWidth > 500) {
    navbar.classList.remove("nav--open-menu");
    overlay.classList.remove("overlay");
  }
});

//set scroll padding top dynamically when smooth scrolling
document.documentElement.style.setProperty(
  "--scroll-padding",
  +header.scrollY - 5 + "px"
);

// add an event listener for scroll
window.onscroll = function () {
  if (window.scrollY > 80 || navbar.classList.contains("nav--open-menu")) {
    header.classList.add("bg-dark", "box-shadow");
    navbar.classList.add("nav__brand--shrink");
    menu.classList.remove("active");
    navLinks.style.display = "flex";
    menuBtn.style.opacity = 0;
  } else {
    header.classList.remove("bg-dark", "box-shadow");
    navbar.classList.remove("nav__brand--shrink");
    menu.classList.add("active");
    menuBtn.style.opacity = 1;
    menuItems[0].children[0].classList.add("active");
    menuBtn.textContent = "Home";
    menuBtn.href = "#Home";
    let siblingLinks = [...menuItems].filter((child) => child != menuItems[0]);
    siblingLinks.forEach((element) => {
      element.children[0].classList.remove("active");
    });
  }
  if (window.scrollY == 0) {
    history.pushState(null, "JethCode.", "http://localhost:3000/");
  }
  if (
    window.innerWidth < 992 ||
    (window.innerWidth > 992 && window.scrollY > 80)
  ) {
    navLinks.style.display = "flex";
  } else {
    navLinks.style.display = "none";
  }
};

/*********************************************************************************** */

/**
 * Toolbar
 */

// hide and show toggle menu using the hamburger menu
navToggle.addEventListener("click", () => {
  toggleMenu();
});
navList.forEach((link) => {
  link.addEventListener("click", activeLink);
});

toggler.onclick = () => {
  // console.log("clicked");
  menu.classList.toggle("active");
};

/********************************************************************************** */

/**
 *  Circular Menu
 */
menuItems.forEach((menuItem) => {
  menuItem.addEventListener("mouseover", () => {
    href = menuItem.children[0].attributes.href.textContent;
    menuTitle = href.slice(1).replace("-", " ");
    menuBtn.textContent = menuTitle;
    menuBtn.href = href;
    menuItem.children[0].classList.add("active");
    let siblingLinks = [...menuItems].filter((child) => child != menuItem);
    siblingLinks.forEach((element) => {
      element.children[0].classList.remove("active");
    });
  });
  menuItem.children[0].addEventListener("click", (event) => {
    let index = [...menuItems].indexOf(menuItem);

    if (menuTitle == "Home") {
      return;
    } else {
      menu.classList.remove("active");
    }
    navLinks.style.display = "flex";
    navList[index].classList.add("nav__list--active");
    let siblingLists = [...navList].filter((child) => child != navList[index]);
    siblingLists.forEach((element) => {
      element.classList.remove("nav__list--active");
    });
  });
});

menuBtn.addEventListener("click", () => {
  if (menuTitle == "Home" || menuTitle == "") {
    return;
  } else {
    menu.classList.remove("active");
  }
});

/***************************************************************************************** */

/**
 * Functions
 *
 */

// hide and show toggle menu using the links and set the active styling upon clicking the link
function activeLink() {
  navList.forEach((item) => {
    scrollToTop();
    item.classList.remove("nav__list--active");
    this.classList.add("nav__list--active");
  });
}

// hide and show toggle menu function
function toggleMenu() {
  // fabButton.style.display = "none";
  overlay.classList.toggle("overlay");
  navbar.classList.toggle("nav--open-menu");
  header.classList.add("bg-dark", "box-shadow");
}

// When the user clicks on the button, scroll to the top of the document
function scrollToTop() {
  document.body.scrollTop = 0;
  document.documentElement.scrollTop = 0;
  overlay.classList.remove("overlay");
  navbar.classList.remove("nav--open-menu");
  history.replaceState(null, "", location.origin);
  menuItems[0].children[0].classList.add("active");
  menuBtn.textContent = "Home";
  menuBtn.href = "#Home";
  let siblingLinks = [...menuItems].filter((child) => child != menuItems[0]);
  siblingLinks.forEach((element) => {
    element.children[0].classList.remove("active");
  });
}

function resizeMenu() {
  let menuContainer = document.querySelector("#hero-menu-container");
  let width = menuContainer.offsetWidth;
  if (width < 442) {
    menuItems.forEach((menu) => {
      menu.style.transformOrigin = width / 2 + 22 + "px";
      menu.style.left = width - (width + 25) + "px";
    });
  } else {
    menuItems.forEach((menu) => {
      menu.style.transformOrigin = 220 + "px";
      menu.style.left = 0 + "px";
    });
  }

  if (
    window.innerWidth < 992 ||
    (window.innerWidth > 992 && window.scrollY > 80)
  ) {
    navLinks.style.display = "flex";
  } else {
    navLinks.style.display = "none";
  }
}
