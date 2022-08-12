// variables for the game state
let P1numberOfTurns = 0
let P2numberOfTurns = 0
let player1Score = 0
let player2Score = 0
let player1winScore = 0
let player2winScore = 0
let player1Turn = true

// variables to store references to the necessary DOM nodes
const player1Dice = document.getElementById("player1Dice")
const player2Dice = document.getElementById("player2Dice")
const player1Scoreboard = document.getElementById("player1Scoreboard")
const player2Scoreboard = document.getElementById("player2Scoreboard")
const message = document.getElementById("message")
const rollBtn = document.getElementById("rollBtn")
const resetBtn = document.getElementById("resetBtn")
let p1TotalWins = document.getElementById("player1Wins")
let p2TotalWins = document.getElementById("player2Wins")
const resetWins = document.getElementById("resetWinsBtn")
const flyingCow = document.getElementById("flying-cow")
const doubleBoxContainer = document.querySelector(".double-or-nothing")
const x2Message = document.querySelector("#x2-message")
const superCowAudio = new Audio("soundtrack/superCow.mp3")
const rollDiceSound = new Audio("soundtrack/rolldice.mp3")
const muteBtn = document.getElementById("mutebtn")



// buttons
function showResetButton() {
    rollBtn.style.display = "none";
    resetBtn.style.display = "block";
}

rollBtn.addEventListener("click", rollDice) 

function rollDice(){     
    rollDiceEngine()
}   

function doubleOrNothing(){
    const randomNumber = Math.floor(Math.random() * 6) + 1
    let p1Double = Math.floor(Math.random() * 3) + 1
    let p2Double = Math.floor(Math.random() * 3) + 1 
}
    
resetBtn.addEventListener("click", function(){
    reset()
})

function reset() {
    player1Score = 0
    player2Score = 0
    player1Turn = true
    player1Scoreboard.textContent = 0
    player2Scoreboard.textContent = 0
    message.textContent = "Player 1 Turn"
    resetBtn.style.display = "none"
    rollBtn.style.display = "block"
    x2Message.textContent = ""
    player2Dice.classList.remove("active")
    player1Dice.classList.add("active")
    player1Dice.src = "images/Alea_0.png"
    player2Dice.src = "images/Alea_0.png"
}

resetWins.addEventListener("click", function(){
    superCow()
    reset()
    p1TotalWins.textContent = 0
    p2TotalWins.textContent = 0
    player1winScore = 0
    player2winScore = 0
})
muteBtn.addEventListener("click", mute);

function mute() {
    if(superCowAudio.muted) {
        superCowAudio.muted = false;
        rollDiceSound.muted = false;
        muteBtn.style.background = "url(images/volume20px.png) no-repeat";
    }else {
        superCowAudio.muted = true;
        rollDiceSound.muted = true;
        muteBtn.style.background = "url(images/mute20px.png) no-repeat";
}}
// animation
function superCow() {
    flyingCow.style.display = "block";    
    let myTimeOut = function(){
        flyingCow.style.opacity = "0%";
    }
    setTimeout(myTimeOut, 2450);
    clearInterval();
    flyingCow.style.opacity = "100%";
    superCowAudio.play();
}
function removeSuperCow() {
    flyingCow.style.display = "none";
}

// roll dice engine
function rollDiceEngine(){
    rollDiceSound.play();
    const randomNumber = Math.floor(Math.random() * 6) + 1 
    const wantsDoublePoints = doubleBoxContainer.children[0].checked
    const doubleOrNothingArr = [0, 2]
    const zeroOrOne = Math.floor(Math.random() * 2)
    const diceValue = randomNumber * (wantsDoublePoints ? doubleOrNothingArr[zeroOrOne] : 1)
      
    if(player1Turn) {
        player1Score += diceValue
        player1Scoreboard.textContent = player1Score
        player1Dice.classList.remove("active")
        player2Dice.classList.add("active")
        message.textContent = "Player 2 Turn"
        P1numberOfTurns += 1
    }   else {
        player2Score += diceValue
        player2Scoreboard.textContent = player2Score
        player2Dice.classList.remove("active")
        player1Dice.classList.add("active")
        message.textContent = "Player 1 Turn"
        P2numberOfTurns += 1
    }   if (wantsDoublePoints && diceValue && player1Turn) {
        x2Message.textContent = `Congrats Player one. You have obtained double points of ${diceValue}`
        
    }   else if (wantsDoublePoints && !diceValue && player1Turn) {
        x2Message.textContent = `Player one, you have failed to get any points`
    }
    else if(wantsDoublePoints && diceValue && !player1Turn) {
        x2Message.textContent = `Congrats Player two. You have obtained double points of ${diceValue}`
    }
    else if(wantsDoublePoints && !diceValue && !player1Turn) {
        x2Message.textContent = `Player two, you have failed to get any points`
    }
    else if(x2Message.textContent) {
        x2Message.textContent = ""
    }
    if (player1Score >= 20 && P1numberOfTurns === P2numberOfTurns && player2Score < player1Score) {
        message.textContent = "Player 1 Won 🥳"
        p1TotalWins.textContent = player1winScore += 1
        showResetButton()
    }   else if (player2Score >= 20 && player2Score > player1Score) {
        message.textContent = "Player 2 Won 🎉"
        p2TotalWins.textContent = player2winScore += 1      
        showResetButton()
    }    
    if (randomNumber === 1 && player1Turn) {
        player1Dice.src = "images/Alea_1.png"
    }   else if (randomNumber === 2 && player1Turn) {
        player1Dice.src = "images/Alea_2.png"
    }   else if (randomNumber === 3 && player1Turn) {
        player1Dice.src = "images/Alea_3.png"
    }   else if (randomNumber === 4 && player1Turn) {
        player1Dice.src = "images/Alea_4.png"
    }   else if (randomNumber === 5 && player1Turn) {
        player1Dice.src = "images/Alea_5.png"
    }   else if (randomNumber === 6 && player1Turn) {
        player1Dice.src = "images/Alea_6.png"
    }    
    if (randomNumber === 1 && !player1Turn) {
        player2Dice.src = "images/Alea_1.png"
    }   else if (randomNumber === 2 && !player1Turn) {
        player2Dice.src = "images/Alea_2.png"
    }   else if (randomNumber === 3 && !player1Turn) {
        player2Dice.src = "images/Alea_3.png"
    }   else if (randomNumber === 4 && !player1Turn) {
        player2Dice.src = "images/Alea_4.png"
    }   else if (randomNumber === 5 && !player1Turn) {
        player2Dice.src = "images/Alea_5.png"
    }   else if (randomNumber === 6 && !player1Turn) {
        player2Dice.src = "images/Alea_6.png"
    }
    player1Turn = !player1Turn
    removeSuperCow()
}