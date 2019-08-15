//console
//better to use sometimes then basic ctrl flow:if,else,else if

//ternary operator- if/else

// condition ? exp1 : exp2;


// //1
// function isUserValid(bool){
//     return bool;
// }
// //1.1
// var answer = isUserValid(true) ? "You may enter" : "Access Denied";
// answer //return "You may enter"

// //vs
// //1.1.1
// function condition(){
//     if (isUserValid(true)){
//         return "Your may enter";
//     } else{
//         return "Access denied";
//     }
// }
// var answer2 = condition();

// answer2 // "You may enter" 

// //1.2
// var answer = isUserValid(true) ? "You may enter" : "Access Denied";
// answer //returns "access denied"



// //2
// var automatedAnswer = 
// "Your account # is " + (isUserValid(false) ? "1234" : "not available");
// automatedAnswer //returns "Your account # is 1234"

// //2.2
// var automatedAnswer = 
// "Your account # is " + (isUserValid(false) ? "1234" : "not available");
// automatedAnswer //returns "Your account # is 1234"



//switch- if/else if/else

function moveCommand(direction){
    var whatHappens;
    switch (direction){
        case "forward":
            whatHappens = "you encouter a monster";
            break;
        case "back":
            whatHappens = "you arrived home";
            break;
        case "right":
            whatHappens = "you found a river";
            break;
        case "left":
            whatHappens = "you run into a troll";
            break;
        default:
            whatHappens ="please enter a valid direction";
    }
    return whatHappens;
}

window.moveCommand("forward");
//you encounter a monster

//break exits the switch statement
//order matters (same as with basic flow control) for code due to the fact that it'll exit the statement once the condition or condition range is met
//so if you have to 18 for a condition you should  do
// less than 18, greater than 18, and then 18 
 