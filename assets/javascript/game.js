var wins = 0;
var losses = 0;
var guessesLeft = 9;
var yourGuess = []; 
var computerChoice;



//game starter
theGame();


function theGame() {
	//letter randomizer
	var alphabet = "abcdefghijklmnopqrstuvwxyz";
	var randomLetter = alphabet[Math.floor(Math.random() * 26)];
	var computerChoice = randomLetter;

	console.log(computerChoice); 
		
	checkIfCorrect();

	function checkIfCorrect() {

		document.onkeyup = function(event) {

			
			var userChoice = String.fromCharCode(event.keyCode).toLowerCase();


			
			if (event.keyCode < 65 || event.keyCode > 90) {
				alert("Invalid Entry");

		
			} else if (yourGuess.indexOf(userChoice) >=0) {
				alert("You already guessed that!");

			//if the user guesses correctly
			} else if (userChoice === computerChoice) {
				console.log("You win."); //test
				
				

				resetGame();


			//if the user guesses wrong...
			} else {
				guessesLeft = guessesLeft - 1;
				
				document.getElementById("guesses-left").innerHTML = guessesLeft; 
				yourGuess.push(userChoice); //append user's choice to array yourGuess

				console.log("Your guesses so far: " + yourGuess); //test

				document.getElementById("your-guesses").innerHTML = yourGuess;

				console.log("Guesses Left: " + guessesLeft); //test

				noGuessesLeft();
			}
		}
	}

	function resetGame() {
		guessesLeft = 9; //reset variable
		yourGuess = [];  //reset array so it's empty
		document.getElementById("guesses-left").innerHTML = guessesLeft;  //reset display on screen
		document.getElementById("your-guesses").innerHTML = yourGuess;    //reset display on screen
		theGame(); //restart the game with new computerChoice.

	}

	function noGuessesLeft() {
		if (guessesLeft === 0) {
			console.log("YOU LOSE."); //test
			alert("YOU LOSE!");
			losses = losses + 1
			document.getElementById("your-losses").innerHTML = losses;

			resetGame();

		} else {
			console.log("Incorrect. Try again"); //test
			checkIfCorrect();
		}

	}

}



