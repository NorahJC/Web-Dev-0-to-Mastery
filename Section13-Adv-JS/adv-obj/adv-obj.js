//reference type - non-primitive type
[] === []; //false bc its two different addresses
[1] === [1]; //false

var obj1 = {value: 10};
var obj2 = obj1; //references obj1's address that holds values
var obj3 = {value: 10};
obj1 === obj2; //true
obj1 === obj3; //false
obj1.value = 15; //15
obj2.value //15
obj3.value //10

//context (where we are within the obj) vs scope (new scope created every time you see {})

//scope
function b(){
    let a = 4;
}
console.log(a); //uncaught reference error because a doesn't exist outside funct b scope

//context (uses this keyword)
//this - refers to what obj its inside of; obj environment currently in (to the left of the . -ex. window.alert())
console.log(this); //returns window obj
console.log(this === window); //returns true
this.alert("hello"); //returns alert

//ex.2
function a(){
    console.log(this);
}
a() //return window obj
window.a() //return window obj

//ex.3 - create new value for this
const obj4 = {
    a:function(){
        console.log(this);
    }
}
obj4.a() //returns obj4

//instantiation- make a copy of an obj and reuse the code
class Player{
    constructor(name, type){
        console.log('player', this);
        this.name = name;
        this.type = type;
    }
    //so to use introduce you'd do this.introduce
    introduce(){
        //to access a property within the constructor or class, must use this.property
        console.log(`Hi, I am ${this.name}, I'm a ${this.type}`);
    }
}

class Wizard extends Player{
    //use super when you extend a class to have access to certain properties
    // use super to pass properties to the constructor
    constructor(name, type){
        super(name, type);
        console.log('wizard', this);

    }
    play(){
        console.log(`WEEEEE I'm a ${this.type}`);
    }
}

const wizard1 = new Wizard('Shelly', 'Healer');
const wizard2 = new Wizard('Shawn', 'Dark Magic');

