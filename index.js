
var randomNumber1;
var randomNumber2;

function rollEm1() {
    randomNumber1 = Math.ceil(Math.random() * 6);
    return randomNumber1;
}

function rollEm2() {
    randomNumber2 = Math.floor(1 + Math.random() * 6);
    return randomNumber2;
}

/* One function to conquer them all
function rollEm(player) {
    var randomNumber = Math.ceil(Math.random() * 6);
    if(player === 1){
        randomNumber1 = randomNumber;
    }else if (player === 2){
        randomNumber2 = randomNumber;
    }else {
        return; // Bug sign: No image!
    }
    return "images/dice" + randomNumber + ".png";
}
*/

function playDice(){
    // Player 1 go!
    document.querySelector(".img1").setAttribute("src", "images/dice" + rollEm1() + ".png");
    // Player 2 go!
    document.querySelector(".img2").setAttribute("src", "images/dice" + rollEm2() + ".png");
    // Ho wan?
    if(randomNumber1 > randomNumber2){
        document.querySelector("h1").textContent = "🚩 Player 1 Wan!";
    }
    else if(randomNumber1 < randomNumber2){
        document.querySelector("h1").textContent = "Player 2 Wan! 🚩";
    }
    else{ //randomNumber1 === randomNumber2 
        document.querySelector("h1").textContent = "Nowan wan 😔...";
    }
}

playDice();