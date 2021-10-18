'use strict';

const player0El = document.querySelector('.player--0');
const player1El = document.querySelector('.player--1');

let activePlayer, playing;

const switchPlayer = function () {
    document.getElementById(`current--${activePlayer}`).textContent = 0;
    activePlayer = activePlayer === 0 ? 1 : 0;
    player0El.classList.toggle('player--active');
    player1El.classList.toggle('player--active');
  };