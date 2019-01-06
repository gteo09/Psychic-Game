
    //code here to have app generate a random letter from A-Z and assign to variable



//VARIABLES
var guess;
var guessCount = 9;
var attemptedLetters = [];
var winCount = 0;
var guessThisLetter;

//FUNCTIONS


//generates a random number letter from the string alphabet and assigns it to a variable guessthisletter
function randomLetter() { 
var alphabet = "abcdefghijklmnopqrstuvwxyz";
var guessThisLetter = "";
while (guessThisLetter.length < 1) {
  guessThisLetter += alphabet[Math.floor(Math.random() * alphabet.length)]; 
  //placeholder console log for testing
  console.log(guessThisLetter);
}}
randomLetter();

//Listen for keypress
document.onkeydown = function(event){
  
  guess = event.key;
  checkGuess(event.key);
  console.log(guess);
}

//currently code is reducing the guesses remaining regardless of whether input is the correct or incorrect letter

// //check to see if received guess matches the randomly generated guess
function checkGuess(){
  if (guess===guessThisLetter){
    var wins;
    guessCount=9;
    wins = document.getElementById("numberOfWins");
    winCount ++;
    wins.textContent += winCount; //trying to make this code add the value of winCount to the existing text inside the paragraph with element numberOfWins

  }
  
  //code for what happens after guessing the incorrect letter
  else if(guess!=guessThisLetter){
    var losses;
    var incorrect;

    incorrect = document.getElementById("wrongGuesses");
    losses = document.getElementById("guessesLeft");

    losses.textContent = "Guesses left: " + guessCount; 
    guessCount --; 
    attemptedLetters.push(guess); // adds incorrect guess to empty array attempted letters
    incorrect.textContent.innerHTML = attemptedLetters; // updates html to display array with attempted letters
  }

}

//should be code here that would tell the game what to do when guessCount reaches zero and calls the endGame function to restart the game for another round, 

//this function will determine what happens when the user has used all of their guesses
function endGame(){
  if(guessCount = 0){
    guessCount=9;  //resets number of guesses left to starting value
    randomLetter(); //calls function to have another random letter generated
    attemptedLetters=[]; //attempted letters array is cleared 

  }

}

    
    