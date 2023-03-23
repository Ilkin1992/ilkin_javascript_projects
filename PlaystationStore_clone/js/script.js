"use strict";

//Import data from JSON file
import games from "../json/database.json" assert { type: "json" };
let gamesList = games;

//Query selectors
let firstGamesContainer = document.querySelector(".first_container");
let secondGamesContainer = document.querySelector(".second_container");
let counter = document.querySelector(".games_counter");
let length = gamesList.length;
let half = Math.floor(length / 2);
let firstHalf = gamesList.slice(0, half);
let secondHalf = gamesList.slice(half, gamesList.length);
const gameCardTemplate = document.querySelector(".game_card_template");
let pagination_container = document.querySelector(".pagination_container");
let buttons = pagination_container.querySelectorAll(".pagination_button");
const firstBtn = document.querySelector(".first_btn");
const secondBtn = document.querySelector(".second_btn");
let bottomNavbar = document.querySelector(".bottom_navbar");
const toggleButton = document.querySelector("#toggle");
const bottomNavbarLinks = document.querySelector(".bottom_navbar_links");

//Make bottom navbar links visible on click
toggleButton.addEventListener("click", () => {
  bottomNavbarLinks.classList.toggle("visible");
});

//Navbar scrolldown animation
window.addEventListener("scroll", () => {
  bottomNavbar.classList.toggle("scroll_active", window.scrollY > 0);
});

//Take data from database, process it, add images and render on the screen
function displayGames(array, container) {
  array.forEach((game) => {
    const templateClone = gameCardTemplate.content.cloneNode(true);
    const gameCardImage = templateClone.querySelector(".game_card_img");
    const gameCardText = templateClone.querySelector(".game_card_text");
    gameCardImage.innerHTML = `<img src="./img/${game.title}.jpg" alt="">`;
    gameCardText.textContent = game.title;
    container.appendChild(templateClone);
  });
}

//Call the function twice
displayGames(firstHalf, firstGamesContainer);
displayGames(secondHalf, secondGamesContainer);

//Add dynamic data to counter
counter.innerText = `${length} games`;

//Render corresponding container depending on which button user clicks
for (let i = 0; i < buttons.length; i++) {
  buttons[i].addEventListener("click", function () {
    let current = document.querySelectorAll(".active");
    current[0].className = current[0].className.replace(" active", "");
    this.className += " active";
    if (firstBtn.classList.contains("active")) {
      secondGamesContainer.classList.add("invisible");
      firstGamesContainer.classList.remove("invisible");
    }
    if (secondBtn.classList.contains("active")) {
      firstGamesContainer.classList.add("invisible");
      secondGamesContainer.classList.remove("invisible");
    }
  });
}
