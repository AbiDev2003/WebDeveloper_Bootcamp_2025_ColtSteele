// const p1button = document.querySelector('#p1button')
// const p2button = document.querySelector('#p2button')
// const scorePlayer1 = document.querySelector('#scoreplayer1')
// const scorePlayer2 = document.querySelector('#scoreplayer2')
// const resetButtton = document.querySelector('#resetButton')
// const winningScoreSelect = document.querySelector('#playto')


// let p1Score = 0;
// let p2Score = 0;
// let winningScore = 3; //we gotta take user input, so we gotta add a select drop down. 
// let isGameOver = false; 

// p1button.addEventListener('click', function() {
//     if(!isGameOver){
//         p1Score += 1
//         if(p1Score === winningScore){
//             isGameOver = true; 
//             // also we will change it to green color
//             scorePlayer1.classList.add('has-text-success')
//             // at the same time make p2 color red
//             scorePlayer2.classList.add('has-text-danger')
//             p1button.disabled = true;
//             p2button.disabled = true;
//         }
//         scorePlayer1.textContent = p1Score;
//     }
// })
// p2button.addEventListener('click', function() {
//     if(!isGameOver){
//         p2Score += 1
//         if(p2Score === winningScore){
//             isGameOver = true; 
//             scorePlayer2.classList.add('has-text-success')
//             scorePlayer1.classList.add('has-text-danger')
//             p1button.disabled = true;
//             p2button.disabled = true;
//         }
//         scorePlayer2.textContent = p2Score;
//     }
// })
// winningScoreSelect.addEventListener('change', function() {
//     // first we will change the winningScore value tonthe selected value 
//     winningScore = parseInt(this.value);  
//     reset()
// })

// resetButtton.addEventListener('click', reset)

// function reset() {
//     // change all the things whateer has manipulated before. 
//     isGameOver = false; 
//     // winningScore = 3 
//     p1Score = 0; //set player 1 score to 0. 
//     p2Score = 0; //set player 2 score to 0. 
//     scorePlayer1.textContent = p1Score;
//     scorePlayer2.textContent = p2Score;
//     // lets remove the color code of win and lose also
//     scorePlayer2.classList.remove('has-text-success', 'has-text-danger')
//     scorePlayer1.classList.remove('has-text-success', 'has-text-danger')
//     p1button.disabled = false;
//     p2button.disabled = false;
// }



// the above style of writing javascript is good, but we can see a simliar pattern is getting repeated for p1 and p2 addEventListener. So below we can write another version as well. Also some more cool features are added



// object info for p1 and p2
const p1 = {
    score: 0, 
    display: document.querySelector('#scoreplayer1'), 
    button: document.querySelector('#p1button')
}
const p2 = {
    score: 0, 
    display: document.querySelector('#scoreplayer2'), 
    button: document.querySelector('#p2button')
}

const resetButtton = document.querySelector('#resetButton')
const winningScoreSelect = document.querySelector('#playto')

let winningScore = 3; 
isGameOver = false; 



function updateScore(player, opponent){
    // we wiil play the game unless game is not over, and then when game will be equal to winning score we will say gameOver. 
    if(!isGameOver){
        player.score += 1; 
        if(player.score === winningScore){
            isGameOver = true; 
            // also we will change colors of the displays at the very moment
            player.display.classList.add('has-text-success')
            opponent.display.classList.add('has-text-danger')
            // disable the buttons at the very moment
            player.button.disabled = true; 
            opponent.button.disabled = true; 
            celebrateWin(); // 🎉 Fireworks here
            showWinnerBanner(); //congratulatins banner
            playClapSound(); 
        }
        // print the updated score
        player.display.textContent = player.score; 
    }
}

winningScoreSelect.addEventListener('change', function() {
    // chnage the winning score value to the selected value. 
    winningScore = parseInt(this.value); 
    reset(false); //the select drop down is not gonna change 
})
resetButtton.addEventListener('click', reset)


function reset(shouldResetSelect = true) {
    isGameOver = false; 
    // winningScore = 3;
    // immeddiate update the display value to default value 0
    // just use a loop iterating from 1 to 2. haha . interseting
    for(let p of [p1, p2]){
        p.score = 0
        p.display.textContent =p.score
        p.display.classList.remove('has-text-success', 'has-text-danger')
        p.button.disabled = false;
    }
    // only the line below does not run in winningScoreSelect.addEventListener, cause we have set shouldResetselect false inside that. 
    // so it is only going to run for resetButton. Select drop down is gonna change. 
    if(shouldResetSelect)  {
         winningScoreSelect.value = 3;
    } 
    setTimeout(() => {
        document.getElementById('winnerBanner').style.display = 'none';
    }); // hide immediately
    stopClapSound(); 
    // p1.score = 0
    // p2.score = 0
    // p1.display.textContent = p1.score
    // p2.display.textContent = p2.score
    // p1.display.classList.remove('has-text-success', 'has-text-danger')
    // p2.display.classList.remove('has-text-danger', 'has-text-success')
    // p1.button.disabled = false;
    // p2.button.disabled = false;
}

// firework animation for winning celebration. 
function celebrateWin() {
    confetti({
        particleCount: 150,
        spread: 100,
        origin: { y: 0.6 }
    });
}

// congratulations banner show
function showWinnerBanner() {
    document.getElementById('winnerBanner').style.display = 'block';
    // hide after 5 seconds. 
    setTimeout(() => {
        document.getElementById('winnerBanner').style.display = 'none';
    }, 5000); // hide after 5 sec
}

// clapping audio when winning
function playClapSound() {
    const clapAudio = document.getElementById('clapSound');
    clapAudio.currentTime = 0; // Rewind to start
    clapAudio.play();
}

// stop clap sound (while cliking on reset)
function stopClapSound() {
    const clapAudio = document.getElementById('clapSound');
    clapAudio.pause();
    clapAudio.currentTime = 0;
}

p1.button.addEventListener('click', function() {
    updateScore(p1, p2); 
})
p2.button.addEventListener('click', function() {
    updateScore(p2, p1); 
})