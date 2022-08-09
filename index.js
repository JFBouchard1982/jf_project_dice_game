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


// buttons
function showResetButton() {
    rollBtn.style.display = "none"
    resetBtn.style.display = "block"
}


rollBtn.addEventListener("click", rollDice) 
 
 function rollDice(){
         const randomNumber = Math.floor(Math.random() * 6) + 1

    if (player1Turn) {
        player1Score += randomNumber
        player1Scoreboard.textContent = player1Score
        player1Dice.textContent = randomNumber
        player1Dice.classList.remove("active")
        player2Dice.classList.add("active")
        message.textContent = "Player 2 Turn"
        P1numberOfTurns += 1
    } else {
        player2Score += randomNumber
        player2Scoreboard.textContent = player2Score
        player2Dice.textContent = randomNumber
        player2Dice.classList.remove("active")
        player1Dice.classList.add("active")
        message.textContent = "Player 1 Turn"
        P2numberOfTurns += 1
    }
    
    if (player1Score >= 20 && P1numberOfTurns === P2numberOfTurns && player2Score < player1Score) {
        message.textContent = "Player 1 Won 🥳"
        p1TotalWins.textContent = player1winScore += 1
        showResetButton()
    }  else if (player2Score >= 20 && player2Score > player1Score) {
        message.textContent = "Player 2 Won 🎉"
        p2TotalWins.textContent = player2winScore += 1
        showResetButton()
    }
    
    if (randomNumber === 1 && player1Turn === true) {
        player1Dice.src = "images/Alea_1.png"
    } else if (randomNumber === 2 && player1Turn === true) {
        player1Dice.src = "images/Alea_2.png"
    } else if (randomNumber === 3 && player1Turn === true) {
        player1Dice.src = "images/Alea_3.png"
    } else if (randomNumber === 4 && player1Turn === true) {
        player1Dice.src = "images/Alea_4.png"
    } else if (randomNumber === 5 && player1Turn === true) {
        player1Dice.src = "images/Alea_5.png"
    } else if (randomNumber === 6 && player1Turn === true) {
        player1Dice.src = "images/Alea_6.png"
    }
    
    if (randomNumber === 1 && player1Turn === false) {
        player2Dice.src = "images/Alea_1.png"
    } else if (randomNumber === 2 && player1Turn === false) {
        player2Dice.src = "images/Alea_2.png"
    } else if (randomNumber === 3 && player1Turn === false) {
        player2Dice.src = "images/Alea_3.png"
    } else if (randomNumber === 4 && player1Turn === false) {
        player2Dice.src = "images/Alea_4.png"
    } else if (randomNumber === 5 && player1Turn === false) {
        player2Dice.src = "images/Alea_5.png"
    } else if (randomNumber === 6 && player1Turn === false) {
        player2Dice.src = "images/Alea_6.png"
    }
    player1Turn = !player1Turn
    removeSuperCow()
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
    player1Dice.textContent = "-"
    player2Dice.textContent = "-"
    message.textContent = "Player 1 Turn"
    resetBtn.style.display = "none"
    rollBtn.style.display = "block"
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
    })

// animation
function superCow() {
    flyingCow.style.display = "block";
    
    let myTimeOut = function(){
        flyingCow.style.opacity = "0%";
    }
    setTimeout(myTimeOut, 1000);
    clearInterval();
    flyingCow.style.opacity = "100%";
}

function removeSuperCow() {
    flyingCow.style.display = "none";
}