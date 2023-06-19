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
    }, 1000);
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
  header.scrollY - 5 + "px"
);

// add an event listener for scroll
window.onscroll = function () {
  console.log("scroll", window.scrollY);
  if (window.scrollY > 80 || navbar.classList.contains("nav--open-menu")) {
    header.classList.add("bg-dark", "box-shadow");
    navbar.classList.add("nav__brand--shrink");
    menu.classList.remove("active");
    navLinks.style.display = "flex";
  } else {
    header.classList.remove("bg-dark", "box-shadow");
    navbar.classList.remove("nav__brand--shrink");
    menu.classList.add("active");
    navLinks.style.display = "none";
    // history.replaceState(null, "", location.origin);
  }
  //  navHighlighter();
  showFabButton();
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

// navLink.forEach((link) => {
//   link.addEventListener("click", () => {
//     if (window.innerWidth > 768) {
//       navbar.classList.remove("nav--open-menu");
//       overlay.classList.remove("overlay");
//     } else {
//       toggleMenu();
//     }

//     link.classList.add("nav__link--active");
//     let siblingLinks = [...navLink].filter((child) => child != link);
//     siblingLinks.forEach((element) => {
//       element.classList.remove("nav__link--active");
//     });
//   });
// });

toggler.onclick = () => {
  // console.log("clicked");
  menu.classList.toggle("active");
};

/********************************************************************************** */

/**
 *  Circular Menu
 */
menuItems.forEach((menuItem) => {
  let href;
  let menuTitle;
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
    console.log(menuTitle);
    console.log(screenY);
    if (menuTitle == "Home") {
      if (window.screenY >= 0) {
        return;
      } else {
        scrollToTop();
      }
    } else {
      menu.classList.remove("active");
    }
  });
});

menuBtn.addEventListener("click", () => {
  menu.classList.remove("active");
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
  let siblingLinks = [...menuItems].filter((child) => child != menuItem);
  siblingLinks.forEach((element) => {
    element.children[0].classList.remove("active");
  });
}

// When the user scrolls down 60px  from the top , shrink the navbar and show the scroll top button
function showFabButton() {
  // if (document.body.scrollTop > 60 || document.documentElement.scrollTop > 60) {
  //   fabButton.style.display = "block";
  // } else {
  //   fabButton.style.display = "none";
  // }
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

  if (window.innerWidth < 992) {
    navLinks.style.display = "flex";
  } else {
    navLinks.style.display = "none";
  }
}
