//Query selectors and variables
const game = document.querySelector("#game");
const gameField = document.querySelector("#game_field");
const gameMessage = document.querySelector("#gameMessage");
const gameLostMessage = document.querySelector("#gameLostMessage");
const gameWonMessage = document.querySelector("#gameWonMessage");
const restartButton = document.querySelector("#restart");
const easy = document.querySelector("#easy");
const hard = document.querySelector("#hard");
const difficultyPicker = document.querySelector("#choose_difficulty");
let count = 0;
let squareNumber;
let mineNumber;

//Select difficulty
difficultyPicker.addEventListener("click", (e) => {
  if (e.target.id === "easy") {
    squareNumber = 105;
    mineNumber = 5;
    main(squareNumber, mineNumber);
  }
  if (e.target.id === "hard") {
    squareNumber = 150;
    mineNumber = 15;
    let height = "30rem";
    let gridHeight = "9.5%";
    main(squareNumber, mineNumber, height, gridHeight);
  }
});

//Function that runs the main game logic is corresponding button is clicked
function main(squareNumber, mineNumber, height, gridHeight) {
  //Hide buttons that choose difficulty
  difficultyPicker.classList.add("invisible");

  game.style.height = height;
  gameField.style.gridTemplateRows = `repeat(15, ${gridHeight})`;

  //Function that creates a square and appends it to the container
  function appendSquare() {
    const square = document.createElement("div");
    square.innerText = "?";
    square.className = "square";
    gameField.appendChild(square);
  }

  //The function is called 150 times with 'for' loop
  for (let i = 1; i <= squareNumber; i++) {
    appendSquare();
  }

  //Selecting all squares
  const squares = document.querySelectorAll(".square");
  //Creating a new Set() object to use it in a function below
  const nums = new Set();

  //Function that 'mines' 15 random squares
  function mineSquares() {
    //Generating an array of unique random numbers between 0 and number of squares
    while (nums.size !== mineNumber) {
      nums.add(Math.floor(Math.random() * squareNumber));
    }
    nums.forEach((num) => {
      if (!squares[num].classList.contains("mined")) {
        squares[num].classList.add("mined");
      }
    });
  }

  //Calling that function
  mineSquares(nums);

  //Adding event listener on all squares
  squares.forEach((element) => {
    element.addEventListener("click", (e) => {
      checkSquares(e.target);
    });
  });

  //Function that triggers scripted events in case squares are clicked
  function checkSquares(element) {
    if (element.classList.contains("mined")) {
      if (element.innerText == "?")
        element.innerHTML = `<i class="fa-solid fa-skull"></i>`;
      element.classList.add("red");
      stopGame(squares);
    } else {
      if (element.innerText == "?") {
        element.innerHTML = `<i class="fa-regular fa-face-smile"></i>`;
        element.classList.add("green");
        count++;
        checkProgress(count);
      }
    }
  }

  //Function that stops game if mined square is clicked
  function stopGame(squares) {
    squares.forEach((square) => {
      square.classList.add("inactive");
    });
    gameMessage.classList.add("invisible");
    restartButton.classList.remove("invisible");
    gameLostMessage.classList.remove("invisible");
  }

  //Event listener on the button that reloads the page and restarts the lost game
  restartButton.addEventListener("click", () => {
    window.location.reload();
  });

  //Generating a number that allows to check if player has won
  let winningNumber = Array.from(squares).length - nums.size;

  // Function that executes if player wins the game
  function checkProgress(count) {
    if (count === winningNumber) {
      squares.forEach((square) => {
        square.classList.add("inactive");
      });
      gameMessage.classList.add("invisible");
      restartButton.classList.remove("invisible");
      gameWonMessage.classList.remove("invisible");
    }
  }
}
