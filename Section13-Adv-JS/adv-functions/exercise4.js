//Solve these problems:

//#1 Create a one line function that adds two parameters
const add = (a,b) => a+b;

//Closure: What does the last line return?
const addTo = x => y => x + y
var addToTen = addTo(10) // y => x + y ... so x is 10
addToTen(3) //13 -> y is 3 and so 10 + 3 = 13

//Currying: What does the last line return?
const sum = (a, b) => a + b
const curriedSum = (a) => (b) => a + b
curriedSum(30)(1)//31 

//Currying: What does the last line return?
const sum = (a, b) => a + b
const curriedSum = (a) => (b) => a + b
const add5 = curriedSum(5) //5 => (b) => 5 + b
add5(12)//17 :5 => 12 => 5 + 12

//Composing: What does the last line return?
const compose = (f, g) => (a) => f(g(a));
const add1 = (num) => num + 1;
const add5 = (num) => num + 5;
compose(add1, add5)(10) 
// f(g(a));
// f(g(10));
// f(add5(10));
// f(10 + 5);
// f(15);
// add1(15);
// 15 + 1;
// 16;

//What are the two elements of a pure function?
//functional purity and deterministic