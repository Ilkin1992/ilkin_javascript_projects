//Query selectors
let myNavbar = document.querySelector(".navbar");
let toggleButton = document.querySelector(".toggle_button");
let navbarLinks = document.querySelector(".navbar_links");

//Code that makes mobile navbar toggle onclick
toggleButton.addEventListener('click', function() {
    navbarLinks.classList.toggle('active');
    myNavbar.classList.toggle('wide');
  });
  
  
  // Code that make navbar change color onscroll
  window.onscroll = function() {
      "use strict";
      if (document.body.scrollTop >= 100 || document.documentElement.scrollTop >= 100) {
        myNavbar.classList.add("colored"); 
        
        
      } else {
        myNavbar.classList.remove("colored"); 
      }
    };
     