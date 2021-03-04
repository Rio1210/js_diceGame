'use strict';


const playerScore1 = document.getElementById('score--0');
const playerScore2 = document.getElementById('score--1');
const btnRoll = document.querySelector('.btn--roll');
const btnHl = document.querySelector('.btn--hold');
const curPlayer1 = document.getElementById('current--0');
const curPlayer2 = document.getElementById('current--1');

const reset = document.querySelector('.btn--new');  

const diceEl = document.querySelector('.dice');

let arr = [0,0];

let flag = true;

playerScore1.textContent = 0;
playerScore2.textContent = 0;
let num = 0;
let cur = 0;


function init() {
    
    arr = [0, 0];

    flag = true;

    playerScore1.textContent = 0;
    playerScore2.textContent = 0;
    num = 0;
    cur = 0;
    curPlayer1.textContent = arr[0];
    curPlayer2.textContent = arr[1];
    diceEl.src = 'dice-5.png';

    
}
btnRoll.addEventListener('click', function () {
    
    
    
    let dice = Math.floor(Math.random() * 6) + 1;

    
    diceEl.src = 'dice-'+ dice + '.png';
    
    if (arr[0] >= 20) {
        console.log("player 1 win!");

    } else if (arr[1] >= 20) {
        console.log("player 2 win!");
    }
    
   
    if(flag) {
        curPlayer1.textContent = arr[0];
      //  document.getElementById(`score--${num}`).textContent = dice;;
        playerScore1.textContent = dice;
      //  cur += dice;
      //  document.getElementById(`current--${num}`).textContent = cur;
        arr[0] += dice;
        flag = dice === 1? false:true;

    }
    
    else {
        curPlayer2.textContent = arr[1];
        playerScore2.textContent = dice;
        arr[1] += dice;
        flag = dice === 1 ? true : false;
            
    }


})

btnHl.addEventListener('click', function () {
    
    let num = flag ? 0 : 1;
    document.getElementById(`current--${num}`).textContent = arr[num];;
      
        flag = !flag;// false : true;

})


reset.addEventListener('click', init);



