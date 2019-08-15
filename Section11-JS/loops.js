var todos = [
    "clean room",
    "brush teeth",
    "exercise",
    "study javascript",
    "eat healthy"
];
//-----------for loop

//add !
// for (var i=0; i<todos.length; i++){
//     // console.log(i);
//     // console.log(todos[i] + "!");
//     todos[i]= todos[i] + "!";
//     console.log(todos[i]);
// }

//remove items
// var todosLength = todos.length;
// for (var i=0; i < todosLength; i++){
//     todos.pop();
//     console.log(todos);
// }


//1 accesses index
// var todosLength = todos.length;
// for (var i = 0; i < todosLength; i++){
//     console.log(i);
// }
//2 accesses item name
// var todosLength = todos.length;
// for (var i = 0; i < todosLength; i++){
//     console.log(todos[i]);
// }
// access both
// var todosLength = todos.length;
// for (var i = 0; i < todosLength; i++){
//     console.log(todos[i], i);
// }

//-----------------for each loop new in ECMA Script 5
//1 accesses item name
// todos.forEach(function(i){
//     console.log(i);
// });
// 1.1
// todos.forEach(function(todo){
//     console.log(todo);
// });

//3 access both
// todos.forEach(function(todo, i){
//     console.log(todo, i);
// });

//4 using functions
var todosImportant = [
    "clean room!",
    "brush teeth!",
    "exercise!",
    "study javascript!",
    "eat healthy!"
];
var todosLength = todos.length;
function logTodos(todo, i){
    console.log(todo, i);
}
todos.forEach(logTodos);
todosImportant.forEach(logTodos);

//-----------while loop- check conditiom first
// var counterOne = 0;
// while(counterOne < 10){
//     console.log(counterOne);
//     counterOne++;
// }

// var counterOne = 10;
// while(counterOne > 0){
//     console.log(counterOne);
//     counterOne--;
// }

//------infinite loop-- eventually chrome will crash, don't do 
// var counterOne = 0;
// while(100000 < 10){
//     console.log(counterOne);
//     counterOne++;
// }

//-------do while-- check confition after
// var counterTwo = 10;
// do {
//     console.log(counterTwo);
//     counterTwo--;

// }while(counterTwo > 0);

//see difference
// var counterOne = 10;
// while(counterOne > 10){
//     console.log("while", counterOne);
//     counterOne--;
// }
// var counterTwo = 10;
// do {
//     console.log("do while", counterTwo);
//     counterTwo--;

// }while(counterTwo > 10);