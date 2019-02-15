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

//For Loop (not part of Guessing Game) - Printing each character in a string.
var str = "hello";

for(var i = 0; i < str.length; i++) {
	console.log(str[i]);
}

//For Loop that prints every other character in a string.
var str = "ahceclwlxo";

for(var i = 1; i < str.length; i+=2) {
	console.log(str[i]);
}

//WHILE LOOPS PROBLEM SET:
//Print all numbers between -10 and 19
// var num = -10

// while(num >= -10) {
// 	if(num <= 19) {
// 		console.log(num);	
// 	}
// 	num++;
// }
//His code for above:
//var counter = -10;
//while(counter < 20) {
	//console.log(counter);
	//counter++;
//}

//Print all even numbers between 10 and 40
// var num = 10

// while(num <= 40) {
// 		console.log(num + 1);	
// 		num++;
// }
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

// var num = 300

// while(num <= 333); {
// 	console.log(num +3);
// 	num++;
// }
//His code for above:
//var counter = 300;
//while(counter <= 333) {
	//if(counter % 2 !== 0) {
		//console.log(counter);
	//}
	//counter+=1;
//}

//Print all numbers divisible by 5 AND 3 between 5 and 50

// var num = 5

// while (num = 5); {
// 	console.log(num ())
// }

//His code for above:
//var counter = 5;

//while(counter <= 50) {
	//if(counter % 5 === 0 && counter % 3 === 0) {
		//console.log(counter);
	//}
	//counter+=1;
//}

//FOR LOOPS PROBLEM SET:
//Print all numbers between -10 and 19
// for(var counter = -10; counter < 20; counter++) {
// 	console.log(counter);
// }

//His code for Print all numbers between -10 and 19:
// for(var i = -10; i < 20; i++) {
// 	console.log(i);
// }

//Print all even numbers between 10 and 40
// for(var counter = 10; counter <= 40(counter % 2 === ); counter+=1) {
// 	console.log(counter);
// }

//His code for Print all even numbers between 10 and 40
//for(var i = 10; i <= 40; i += 1) {
// 	if(i % 2 === 0) {
// 		console.log(i);
// 	}
// }

//Print all odd numbers between 300 and 333
// for(var counter = 300; counter <= 333(counter % 2 !== 0); counter+=1) {
// 	console.log(counter);
// }

//His code for Print all odd numbers between 300 and 333
//for(var i = 300; i <= 333; i++) {
// 	if(i % 2 !== 0) {
// 		console.log(i);
// 	}
// }

//Print all numbers divisible by 5 AND 3 between 5 and 50
// for(var counter = 5; counter % 5 === 0 && counter % 3 === 0; counter+=1) {
// 	console.log(counter);
// }

//His code for Print all numbers divisible by 5 AND 3 between 5 and 50
// for (var i = 5; i <= 50; i++) {
// 	if(i % 5 === 0 && i % 3 === 0) {
// 	console.log(i);
//  }
// }