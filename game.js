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

//While Loops (not part of Guessing Game) - Printing each character in a string.
//string we're looping over:
// var str = "hello";
//first character is at index 0
// var count = 0;

// while(count < str.length) {
// 	console.log(str[count]);
// 	count++;
// }

//WHILE LOOPS PROBLEM SET:
//Print all numbers between -10 and 19
var num = -10

while(num >= -10) {
	if(num <= 19) {
		console.log(num);	
	}
	num++;
}
//His code for above:
//var counter = -10;
//while(counter < 20) {
	//console.log(counter);
	//counter++;
//}

//Print all even numbers between 10 and 40
var num = 10

while(num <= 40) {
		console.log(num + 1);	
		num++;
}
//His code for above (two different ways):
//1st way:
//var counter = 10;

//while(counter <= 40) {
	//console.log(counter);
	//counter+=2;
//}
//2nd way:
//var counter = 10;

//while(counter <= 40) {
	//if(counter % 2 === 0) {
		//console.log(counter);
	//}
	//counter+=1;
//}

//Print all odd numbers between 300 and 333

var num = 300

while(num <= 333); {
	console.log(num +3);
	num++;
}
//His code for above:
//var counter = 300;
//while(counter <= 333) {
	//if(counter % 2 !== 0) {
		//console.log(counter);
	//}
	//counter+=1;
//}

//Print all numbers divisible by 5 AND 3 between 5 and 50

var num = 5

while (num = 5); {
	console.log(num ())
}

//His code for above:
//var counter = 5;

//while(counter <= 50) {
	//if(counter % 5 === 0 && counter % 3 === 0) {
		//console.log(counter);
	//}
	//counter+=1;
//}