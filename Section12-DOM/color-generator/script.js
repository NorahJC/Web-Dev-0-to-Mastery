var css = document.querySelector("h3");
var color1 = document.querySelector(".color1");
var color2 = document.querySelector(".color2");
var button = document.getElementById("btn");
var body = document.getElementById("gradient");

// console.log(css); to make sure you are actually selecting it
// console.log(color1);
// console.log(color2);
// color1.addEventListener("input", function(){
// 	console.log(color1.value);
// })
// color2.addEventListener("input", function(){
// 	console.log(color2.value);
// })

function setGradient() {
	body.style.background = 
	"linear-gradient(to right, " 
	+ color1.value 
	+ ", " 
	+ color2.value 
	+ ")";

	css.textContent = body.style.background + ";";

}

color1.addEventListener("input", setGradient);

color2.addEventListener("input", setGradient);

// 3. BONUS: Add a random button which generates two random numbers for the colour inputs.

// function getRandomColor(){
// 	var newColor = Math.floor(Math.random() * 16777216).toString(16);
// 	var symbol = "#";
// 	var hex = symbol + newColor;
// 	return hex;
// } //gives warnings for rrggbb format

function getRandomColor() {
	var letters = '0123456789ABCDEF';
	var color = '#';
	for (var i = 0; i < 6; i++) {
	  color += letters[Math.floor(Math.random() * 16)];
	}
	return color;
  }
//console.log(getRandomColor());

function setRandomColor(){
	color1.value=getRandomColor();
	color2.value=getRandomColor();
	setGradient();
}
// console.log(color1.value=getRandomColor());
// console.log(color2.value=getRandomColor());


button.addEventListener("click", setRandomColor);


// 1. Write code so that the colour inputs match the background generated on the first page load. AND 
// 2. Display the initial CSS linear gradient property on page load.
function intialGradient(){
	color1.value= "#ff0000";
	color2.value= "#FFFF00";
	body.style.background = 
	"linear-gradient(to right, " 
	+ color1.value 
	+ ", " 
	+ color2.value 
	+ ")";

	css.textContent = body.style.background + ";";
}
window.onload(intialGradient());


//https://stackoverflow.com/questions/1484506/random-color-generator
//https://github.com/pikktorr/gradientbackground.github.io/blob/master/style.css
//https://pikktorr.github.io/gradientbackground.github.io/