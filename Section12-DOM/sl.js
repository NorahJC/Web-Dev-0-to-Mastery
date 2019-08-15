// var button = document.getElementsByTagName("button")[0];

// button.addEventListener("click", function(){
//     console.log("Click!");
// });

// click, mouseenter, mouseleave more in mdn link

// var button = document.getElementById("enter");
// var input = document.getElementById("userInput");
// var ul = document.querySelector("ul");

// button.addEventListener("click", function(){
//     //console.log(input.value); //debugging
//     if(input.value.length > 0){
//         var li = document.createElement("li");
//         li.appendChild(document.createTextNode(input.value));
//         ul.append(li);
//         input.value = "";
//     }
    
// })

// input.addEventListener("keypress", function(event){
//     //console.log(event); //debugging look for which or keyCode
//     if(input.value.length > 0 && event.keyCode === 13){
//         var li = document.createElement("li");
//         li.appendChild(document.createTextNode(input.value));
//         ul.append(li);
//         input.value = "";
//     }
    
// })

// D.R.Y - Refactor: write more efficient code without changing functionality
var button = document.getElementById("enter");
var input = document.getElementById("userInput");
var ul = document.querySelector("ul");

function inputLength() {
    return input.value.length;
}

function createListElment(){
    var li = document.createElement("li");
    li.appendChild(document.createTextNode(input.value));
    ul.append(li);
    input.value = "";
}

function addListAfterClick(){
    if(inputLength() > 0){
        createListElment();
    }    
}

function addListAfterKeypress(event){
    if(inputLength() > 0 && event.keyCode === 13){
        createListElment();
    }
}

button.addEventListener("click", addListAfterClick);
input.addEventListener("keypress", addListAfterKeypress);