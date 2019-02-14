//create secretNumber
var secretNumber = 4;

//ask user for guess
// var guess = Number(prompt("Guess a number"));
var stringGuess = prompt("Guess a number");
var guess = Number(stringGuess);


//check if guess is correct. Number(guess) is telling JS to turn guess, which is a string, into a number so it will be identical to secretNumber, which is a number. You can type typeof followed by the var into the console log to see if something is a string, number, etc. Ex. typing typeof guess tells us that guess is a string and typing typeof secretNumber tells us that secretNumber is a number. 
// if(Number(guess) === secretNumber) {
// 	alert("YOU GOT IT RIGHT!");
// }

//Instead of having JS turn guess into a number in line 9, we can do it earlier, in line 5 or in line 7.
if(guess === secretNumber) {
	alert("YOU GOT IT RIGHT!");
}

//check if guess is higher
else if(Number(guess) > secretNumber) {
	alert("Too high. Guess again!");
}

//otherwise, check if lower
else {
	alert("Too low. Guess again!");
}