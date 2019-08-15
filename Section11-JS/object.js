//object- collections of properties

var user = {
    name: "John",
    age: 34,
    hobby: "Soccer",
    isMarried: false,
    spells: ["abrakabra", "shazam"],
    shout: function(){
        console.log("AHH!");
    }

};

//write in console
// user
// // to grab objects
// user.name;
// user.age;
// user.spells[1];
// //expand/change values
// user.favouriteFood = "candy";
// user //now includes candy
// user.isMarried = true; 
// user //false changed to true
// user.shout(); //method- function inside an object

var list = ["apple", "banana", "kiwi"]
//write in console
// list
//to grab element
// list[1]

//user inside array
var list2 = [
    {
        username: "andy",
        password: "secrete"
    },
    {
        username:"jess",
        password:"123"
    }
];

//write in console
//list[2]
//list2[0].password

//declaring/initializing empty objects and empty list valid
var emptyObj = {};
var nullObj = null;
// in console
// nullObj.name="Andy"; //returns error since initialized to null
// emptyObj.namr = "Andy"; // return Andy
