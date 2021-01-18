//Query selectors
let myNavbar = document.querySelector(".navbar");
let toggleButton = document.querySelector(".toggle_button");
let navbarLinks = document.querySelector(".navbar_links");
let createBtn = document.querySelector(".create_btn")
let buyRentButtons = document.querySelector('.buy_rent_buttons');
let myCard = document.querySelector(".my_card");
let myPictureBox = document.querySelector(".picturebox");
const carouselSlide = document.querySelector(".carousel_slide");
const carouselImages = document.querySelectorAll(".carousel_slide img");
const prevButton = document.querySelector("#prevBtn");
const nextButton = document.querySelector("#nextBtn");



//Code that makes mobile navbar toggle onclick
toggleButton.addEventListener('click', function() {
  navbarLinks.classList.toggle('active');
});


// Code that make navbar change color onscroll
window.onscroll = function() {
    "use strict";
    if (document.body.scrollTop >= 100 || document.documentElement.scrollTop >= 100) {
      myNavbar.classList.add("colored"); 
      createBtn.classList.add("create_change_btn");
      
    } else {
      myNavbar.classList.remove("colored"); 
      createBtn.classList.remove("create_change_btn");
    }
  };
   
//Code that makes buy and rent buttons change color and opens a menu
buyRentButtons.addEventListener('click', function(ev) {
  if (ev.target.tagName != 'BUTTON') return false;
  ev.target.classList.toggle('colored_btn');  
  myCard.classList.toggle('my_card_change');
});


//Code for section with sliding images
let counter = 1;
const size = carouselImages[0].clientWidth;

carouselSlide.style.transform = 'translateX(' + (-size * counter) + 'px)'; 

//Button listeners 
nextButton.addEventListener('click', ()=> {
  if (counter >= carouselImages.length - 1) return;
 carouselSlide.style.transition = "transform 0.4s ease-in-out";
 counter++;
 carouselSlide.style.transform = 'translateX(' + (-size * counter) + 'px)'; 
});
 
prevButton.addEventListener('click', ()=> {
  if (counter <= 0) return;
  carouselSlide.style.transition = "transform 0.4s ease-in-out";
  counter--;
  carouselSlide.style.transform = 'translateX(' + (-size * counter) + 'px)'; 
 });
 //Button listeners 
  
carouselSlide.addEventListener('transitionend', ()=> {
 if (carouselImages[counter].id === 'lastClone') {
    carouselSlide.style.transition = "none"
    counter = carouselImages.length - 2 ;
    carouselSlide.style.transform = 'translateX(' + (-size * counter) + 'px)'; 
 };
 if (carouselImages[counter].id === 'firstClone') {
  carouselSlide.style.transition = "none"
  counter = carouselImages.length - counter;
  carouselSlide.style.transform = 'translateX(' + (-size * counter) + 'px)'; 
};
});




 



