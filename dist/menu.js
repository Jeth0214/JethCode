"use strict";function _toConsumableArray(e){return _arrayWithoutHoles(e)||_iterableToArray(e)||_unsupportedIterableToArray(e)||_nonIterableSpread()}function _nonIterableSpread(){throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}function _unsupportedIterableToArray(e,n){if(e){if("string"==typeof e)return _arrayLikeToArray(e,n);var t=Object.prototype.toString.call(e).slice(8,-1);return"Object"===t&&e.constructor&&(t=e.constructor.name),"Map"===t||"Set"===t?Array.from(e):"Arguments"===t||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(t)?_arrayLikeToArray(e,n):void 0}}function _iterableToArray(e){if("undefined"!=typeof Symbol&&null!=e[Symbol.iterator]||null!=e["@@iterator"])return Array.from(e)}function _arrayWithoutHoles(e){if(Array.isArray(e))return _arrayLikeToArray(e)}function _arrayLikeToArray(e,n){(null==n||n>e.length)&&(n=e.length);for(var t=0,r=new Array(n);t<n;t++)r[t]=e[t];return r}var href,menuIndex,header=document.querySelector("#Home"),navToggle=document.getElementById("nav__toggle"),navbar=document.querySelector(".nav"),navLinks=document.querySelector(".nav__links"),navList=document.querySelectorAll(".nav__list"),overlay=document.querySelector("#overlay"),sections=document.querySelectorAll("section"),aboutBtn=document.querySelector(".hero-cta__about"),menu=document.querySelector(".menu"),toggler=document.querySelector(".menu--hero__toggle"),menuItems=document.querySelectorAll(".menu--hero__icon"),menuBtn=document.querySelector("#menuBtn"),menuImage=document.querySelector(".hero__image"),menuTitle="Home";function activeLink(){var e=this;navList.forEach((function(n){scrollToTop(),n.classList.remove("nav__list--active"),e.classList.add("nav__list--active")}))}function toggleMenu(){overlay.classList.toggle("overlay"),navbar.classList.toggle("nav--open-menu"),header.classList.add("bg-dark","box-shadow")}function scrollToTop(){document.body.scrollTop=0,document.documentElement.scrollTop=0,reset()}function resizeMenu(){menu.classList.add("active");var e=document.querySelector("#hero-menu-container").offsetWidth;menuImage.style.zIndex=1e3,e<442?menuItems.forEach((function(n){n.style.transformOrigin=e/2+22+"px",n.style.left=e-(e+25)+"px",n.style.zIndex=2})):(menuItems.forEach((function(e){e.style.transformOrigin="230px",e.style.left="0px",e.style.zIndex=2})),setTimeout((function(){menuImage.style.zIndex=1}),1200)),window.innerWidth<992||window.innerWidth>992&&window.scrollY>80?navLinks.style.display="flex":navLinks.style.display="none"}function setLinkActiveClass(e,n,t,r){var a=t?_toConsumableArray(e).filter((function(n){return n!=e[t]})):_toConsumableArray(e).filter((function(e){return e!=r}));r?(r.children[0].classList.add(n),a.forEach((function(e){e.children[0].classList.remove(n)}))):(navList[t].classList.add(n),a.forEach((function(e){e.classList.remove(n)})))}function reset(){header.classList.remove("bg-dark","box-shadow"),navbar.classList.remove("nav__brand--shrink"),overlay.classList.remove("overlay"),navbar.classList.remove("nav--open-menu"),menu.classList.add("active"),menuBtn.style.opacity=1,menuItems[0].children[0].classList.add("active"),menuBtn.textContent="Home",menuBtn.href="#Home",resizeMenu(),setLinkActiveClass(menuItems,"active",null,menuItems[0])}window.addEventListener("load",(function(e){resizeMenu(),menu.classList.contains("active")&&setTimeout((function(){menuBtn.classList.remove("display-n"),menuBtn.classList.add("display-i-b"),menuItems[0].children[0].classList.add("active")}),500),(window.scrollY>80||navbar.classList.contains("nav--open-menu"))&&(navLinks.style.display="flex")})),window.addEventListener("resize",(function(){resizeMenu(),window.innerWidth>500&&(navbar.classList.remove("nav--open-menu"),overlay.classList.remove("overlay"))})),document.documentElement.style.setProperty("--scroll-padding",header.offsetHeight+"px"),window.onscroll=function(){window.scrollY>80||navbar.classList.contains("nav--open-menu")?(header.classList.add("bg-dark","box-shadow"),navbar.classList.add("nav__brand--shrink"),menu.classList.remove("active"),navLinks.style.display="flex",menuBtn.style.opacity=0):reset(),0==window.scrollY&&history.pushState(null,"JethCode.",window.location.origin),window.innerWidth<992||window.innerWidth>992&&window.scrollY>80?navLinks.style.display="flex":navLinks.style.display="none"},navToggle.addEventListener("click",(function(){toggleMenu()})),navList.forEach((function(e){e.addEventListener("click",activeLink)})),toggler.onclick=function(){menu.classList.toggle("active")},aboutBtn.addEventListener("click",(function(){setLinkActiveClass(navList,"nav__list--active",1,null)})),menuItems.forEach((function(e){e.addEventListener("mouseover",(function(){href=e.children[0].attributes.href.textContent,menuTitle=href.slice(1).replace("-"," "),menuBtn.textContent=menuTitle,menuBtn.href=href,setLinkActiveClass(menuItems,"active",null,e)})),e.children[0].addEventListener("click",(function(n){menuIndex=_toConsumableArray(menuItems).indexOf(e),"Home"!=menuTitle&&(menu.classList.remove("active"),setLinkActiveClass(navList,"nav__list--active",menuIndex,null))}))})),menuBtn.addEventListener("click",(function(){if("Home"!=menuTitle&&""!=menuTitle){menu.classList.remove("active");var e=_toConsumableArray(navList).filter((function(e){return e.children[0].href===menuBtn.href}))[0];menuIndex=_toConsumableArray(navList).indexOf(e),setLinkActiveClass(navList,"nav__list--active",menuIndex,null)}}));
//# sourceMappingURL=menu.js.map