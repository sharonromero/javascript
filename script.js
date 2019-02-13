// This asks the user for his name and stores it in a variable, then alerts nice to meet you and the userName in a pop-up box, then it prints the great to meet you message plus the userName in the console.  
// var userName = prompt("What is your name?");
// alert("Nice to meet you, " + userName);
// console.log("Also great to meet you, " + userName);


// The two script examples are the same. Example 2 just shows a less cluttered way because an extra variable has been created that takes the first name and last name as the fullName and then tells the console to log firstName + lastName; it just says to console log the fullName. They both work exactly the same. 
// Example 1
// var firstName = prompt("What is your first name?");
// var lastName = prompt("What is your last name?");
// var age = prompt("What is your age?");
// console.log("Your full name is " + firstName + " " + lastName);
// console.log("You are " + age + " years old");

// Example 2
// var firstName = prompt("What is your first name?");
// var lastName = prompt("What is your last name?");
// var age = prompt("What is your age?");

// var fullName = firstName + " " + lastName;

// console.log("Your full name is " + fullName);
// console.log("You are " + age + " years old");

// Age Calculator -- This asks the user how old they are then displays a pop-up box that says how many days the person has been alive.
// var age = prompt("How old are you?");
// alert(age + " years is roughly " + (age * 365) + " days");

// His code for Age Calculator
var age = prompt("How old are you?")
var days = age * 365;
alert(age + " years is roughly " + days + " days");

// This is his code for the Age Calculator that takes leap years into account
// var age = prompt("How old are you?")
// var days = age * 365.25;
// alert(age + " years is roughly " + days + " days");