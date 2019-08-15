// change everything below to the newer Javascript!

// let + const
//x
var a = 'test'; // let because it gets reassigned to test2
var b = true; // const because it doesn't get reassigned
var c = 789; // const ""
a = 'test2'; // no change because we are just reassigning the var value


// Destructuring
var person = {
    firstName : "John",
    lastName  : "Doe",
    age       : 50,
    eyeColor  : "blue"
};

var firstName = person.firstName;
var lastName = person.lastName;
var age = person.age;
var eyeColor = person.eyeColor;

//const {firstName, lastName, age, eyeColor} = person;

// Object properties
var a = 'test'; //const
var b = true; //const
var c = 789; //const

var okObj = {
  a: a, 
  b: b, 
  c: c  
};
//
const okObj = {
    a,
    b,
    c
}

// Template strings
var message = "Hello " + firstName + " have I met you before? I think we met in " + city + " last summer no???";
//let message = `Hello ${firstName} + have I met you before? I think we met in ${city} last summer no???`;

// default arguments
// default age to 10;
function isValidAge(age=10) {
    return age
}

//x the funct name becomes the var name, the argument(s) is what it is assigned to, and the arrow is what it returns
const isValidAge = (age=10) => age;

// Symbol
// Create a symbol: "This is my first Symbol"
let sym = Symbol("This is my first Symbol");

// Arrow functions
function whereAmI(username, location) {
    if (username && location) {
        return "I am not lost";
    } else {
        return "I am totally lost!";
    }
}

const whereAmI = (username, location) => {
    if (username && location) {
        return "I am not lost";
    } else {
        return "I am totally lost!";
    }
}
