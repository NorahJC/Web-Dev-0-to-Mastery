//original
// Make an keyless car EVEN BETTER!
// We are improving our car from previous exercise now. 


// var age = prompt("What is your age?");

// if (Number(age) < 18) {
// 	alert("Sorry, you are too yound to drive this car. Powering off");
// } else if (Number(age) > 18) {
// 	alert("Powering On. Enjoy the ride!");
// } else if (Number(age) === 18) {
// 	alert("Congratulations on your first year of driving. Enjoy the ride!");
// }

//1. Make the above code have a function called checkDriverAge(). Whenever you call this function, you will get prompted for age. Use Function Declaration to create this function.

//1.1

// function checkDriverAge(){
//     var age = prompt("What is your age?");
//     if(Number(age)<18){
//         alert("Sorry, you are too young to drive thos car. Powering off.");
//     }
//     else if (Number(age)>18){
//             alert("Powering On. Enjoy the ride!");
//     }
//     else if (Number(age) === 18){
//         alert("Congratulations on your first year of driving. Enjoy the ride!");
//     }
// }
// checkDriverAge();

// 1.2

// function checkDriverAge2(){
//     var age = prompt("What is your age?");
//     if(Number(age)<18){
//         console.log("Sorry, you are too young to drive thos car. Powering off.");
//     }
//     else if (Number(age)>18){
//         console.log("Powering On. Enjoy the ride!");
//     }
//     else if (Number(age) === 18){
//         console.log("Congratulations on your first year of driving. Enjoy the ride!");
//     }
// }
// checkDriverAge2();

//2. Create another function that does the same thing, assign it to checkDriverAge2 variable using Function Expression.

// var drive = function (){
//     var age = prompt("What is your age?");
//     if(Number(age)<18){
//         console.log("Sorry, you are too young to drive thos car. Powering off.");
//     }
//     else if (Number(age)>18){
//         console.log("Powering On. Enjoy the ride!");
//     }
//     else if (Number(age) === 18){
//         console.log("Congratulations on your first year of driving. Enjoy the ride!");
//     }
// }
// drive();

//BONUS: Instead of using the prompt. Now, only use console.log and make the checkDriverAge() function accept an argument of age.
// checkDriverAge(92);
// it returns "Powering On. Enjoy the ride!" 

//3.1

// function checkDriverAgeB(age){
//     if(Number(age)<18){
//         alert("Sorry, you are too young to drive thos car. Powering off.");
//     }
//     else if (Number(age)>18){
//         alert("Powering On. Enjoy the ride!");
//     }
//     else if (Number(age) === 18){
//         alert("Congratulations on your first year of driving. Enjoy the ride!");
//     }
// }
// checkDriverAgeB(89);

// 3.2

// function checkDriverAgeB2(age){
//     if(Number(age)<18){
//         return("Sorry, you are too young to drive thos car. Powering off.");
//     }
//     else if (Number(age)>18){
//         return("Powering On. Enjoy the ride!");
//     }
//     else if (Number(age) === 18){
//         return("Congratulations on your first year of driving. Enjoy the ride!");
//     }
// }
// must type into console for output display
// checkDriverAgeB2(12);
// can also do console.log(checkDriverAgeB2(12));
// but the first choice's output more so resembles the function return

//3.3

function checkDriverAgeB3(age){
    if(Number(age)<18){
        console.log("Sorry, you are too young to drive thos car. Powering off.");
    }
    else if (Number(age)>18){
        console.log("Powering On. Enjoy the ride!");
    }
    else if (Number(age) === 18){
        console.log("Congratulations on your first year of driving. Enjoy the ride!");
    }
}
checkDriverAgeB3(18);
