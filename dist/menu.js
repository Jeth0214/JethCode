"use strict";function _toConsumableArray(e){return _arrayWithoutHoles(e)||_iterableToArray(e)||_unsupportedIterableToArray(e)||_nonIterableSpread()}function _nonIterableSpread(){throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}function _unsupportedIterableToArray(e,n){if(e){if("string"==typeof e)return _arrayLikeToArray(e,n);var t=Object.prototype.toString.call(e).slice(8,-1);return"Object"===t&&e.constructor&&(t=e.constructor.name),"Map"===t||"Set"===t?Array.from(e):"Arguments"===t||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(t)?_arrayLikeToArray(e,n):void 0}}function _iterableToArray(e){if("undefined"!=typeof Symbol&&null!=e[Symbol.iterator]||null!=e["@@iterator"])return Array.from(e)}function _arrayWithoutHoles(e){if(Array.isArray(e))return _arrayLikeToArray(e)}function _arrayLikeToArray(e,n){(null==n||n>e.length)&&(n=e.length);for(var t=0,r=new Array(n);t<n;t++)r[t]=e[t];return r}var href,menuIndex,header=document.querySelector("#Home"),navToggle=document.getElementById("nav__toggle"),navbar=document.querySelector(".nav"),navLinks=document.querySelector(".nav__links"),navList=document.querySelectorAll(".nav__list"),overlay=document.querySelector("#overlay"),sections=document.querySelectorAll("section"),fabButton=document.querySelector(".fab-button"),menu=document.querySelector(".menu"),toggler=document.querySelector(".menu--hero__toggle"),menuItems=document.querySelectorAll(".menu--hero__icon"),menuBtn=document.querySelector("#menuBtn"),menuImage=document.querySelector(".hero__image"),menuTitle="Home";function activeLink(){var e=this;navList.forEach((function(n){scrollToTop(),n.classList.remove("nav__list--active"),e.classList.add("nav__list--active")}))}function toggleMenu(){overlay.classList.toggle("overlay"),navbar.classList.toggle("nav--open-menu"),header.classList.add("bg-dark","box-shadow")}function scrollToTop(){document.body.scrollTop=0,document.documentElement.scrollTop=0,overlay.classList.remove("overlay"),navbar.classList.remove("nav--open-menu"),history.replaceState(null,"",location.origin),menuItems[0].children[0].classList.add("active"),menuBtn.textContent="Home",menuBtn.href="#Home",_toConsumableArray(menuItems).filter((function(e){return e!=menuItems[0]})).forEach((function(e){e.children[0].classList.remove("active")}))}function resizeMenu(){var e=document.querySelector("#hero-menu-container").offsetWidth;e<442?menuItems.forEach((function(n){n.style.transformOrigin=e/2+22+"px",n.style.left=e-(e+25)+"px"})):menuItems.forEach((function(e){e.style.transformOrigin="220px",e.style.left="0px"})),window.innerWidth<992||window.innerWidth>992&&window.scrollY>80?navLinks.style.display="flex":navLinks.style.display="none"}window.addEventListener("load",(function(e){menu.classList.add("active"),resizeMenu(),menu.classList.contains("active")&&setTimeout((function(){menuBtn.classList.remove("display-n"),menuItems[0].children[0].classList.add("active")}),500),(window.scrollY>80||navbar.classList.contains("nav--open-menu"))&&(navLinks.style.display="flex")})),window.addEventListener("resize",(function(){resizeMenu(),window.innerWidth>500&&(navbar.classList.remove("nav--open-menu"),overlay.classList.remove("overlay"))})),document.documentElement.style.setProperty("--scroll-padding",+header.scrollY-5+"px"),window.onscroll=function(){window.scrollY>80||navbar.classList.contains("nav--open-menu")?(header.classList.add("bg-dark","box-shadow"),navbar.classList.add("nav__brand--shrink"),menu.classList.remove("active"),navLinks.style.display="flex",menuBtn.style.opacity=0):(header.classList.remove("bg-dark","box-shadow"),navbar.classList.remove("nav__brand--shrink"),menu.classList.add("active"),menuBtn.style.opacity=1,menuItems[0].children[0].classList.add("active"),menuBtn.textContent="Home",menuBtn.href="#Home",_toConsumableArray(menuItems).filter((function(e){return e!=menuItems[0]})).forEach((function(e){e.children[0].classList.remove("active")})));0==window.scrollY&&history.pushState(null,"JethCode.","http://localhost:3000/"),window.innerWidth<992||window.innerWidth>992&&window.scrollY>80?navLinks.style.display="flex":navLinks.style.display="none"},navToggle.addEventListener("click",(function(){toggleMenu()})),navList.forEach((function(e){e.addEventListener("click",activeLink)})),toggler.onclick=function(){menu.classList.toggle("active")},menuItems.forEach((function(e){e.addEventListener("mouseover",(function(){href=e.children[0].attributes.href.textContent,menuTitle=href.slice(1).replace("-"," "),menuBtn.textContent=menuTitle,menuBtn.href=href,e.children[0].classList.add("active"),_toConsumableArray(menuItems).filter((function(n){return n!=e})).forEach((function(e){e.children[0].classList.remove("active")}))})),e.children[0].addEventListener("click",(function(n){var t=_toConsumableArray(menuItems).indexOf(e);"Home"!=menuTitle&&(menu.classList.remove("active"),navLinks.style.display="flex",navList[t].classList.add("nav__list--active"),_toConsumableArray(navList).filter((function(e){return e!=navList[t]})).forEach((function(e){e.classList.remove("nav__list--active")})))}))})),menuBtn.addEventListener("click",(function(){"Home"!=menuTitle&&""!=menuTitle&&menu.classList.remove("active")}));
//# sourceMappingURL=menu.js.map