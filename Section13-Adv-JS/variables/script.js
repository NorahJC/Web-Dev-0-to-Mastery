//console - ES6
//destructing

const obj = {
    player: 'bobby',
    experience: 100,
    wizardLevel: false
}

const player = obj.player;
const experience = obj.experience;
// const{ player, experience} = obj;
//same as the first two lines

let wizardLevel = obj.wizardLevel;
let {wizardLevel} = obj;

//object properties- dynamic property values
//1
const name = 'john snow';
const obj = {
    [name]: 'hello',
    [1 + 2]: 'hihi'
}
//obj

//2
const a = "Simon";
const b = true;
const c = {};

const obj = {
    a, // same as a: a,
    b, // same as b: b,
    c // same as c: c
}

//Template strings
const name = "Sally";
const age = 34;
const pet = "horse";

const greeting = "Hello " + name + " you don\'t seem to be doing " + age + "!";
const greetingBest = `Hello ${name} you don't seem to be ${age-10}. What a lovely ${pet} you have`;
//back ticks (template strings) allow you to use quotes as strings

//Default arguments- if you don't provide any values to the arguments the defaults are used
//refresh broswer
function greet(name='',age=30,pet='cat'){
    return `Hello ${name} you don't seem to be ${age-10}. What a lovely ${pet} you have`;

}

//greet
//greet("Henny", 67, "monkey")


//Symbol- JS Type
// create a unique type to make sure there's never going to be any conflict
// used as an indentifer mostly for object properties
let sym1 = Symbol();
let sym2 = Symbol('foo');
let sym3 = Symbol('foo');

// sym2
// sym3
//sym2 == sym3 //false due to uniqueness

//arrow functions - shorthand form of function
function add(a, b){
    return a + b;
}
//add(2,4)
//single line return
const add2 = (a,b) => a + b;
//add2(2,4)
//or

//multiple line return
const add3 = (a,b) => {
    return a + b;
}
//add3(2,4)