/*
GAME RULES:

- The game has 2 players, playing in rounds
- In each turn, a player rolls a dice as many times as he whishes. Each result get added to his ROUND score
- BUT, if the player rolls a 1, all his ROUND score gets lost. After that, it's the next player's turn
- The player can choose to 'Hold', which means that his ROUND score gets added to his GLBAL score. After that, it's the next player's turn
- The first player to reach 100 points on GLOBAL score wins the game

*/

var scores, roundScore, activePlayer, gamePlaying;
init();
//THIS IS THE START BUT IS DELETED AND REPLACED WITH init() LATER ON TO MOVE IT TO A FUNCTION FOR DRY REASONS
// scores = [0,0];
// roundScore = 0;
// activePlayer = 0;

// HIDE HE DICE
// document.querySelector('.dice').style.display = 'none';

// // UPDATE SCORES
// document.getElementById('score-0').textContent = '0';
// document.getElementById('score-1').textContent = '0';
// document.getElementById('current-0').textContent = '0';
// document.getElementById('current-1').textContent = '0';


//**************************************************************************************** */







// CHANGE THE DICE IMAGE WHEN CLICK ON DICE ROLL
document.querySelector('.btn-roll').addEventListener('click', function btn(){
    
    //1. random number
    dice = Math.floor(Math.random() * 6) + 1;

    //2. Display the result
    var diceDOM = document.querySelector('.dice');
    diceDOM.style.display = 'block';
    diceDOM.src = 'dice-' + dice + '.png';

    //3. Update the round score IF the rolled number was NOT a 1
    if (dice !== 1) {
        roundScore += dice;
        document.querySelector('#current-' + activePlayer).textContent = roundScore;
    } else {
        //NEXT PLAYER
        nextPlayer();
    }
});




document.querySelector('.btn-hold').addEventListener('click', function() {
    //ADDING THE CURRENT SCORE TO THE GLOBAL SCORE
    scores[activePlayer] += roundScore;


    // UPDATE THE UI
    document.querySelector('#score-' + activePlayer).textContent = scores[activePlayer];

    //CHECK IF PLAYER WINS THE GAME

    if (scores[activePlayer] >= 100 ) {
        document.querySelector('#name-' + activePlayer).textContent = 'Winner!';
        document.querySelector('.dice').style.display = 'none';
        document.querySelector('.player-' + activePlayer + '-panel').classList.add('winner');
        document.querySelector('.player-' + activePlayer + '-panel').classList.remove('active');

    } else {
        //NEXT PLAYER
        nextPlayer();
    }

});




//**************************************************************************************** */




// START THE NEW GAME
document.querySelector('.btn-new').addEventListener('click', init);
    //RESET SCORES
    //ACTIVE PLAYER BACK TO ZERO
    // ROUND SCORES BACK TO ZERO






//**************************************************************************************** */

//INIT FUNCTION TO RESET GAME



function init() {
scores = [0,0];
roundScore = 0;
activePlayer = 0;

// HIDE HE DICE
document.querySelector('.dice').style.display = 'none';

// UPDATE SCORES
document.getElementById('score-0').textContent = '0';
document.getElementById('score-1').textContent = '0';
document.getElementById('current-0').textContent = '0';
document.getElementById('current-1').textContent = '0';
document.getElementById('name-0').textContent = 'Player 1';
document.getElementById('name-1').textContent = 'Player 2';
document.querySelector('.player-0-panel').classList.remove('winner');
document.querySelector('.player-1-panel').classList.remove('winner');
document.querySelector('.player-1-panel').classList.remove('active');
document.querySelector('.player-0-panel').classList.add('active');



}




//**************************************************************************************** */


//ADDING FUNCTION SO THAT I DON'T NEED ALL THIS CODE TWICE (DRY) 

function nextPlayer() {
activePlayer === 0 ? activePlayer = 1 : activePlayer = 0
        //USED TERNARY FORMAT ABOVE BUT SAME AS BELOW
        // if(activePlayer === 0) {
        //     activePlayer = 1;
        // } else {
        //     activePlayer = 0;
        // }
        roundScore = 0;

        document.getElementById('current-0').textContent = '0';
        document.getElementById('current-1').textContent = '0';

        document.querySelector('.player-0-panel').classList.toggle('active');
        document.querySelector('.player-1-panel').classList.toggle('active');

        //THIS JUST SHOWS ADDING AND REMOVING BUT WE WANT TO TOGGLE AS ABOVE SO IT GOES BACK
        // document.querySelector('.player-0-panel').classList.remove('active');
        // document.querySelector('.player-1-panel').classList.add('active');

        //REMOVE THE IMAGE OF DICE WHEN PLAYER SWITCHES 
        document.querySelector('.dice').style.display = 'none';

}









// document.querySelector('#current-' + activePlayer).textContent = dice;
// document.querySelector('#current-' + activePlayer).innerHTML = '<em>' + dice + '</em>';
// var x = document.querySelector('#score-0').textContent;