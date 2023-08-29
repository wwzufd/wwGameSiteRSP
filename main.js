const rockImgHtml = '<img src="img/rock.svg" alt="Rock" id="img-block1">';
const paperImgHtml = '<img src="img/paper.svg" alt="Paper" id="img-block2">';
const scissorsImgHtml = '<img src="img/scissors.svg" alt="Scissors" id="img-block3">';

const rpsImgHtml = [rockImgHtml, paperImgHtml, scissorsImgHtml]
const randomIndex = Math.floor(Math.random() * rpsImgHtml.length);
const randomRpsImgHtml = rpsImgHtml[randomIndex];

function randomRpsImg() {
    const randomI = Math.floor(Math.random() * rpsImgHtml.length);
    return rpsImgHtml[randomI];
}

function userChoice(choice) {
    const choices = {
        'rock-button': rockImgHtml,
        'paper-button': paperImgHtml,
        'scissors-button': scissorsImgHtml
    };
    
    document.getElementById('choice-block').style.display = 'none';
    document.getElementById('random-choice-block').style.display = 'block';

    document.getElementById('user-choice').innerHTML = choices[choice.id];

    startAnimation(choice);
}

let intervalId;
let animationCount = 0;
const randomInt = Math.floor(Math.random() * 20) + 5;

function startAnimation(choice) {
    intervalId = setInterval(function() {
        const totalRandomRps = randomRpsImg();
        document.getElementById('program-choice').innerHTML = totalRandomRps;
        animationCount++;

        console.log(randomInt);
        if (animationCount === randomInt) {
            clearInterval(intervalId);
            totalGame(choice, totalRandomRps);
        }
    }, 100);
}

function totalGame(choice, randomRpsImgHtml) {
    const outcomes = {
        '<img src="img/rock.svg" alt="Rock" id="img-block1">': { winsAgainst: '<img src="img/scissors.svg" alt="Scissors" id="img-block3">', result: 'Win!' },
        '<img src="img/paper.svg" alt="Paper" id="img-block2">': { winsAgainst: '<img src="img/rock.svg" alt="Rock" id="img-block1">', result: 'Win!' },
        '<img src="img/scissors.svg" alt="Scissors" id="img-block3">': { winsAgainst: '<img src="img/paper.svg" alt="Paper" id="img-block2">', result: 'Win!' }
    };

    if (choice.innerHTML.trim() === randomRpsImgHtml) {
        document.getElementById('total-versus').innerText = "Draw!";
    } else if (outcomes[choice.innerHTML.trim()].winsAgainst === randomRpsImgHtml) {
        document.getElementById('total-versus').innerText = "Win!";
    } else {
        document.getElementById('total-versus').innerText = "Losing";
    }
    document.getElementById('again-button').style.display = 'block';
}

function restartGame() {
    location.reload();
}