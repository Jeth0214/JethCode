// Toolbar
const header = document.querySelector("#Home");
const navToggle = document.getElementById("nav__toggle");
const navbar = document.querySelector(".nav");
const navLinks = document.querySelector(".nav__links");
const navList = document.querySelectorAll(".nav__list");
const overlay = document.querySelector("#overlay");
const sections = document.querySelectorAll("section");
const aboutBtn = document.querySelector(".hero-cta__about");
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
  header.offsetHeight + "px"
);

// add an event listener on scroll
window.onscroll = function () {
  if (window.scrollY > 80 || navbar.classList.contains("nav--open-menu")) {
    header.classList.add("bg-dark", "box-shadow");
    navbar.classList.add("nav__brand--shrink");
    menu.classList.remove("active");
    navLinks.style.display = "flex";
    menuBtn.style.opacity = 0;
  } else {
    reset();
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

aboutBtn.addEventListener("click", () => {
  setLinkActiveClass(navList, "nav__list--active", 1, null);
});

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

    setLinkActiveClass(menuItems, "active", null, menuItem);
  });
  menuItem.children[0].addEventListener("click", (event) => {
    menuIndex = [...menuItems].indexOf(menuItem);
    if (menuTitle == "Home") {
      return;
    } else {
      menu.classList.remove("active");
    }
    // navList[menuIndex].classList.add("nav__list--active");
    setLinkActiveClass(navList, "nav__list--active", menuIndex, null);
  });
});

menuBtn.addEventListener("click", () => {
  if (menuTitle == "Home" || menuTitle == "") {
    return;
  } else {
    menu.classList.remove("active");
  }
  let list = [...navList].filter(
    (list) => list.children[0].href === menuBtn.href
  )[0];
  menuIndex = [...navList].indexOf(list);
  // navList[menuIndex].classList.add("nav__list--active");
  setLinkActiveClass(navList, "nav__list--active", menuIndex, null);
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
  reset();
}

// element state change on resizing the viewport
function resizeMenu() {
  menu.classList.add("active");
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

// set active classess to active
function setLinkActiveClass(classArray, activeClass, index, link) {
  let siblingLinks = index
    ? [...classArray].filter((child) => child != classArray[index])
    : [...classArray].filter((child) => child != link);
  if (link) {
    link.children[0].classList.add(activeClass);
    siblingLinks.forEach((element) => {
      element.children[0].classList.remove(activeClass);
    });
  } else {
    navList[index].classList.add(activeClass);
    siblingLinks.forEach((element) => {
      element.classList.remove(activeClass);
    });
  }
}

// reset the element state
function reset() {
  header.classList.remove("bg-dark", "box-shadow");
  navbar.classList.remove("nav__brand--shrink");
  overlay.classList.remove("overlay");
  navbar.classList.remove("nav--open-menu");
  menu.classList.add("active");
  menuBtn.style.opacity = 1;
  menuItems[0].children[0].classList.add("active");
  menuBtn.textContent = "Home";
  menuBtn.href = "#Home";
  setLinkActiveClass(menuItems, "active", null, menuItems[0]);
}
