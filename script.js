var scores, roundScore, randomNum, activePlayer, winner;

scores = [0,0];
roundScore = 0;
activePlayer = 1;
var player1 = document.querySelector('.player--1');
var player2 = document.querySelector('.player--2');
winner = 100;

document.querySelector('#roll').addEventListener('click', function(){
    randomNum = Math.floor(Math.random() * 6) + 1;
    roundScore += randomNum;
    var dice = document.querySelector('.dice');
    

    if(randomNum == 1 && activePlayer == 1) {
        roundScore = 0;
        document.querySelector('#current'+activePlayer).textContent = roundScore;
        dice.src = 'dice-'+randomNum + '.png';
        activePlayer = 2;
        player2.classList.toggle('player--active');
        player1.classList.toggle('player--active');
    }
    else if(randomNum == 1 && activePlayer == 2) {
        roundScore = 0;
        document.querySelector('#current'+activePlayer).textContent = roundScore;
        dice.src = 'dice-'+randomNum + '.png';
        activePlayer = 1;
        player1.classList.toggle('player--active');
        player2.classList.toggle('player--active');
    }
    else{
        document.querySelector('#current'+activePlayer).textContent = roundScore;
        dice.src = 'dice-'+randomNum + '.png';
    }
});

document.querySelector('#hold').addEventListener('click', function(){
    var result = document.querySelector('#current'+activePlayer).textContent;
    scores[activePlayer-1] += parseInt(result, 10);
    document.querySelector('#score'+activePlayer).textContent = scores[activePlayer-1];
    document.querySelector('#current'+activePlayer).textContent = 0;
    roundScore = 0;
    
    if(scores[activePlayer-1] >= winner){
        document.querySelector('#name'+activePlayer).textContent = "Winner!";
        document.querySelector('#roll').style.visibility = "hidden";
    }

    activePlayer = activePlayer == 1 ? 2 : 1;
    player1.classList.toggle('player--active');
    player2.classList.toggle('player--active');

});

function restartGame(){
    document.querySelector('#name1').textContent = "Player 1"
    document.querySelector('#name2').textContent = "Player 2"
    document.querySelector('#current1').textContent = 0;
    document.querySelector('#current2').textContent = 0;
    document.querySelector('#score1').textContent = 0;
    document.querySelector('#score2').textContent = 0;
    document.querySelector('#roll').style.visibility = "visible";
    roundScore = 0;
    scores = [0,0];
}

document.querySelector('#restart').addEventListener('click', restartGame);

document.querySelector('#new-score').addEventListener('keyup', function(){
    var x = document.querySelector('#new-score').value;
    winner = parseInt(x,10);
})
