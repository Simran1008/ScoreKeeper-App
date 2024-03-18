const h1 = document.querySelector('h1');
const newScore = document.createElement('h1');
const btn1 = document.querySelector('#player1');
const btn2 = document.querySelector('#player2');
const h2 = document.querySelector('h2');
const res = document.createElement('h2');

let max = 5;
let i=0;
let j=0;



newScore.innerText = `${i} to ${j}`;
h1.append(newScore);


btn1.addEventListener('click', function(){
    i+=1;
    newScore.innerText = `${i} to ${j}`;
    h1.append(newScore);
    if (i===5){
        res.innerText = "Game Over! Player 1 wins!!!";
        h2.append(res);
    }
})

btn2.addEventListener('click', function(){
    j+=1;
    newScore.innerText = `${i} to ${j}`;
    h1.append(newScore);
    if (j===5){
        res.innerText = "Game Over! Player 2 wins!!!";
        h2.append(res);
    }
})


