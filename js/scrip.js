const mario = document.querySelector('.mario');
const pipe = document.querySelector('.pipe');



const jump = () => {
    mario.classList.add('jump');

    setTimeout(() => { 
        mario.classList.remove('jump');
    }, 500);
}

const loop = setInterval(() => {

    const pipePosition = pipe.offsetLeft;
    const marioPosition = +window.getComputedStyle(mario).bottom.replace('px', '');

    console.log(marioPosition);

    if (pipePosition <= 120 && pipePosition > 0 && marioPosition < 80) {

        pipe.style.animation = 'none';
        pipe.style.left = `${pipePosition}px`;

        mario.style.animation = 'none';
        mario.style.bottom = `${marioPosition}px`;

        mario.src = 'imagens/game-over.png';
        mario.style.width = '75px'
        mario.style.marginLeft = '50px'

        clearInterval(loop);

    }

}, 10);

document.addEventListener('keydown', jump)

let score = document.querySelector('#score')
let gameOver = document.querySelector('#gameOver')

//declaraçao variavel 
let interval = null;
let playerScore = 0;

//funçao
let scoreCounter = ()=> {
    playerScore++;
    score.innerHTML = `Score <b>${playerScore}</b>`;
}

interval = setInterval(scoreCounter, 200);


window.addEventListener('keydown', (start)=> {
    console.log(start);
    if(start.code == 'Space')
     {
         gameOver.style.display = 'none';
         pipe.classList.add('pipeActive');
         clouds.firstElementChild.style.animation = 'clouds-animation 20s linear infinite';
        //score
         let playerScore = 0;
        }
})