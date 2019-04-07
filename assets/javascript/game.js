var winsCounter = 0;
var lossesCounter = 0;
var guessesCounter = 10;
var userChoise = [];
var lettersArray = ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z"];
var randomLetter = lettersArray[Math.floor(Math.random() * lettersArray.length)];

document.onkeydown = function (event) {
    if (event.key === randomLetter) {
        winsCounter++;
        document.getElementById("winsCounter").textContent = winsCounter;
    }
    else if (event.key !== randomLetter) {
        guessesCounter--;
        document.getElementById("guessesCounter").textContent = guessesCounter;
        if (event.key !== randomLetter && guessesCounter === 0) {
            lossesCounter++;
            document.getElementById("lossesCounter").textContent = lossesCounter;
        }
        if (event.key !== randomLetter && guessesCounter < 1) {
            guessesCounter = 10;
        }
    }
    else { };
    userChoise.push(" " + event.key);
    var letter = document.getElementById("letter");
    letter.textContent = userChoise;
};
