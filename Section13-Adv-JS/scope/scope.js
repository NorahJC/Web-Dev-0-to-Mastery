//console
//1
// function aa(){
//     console.log("test");
// }

// window.aa()
////will log test and show aa as a property of the obj

//2
// function bb(){
//     var a="hello";
// }

// window.bb();

// console.log(a);
// //error a is not defined (becase it is calling a local variable/child scope)

// //2.1 
// function bb(){
//     var a = "hello";
//     console.log(a);
// }

// bb()
// //returns hello because a was called within its scope

//2.2
//
// var b = "Can I access this?";
// // funct bb has access to var b
// function bb(){
//     var a = "hello";
// }

// //(console:) window.bb & window.b both exist because window.bb exists and var b lives on the window obj so they both have the same parent

//2.3
// var b = "Can I access this?";
// // funct bb has access to var b
// function bb(){
//     var a = "hello";
//     console.log(b);
// }
// bb()
// //returns Can I access this?

//2.4
// var b = "Can I access this?";
// function bb(){
//     b = "hello";
// }
// console.log(b);
// // returns Can I access this? because you haven't ran the funct
// // run 
// bb()
// console.log(b);
// // returns hello because b was reassigned to hello

// //3
// //root scope (window)
// var fun = 5;

// function funFunction(){
//     // child scope: new scope, new var; doesn't have access to parent scope var due to same name var
//     var fun = "hello";
//     console.log(1,fun);
// }

// function funnerFunction(){
//     // child scope:""
//     var fun = "Byee";
//     console.log(2,fun);
// }

// function funnestFunction(){
//     // child scope: new scope, SAME var that has been re-assigned
//     fun = "AHHH";
//     console.log(3,fun);
// }

// console.log("window",fun); //window 5
// funFunction(); // 1 "hello"
// funnerFunction(); //2 "Byee"
// funnestFunction(); // 3 "AHHH"

// 3.1
// console.log(fun);
// // return AHHH because var was reassigned a value which overwrites the original value

// //last check is always the Root scope