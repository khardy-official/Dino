const dino = document.querySelector('#dino');
const cactus = document.querySelector('#cactus');
const cactusBig = document.querySelector('#cactus_big');
const score = document.querySelector('.score');
const button = document.querySelector('button');

let a = 1;

button.addEventListener('click', () => {
    

    cactus.style.animation = "cactusMove 2.4s infinite linear";
    cactusBig.style.animation = "cactusMove 3.2s infinite linear";

    setInterval(() => {
        score.textContent = a++;
    }, 2400);
    
    setInterval(() => {
        score.textContent = a++;
    }, 3200);
})

document.addEventListener('keydown', () => {
    jump();
});





function jump() {

    if (dino.classList !== 'jump') {
        dino.classList.add('jump');
    }
    setTimeout(() => {
        dino.classList.remove('jump');
    }, 500);
}

let isAlive = setInterval(() => {
    let dinoTop = parseInt(window.getComputedStyle(dino).getPropertyValue('top'));
    let cactusLeft = parseInt(window.getComputedStyle(cactus).getPropertyValue('left'));
    let cactusLeftBig = parseInt(window.getComputedStyle(cactusBig).getPropertyValue('left'));

    if (cactusLeft < 50 && cactusLeft > 0 && dinoTop >= 140) {
        alert(`GAME OVER!!! Your score: ${a - 1}`);
        location.reload();
    }
    if (cactusLeftBig < 50 && cactusLeftBig > 0 && dinoTop >= 140) {
        alert(`GAME OVER!!! Your score: ${a - 1}`);
        location.reload();
    }
}, 10);