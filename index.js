let homeScore = 0
let awayScore = 0

document.getElementById("home-score").textContent = homeScore
document.getElementById("away-score").textContent = awayScore

function home1() {
    homeScore += 1
    document.getElementById("home-score").textContent = homeScore
}

function home2() {
    homeScore += 2
    document.getElementById("home-score").textContent = homeScore
}
 function home3() {
    homeScore += 3
    document.getElementById("home-score").textContent = homeScore
 }

 function away1() {
    awayScore += 1
    document.getElementById("away-score").textContent = awayScore
 }

 function away2() {
    awayScore += 2
    document.getElementById("away-score").textContent = awayScore
 }

 function away3() {
    awayScore +=3
    document.getElementById("away-score").textContent = awayScore
 }

 function newGame() {
    homeScore = 0
    awayScore = 0
    document.getElementById("home-score").textContent = homeScore
    document.getElementById("away-score").textContent = awayScore
 }