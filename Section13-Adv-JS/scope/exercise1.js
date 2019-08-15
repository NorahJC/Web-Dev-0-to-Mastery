
// For all of these, what is the value of a when the function gets called with the alert() 
//assuming you run the functions in order

// #1
function q1() {
    var a = 5;
    if(a > 1) {
        a = 3;
    }
    alert(a);
}
//3

//#2
var a = 0;
function q2() {
    a = 5;
}

function q22() {
    alert(a);
}
//0 no because a is reassigned a value/ updated
//correct ANS: 5

//#3
function q3() {
    window.a = "hello"; 
}


function q32() {
    alert(a);
}
// hello
//since window represents the root scope

//#4
var a = 1;
function q4() {
    var a = "test";
    alert(a);
}
//test

//#5
var a = 2;
if (true) {
    var a = 5;
    alert(a);
}
alert(a);
// 5 .. then 2 no because if statements don't create a new scope and there is only 1 alert
// Correct ANS: 5