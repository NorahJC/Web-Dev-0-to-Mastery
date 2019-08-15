
// Make a Calculator! using prompt(), and variables, make a program that does the following:
// 1. Prompts the user for first number.
// 2. Stores that first number
// 3. Prompts the user for the second number.
// 4. stores that number and responds with the SUM by using an alert.  

//My ANSWER:

var first = prompt("Enter your first number");
var sec = prompt("Enter you second number");
var sum = Number(first) + Number(sec);
alert("The sum is " + sum);

// BONUS: Make a program that can subtract, multiply, and also divide!

//My ANSWER:

var firstNum = prompt("Type first number ");
var secNum = prompt("Type second number");
var op = prompt("Type the operation you want to perform: +, -, *, /, %");
if (op === "+"){
	var result = Number(firstNum) + Number(secNum);
}
else if (op === "-"){
	var result = Number(firstNum) - Number(secNum);
}
else if (op === "*"){
	var result = Number(firstNum) * Number(secNum);
}
else if (op === "/"){
	var result = Number(firstNum) / Number(secNum);
}
else if (op === "%"){
	var result = Number(firstNum) % Number(secNum);
}
else{
	prompt("You did not type in a valid operation.");
}

alert(result);
console.log(result);
//type in 'result' in console
