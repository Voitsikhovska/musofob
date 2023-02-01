let slideIndex = 0;
showSlides();

function showSlides() {
  let i;
  let slides = document.getElementsByClassName("mySlides");
  let dots = document.getElementsByClassName("dot");
  for (i = 0; i < slides.length; i++) {
    slides[i].style.display = "none";
  }
  slideIndex++;
  if (slideIndex > slides.length) { slideIndex = 1 }
  for (i = 0; i < dots.length; i++) {
    dots[i].className = dots[i].className.replace(" active", "");
  }
  slides[slideIndex - 1].style.display = "block";
  dots[slideIndex - 1].className += " active";
  setTimeout(showSlides, 7000); // Change image every 2 seconds
}

/*function myFunction(sheet) {
  var element = document.body;
  element.classList.toggle("dark-mode");
  createCookie ("sheet", sheet);
}
document.addEventListener("DOMContentLoaded", function(event) { 
  var item = readCookie ("sheet") || ".dark-mode";
  myFunction (item);
});*/




let darkMode = localStorage.getItem("darkMode");

if (darkMode == "true") {
  addDarkMode();
}
document.querySelector(".slider").addEventListener("click", function () {
  darkMode = localStorage.getItem("darkMode");
  if (darkMode == "true") {
    removeDarkMode();
  } else {
    addDarkMode();
  }
});

function addDarkMode() {
  darkMode = localStorage.setItem("darkMode", "true");
  document.getElementsByTagName("body")[0].classList.add("darkMode");
}

function removeDarkMode() {
  darkMode = localStorage.setItem("darkMode", "false");
  document.getElementsByTagName("body")[0].classList.remove("darkMode");
}
 //search
 /*function loadSearchData() {
    // Data to be used in the searchbar
    let countries = [
      'Australia',
      'Austria',
      'Brazil',
      'Canada',
      'Denmark',
      'Egypt',
      'France',
      'Germany',
      'USA',
      'Vietnam'
    ];
  // Get the HTML element of the list
let list = document.getElementById('list');
// Add each data item as an <a> tag
countries.forEach((country)=>{
    let a = document.createElement("a");
    a.innerText = country;
    a.classList.add("listItem");
    list.appendChild(a);
})
  }

  // Get the HTML element of the list
let list = document.getElementById('list');
// Add each data item as an <a> tag
countries.forEach((country)=>{
    let a = document.createElement("a");
    a.innerText = country;
    a.classList.add("listItem");
    list.appendChild(a);
})*/
const menuHamburger = document.querySelector(".menu-hamburger");
const navLinks = document.querySelector(".nav-links");
 
 menuHamburger.addEventListener('click',()=>{
        navLinks.classList.toggle('mobile-menu')
        })