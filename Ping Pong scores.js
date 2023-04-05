const score1 = document.querySelector("#p1Score");
const score2 = document.querySelector("#p2Score");
const button1 = document.querySelector("#p1Button");
const button2 = document.querySelector("#p2Button");
const resetButton = document.querySelector("#reset"); 
const WinningScoreSelect = document.querySelector("#playTo");   

let p1Score = 0;
let p2Score = 0;
let wininngScore = 3;
let isGameOver = false;

button1.addEventListener('click', function(){
    if(!isGameOver){
    p1Score += 1 ;
    if(p1Score === wininngScore){
        isGameOver = true;
        score1.classList.add('winner');
        score2.classList.add('loser');
        setTimeout(() => {
            alert('congrats ,player 1 wins!!');
        }, 200);
    }
    score1.innerText = p1Score;
    
}
})

button2.addEventListener('click', function(){
    if(!isGameOver){
        p2Score += 1 ;
        if(p2Score === wininngScore){
            isGameOver = true;
            score2.classList.add('winner');
            score1.classList.add('loser');
            setTimeout(() => {
                alert('congrats ,player 2 wins!!');
            }, 200);
        }
        score2.innerText = p2Score;
}
})

WinningScoreSelect.addEventListener('change' , function(){
    wininngScore = parseInt(this.value) ;
    reset() ;
})

 resetButton.addEventListener('click', reset);

 function reset() {
     isGameOver = false;
     p1Score = 0;
     p2Score = 0;
     score1.innerText = 0;
     score2.innerText = 0;
     score1.classList.remove('winner', 'loser');
     score2.classList.remove('loser', 'winner');
 }
 
 

 
