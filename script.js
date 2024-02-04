'use strict';

const player0El = document.querySelector(".player--0")
const player1El = document.querySelector(".player--1")
const score0El = document.querySelector("#score--0")
const score1El = document.getElementById("score--1")
const current0 = document.querySelector(".current0")
const current1 = document.querySelector(".current1")
const current0EL = document.querySelector("#current--0")
const current1EL = document.querySelector("#current--1")
const diceEl = document.querySelector(".dice")
const btnNew = document.querySelector(".btn--new")
const btnHold = document.querySelector(".btn--hold")
const btnRoll = document.querySelector(".btn--roll")

let score,currentScore,activePlayer,playing;

const init = function(){

    score = [0,0];
    currentScore = 0;
    activePlayer = 0;
    playing = true;

    score0El.textContent = 0;
    score1El.textContent = 0;
    current0EL.textContent = 0;
    current1EL.textContent = 0;

    player0El.classList.remove('player--winner');
    player1El.classList.remove('player--winner');
    player0El.classList.add('player--active')
    player1El.classList.remove('player--active');
    diceEl.classList.add("hidden")
    
}
init();

const switchPlayer = function(){

    document.getElementById(`current--${activePlayer}`).textContent = 0;
    currentScore = 0
    activePlayer = activePlayer === 0 ? 1 : 0;
    player0El.classList.toggle("player--active")
    player1El.classList.toggle("player--active")
    current0.classList.toggle("current--active")
    current1.classList.toggle("current--active")
}


btnRoll.addEventListener('click', function(){

    if(playing){
    const dice = Math.trunc(Math.random() * 6) + 1;

    diceEl.classList.remove("hidden")
    diceEl.src = `dice-${dice}.png`

    if(dice !== 1){
    currentScore += dice;
    document.getElementById(`current--${activePlayer}`).textContent = currentScore;
    } else {    
    switchPlayer();
    }}
})

btnHold.addEventListener('click',function(){

    if(playing){
    score[activePlayer] += currentScore;
    document.getElementById(`score--${activePlayer}`).textContent = score[activePlayer];

    if(score[activePlayer] >= 100){
        playing = false;
        diceEl.classList.add('hidden')
        document.querySelector(`.player--${activePlayer}`).classList.add('player--winner')
        document.querySelector(`.player--${activePlayer}`).classList.remove('player--active')
        document.querySelector(".current-label").textContent = "Victory!!!"
        current0EL.textContent = "🏆"

    }

    else{
    switchPlayer();
    }}
})

btnNew.addEventListener('click',init)
