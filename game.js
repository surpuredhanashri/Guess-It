const $submitButton = document.getElementById("submit");
const $message = document.getElementById("message");
const $lives = document.getElementById("lives");

var guessNumber = Math.round(Math.random() * 100);
var lives = 10;
var message;

$submitButton.onclick = () => {
    let userInput = document.getElementById("number-input").value;
    lives--;
    console.log(lives)
    if (userInput == guessNumber) {
        location.href = "./win.html";
    } else if (lives == 0) {
        location.href = "./lose.html";
    } else if (userInput > guessNumber) {
        message = `Oops ! Your guess is too high.Your remaining ${lives} lives`;
    } else if (userInput < guessNumber) {
        message = `Oops ! Your guess is too low.Your remaining ${lives} lives`;
    }
    $lives.innerHTML = lives;

    $message.style.display = "inherit";
    $message.innerHTML = message;
}