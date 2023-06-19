"use strict";function _toConsumableArray(e){return _arrayWithoutHoles(e)||_iterableToArray(e)||_unsupportedIterableToArray(e)||_nonIterableSpread()}function _nonIterableSpread(){throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}function _unsupportedIterableToArray(e,n){if(e){if("string"==typeof e)return _arrayLikeToArray(e,n);var t=Object.prototype.toString.call(e).slice(8,-1);return"Object"===t&&e.constructor&&(t=e.constructor.name),"Map"===t||"Set"===t?Array.from(e):"Arguments"===t||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(t)?_arrayLikeToArray(e,n):void 0}}function _iterableToArray(e){if("undefined"!=typeof Symbol&&null!=e[Symbol.iterator]||null!=e["@@iterator"])return Array.from(e)}function _arrayWithoutHoles(e){if(Array.isArray(e))return _arrayLikeToArray(e)}function _arrayLikeToArray(e,n){(null==n||n>e.length)&&(n=e.length);for(var t=0,r=new Array(n);t<n;t++)r[t]=e[t];return r}var header=document.querySelector("#Home"),navToggle=document.getElementById("nav__toggle"),navbar=document.querySelector(".nav"),navLinks=document.querySelector(".nav__links"),navList=document.querySelectorAll(".nav__list"),overlay=document.querySelector("#overlay"),sections=document.querySelectorAll("section"),fabButton=document.querySelector(".fab-button"),menu=document.querySelector(".menu"),toggler=document.querySelector(".menu--hero__toggle"),menuItems=document.querySelectorAll(".menu--hero__icon"),menuBtn=document.querySelector("#menuBtn"),menuImage=document.querySelector(".hero__image");function activeLink(){var e=this;navList.forEach((function(n){scrollToTop(),n.classList.remove("nav__list--active"),e.classList.add("nav__list--active")}))}function toggleMenu(){overlay.classList.toggle("overlay"),navbar.classList.toggle("nav--open-menu"),header.classList.add("bg-dark","box-shadow")}function scrollToTop(){document.body.scrollTop=0,document.documentElement.scrollTop=0,overlay.classList.remove("overlay"),navbar.classList.remove("nav--open-menu"),history.replaceState(null,"",location.origin),menuItems[0].children[0].classList.add("active"),_toConsumableArray(menuItems).filter((function(e){return e!=menuItem})).forEach((function(e){e.children[0].classList.remove("active")}))}function showFabButton(){}function resizeMenu(){var e=document.querySelector("#hero-menu-container").offsetWidth;e<442?menuItems.forEach((function(n){n.style.transformOrigin=e/2+22+"px",n.style.left=e-(e+25)+"px"})):menuItems.forEach((function(e){e.style.transformOrigin="220px",e.style.left="0px"})),window.innerWidth<992?navLinks.style.display="flex":navLinks.style.display="none"}window.addEventListener("load",(function(e){menu.classList.add("active"),resizeMenu(),menu.classList.contains("active")&&setTimeout((function(){menuBtn.classList.remove("display-n"),menuItems[0].children[0].classList.add("active")}),1e3)})),window.addEventListener("resize",(function(){resizeMenu(),window.innerWidth>500&&(navbar.classList.remove("nav--open-menu"),overlay.classList.remove("overlay"))})),document.documentElement.style.setProperty("--scroll-padding",header.scrollY-5+"px"),window.onscroll=function(){console.log("scroll",window.scrollY),window.scrollY>80||navbar.classList.contains("nav--open-menu")?(header.classList.add("bg-dark","box-shadow"),navbar.classList.add("nav__brand--shrink"),menu.classList.remove("active"),navLinks.style.display="flex"):(header.classList.remove("bg-dark","box-shadow"),navbar.classList.remove("nav__brand--shrink"),menu.classList.add("active"),navLinks.style.display="none"),showFabButton()},navToggle.addEventListener("click",(function(){toggleMenu()})),navList.forEach((function(e){e.addEventListener("click",activeLink)})),toggler.onclick=function(){menu.classList.toggle("active")},menuItems.forEach((function(e){var n,t;e.addEventListener("mouseover",(function(){n=e.children[0].attributes.href.textContent,t=n.slice(1).replace("-"," "),menuBtn.textContent=t,menuBtn.href=n,e.children[0].classList.add("active"),_toConsumableArray(menuItems).filter((function(n){return n!=e})).forEach((function(e){e.children[0].classList.remove("active")}))})),e.children[0].addEventListener("click",(function(e){if(console.log(t),console.log(screenY),"Home"==t){if(window.screenY>=0)return;scrollToTop()}else menu.classList.remove("active")}))})),menuBtn.addEventListener("click",(function(){menu.classList.remove("active")}));
//# sourceMappingURL=menu.js.map