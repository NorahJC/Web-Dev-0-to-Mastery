//variables
var button = document.getElementById("enter");
var input = document.getElementById("userinput");
var ul = document.querySelector("ul");
var li = document.getElementsByTagName("li");

//entry length
function inputLength() {
	return input.value.length;
}

//create an entry to add to list
function createListElement() {
	var li = document.createElement("li");
	li.appendChild(document.createTextNode(input.value));
	ul.appendChild(li);
	input.value = "";

	var items = document.querySelectorAll("li");
	
	//loop through li's
	for (var i=0; i<items.length; i++){
		items[i].addEventListener("click",toggle);
	
	}
	
	//append delete button to each entry
	var button=document.createElement("button");
	button.appendChild(document.createTextNode("Delete"));
	li.appendChild(button);
	button.onclick=removeParent;
}

//toggle entry
function toggle(){
	this.classList.toggle("done");
}

// add entry to list with click
function addListAfterClick() {
	if (inputLength() > 0) {
		createListElement();
	}
}

// add entry to list with key enter
function addListAfterKeypress(event) {
	if (inputLength() > 0 && event.keyCode === 13) {
		createListElement();
	}
}

//call function to add entry to list after click
button.addEventListener("click", addListAfterClick);

//call function to add entry to list after keypress
input.addEventListener("keypress", addListAfterKeypress);

//delete entry 
function removeParent(event){
	event.target.parentNode.remove();
}

// thanks to 
// https://github.com/AlexMcLean123/WebDev/blob/master/JS%20shopping%20list/script.js
// https://stackoverflow.com/questions/51494927/toggle-the-class-of-unordered-list-items-using-simple-javascript/51495137