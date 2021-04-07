//Variables
const letUsPlay = document.querySelector('.let_us_play');
const playBtn = document.querySelector('#let_us_play_btn');
const gameBox = document.querySelector('.game_box');
const choose = document.querySelector('.choose');
const playerHand = document.querySelector('.player_hand');
const playerHandImage = document.querySelector('.player_hand > img')
const title = document.querySelector('.title');
const playerCount = document.querySelector('.player_count');
const computerCount = document.querySelector('.computer_count');
///Computer Variables
const computerHand = document.querySelector('.computer_hand');
const computerHandImage = document.querySelector('.computer_hand > img');







//Make intro disappear and actual game mode emerge
playBtn.addEventListener('click', function(e) {
    letUsPlay.classList.add('disappear')
    gameBox.classList.add('emerge')
});


//Main game engine function
choose.addEventListener('click', function(e) {

if (e.target.id == 'rock') {
    playerHandImage.src = './img/rock.png'
} if (e.target.id == 'paper') {
    playerHandImage.src = './img/paper.png'
} if (e.target.id == 'scissors') {
    playerHandImage.src = './img/scissors.png'
}
const computerOptions = ['rock','paper','scissors'];
const computerNumber = Math.floor(Math.random() * 3)
const computerChoice = computerOptions[computerNumber];
computerHandImage.src = `./img/${computerChoice}.png`

  if (e.target.id == 'rock' && computerChoice == 'scissors') {
    title.innerText = 'You win!'
    playerCount.innerText++
} if (e.target.id == 'rock' && computerChoice == 'rock') {
    title.innerText = 'It`s a tie!'
} if (e.target.id == 'rock' && computerChoice == 'paper') {
    title.innerText = 'You lose!'
    computerCount.innerText++
} if (e.target.id == 'paper' && computerChoice == 'rock') {
    title.innerText = 'You win!'
    playerCount.innerText++
} if (e.target.id == 'paper' && computerChoice == 'paper') {
    title.innerText = 'It`s a tie!'
} if (e.target.id == 'paper' && computerChoice == 'scissors') {
    title.innerText = 'You lose!'
    computerCount.innerText++
} if (e.target.id == 'scissors' && computerChoice == 'paper') {
    title.innerText = 'You win!'
    playerCount.innerText++
} if (e.target.id == 'scissors' && computerChoice == 'scissors') {
    title.innerText = 'It`s a tie!'
} if (e.target.id == 'scissors' && computerChoice == 'rock') {
    title.innerText = 'You lose!'
    computerCount.innerText++
} 

});