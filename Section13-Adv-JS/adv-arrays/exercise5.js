// Complete the below questions using this array:
const array = [
  {
    username: "john",
    team: "red",
    score: 5,
    items: ["ball", "book", "pen"]
  },
  {
    username: "becky",
    team: "blue",
    score: 10,
    items: ["tape", "backpack", "pen"]
  },
  {
    username: "susy",
    team: "red",
    score: 55,
    items: ["ball", "eraser", "pen"]
  },
  {
    username: "tyson",
    team: "green",
    score: 1,
    items: ["book", "pen"]
  },

];

//Create an array using forEach that has all the usernames with a "!" to each of the usernames

let newArray = [];
array.forEach(user => {
	let { username } = user;
	username = username + "!";
	newArray.push(username);
})
console.log(newArray);

//Create an array using map that has all the usernames with a "? to each of the usernames

const arrayMap = array.map(user => {
	let { username } = user;
	return username = username + "?";
});
console.log('map',arrayMap);

//Filter the array to only include users who are on team: red

const filterArray = array.filter(user => {
	return user.team === "red";
})
console.log(filterArray);

//Find out the total score of all users using reduce

const reduceArray = array.reduce((accumlator, user) =>{
  return accumlator + user.score;
}, 0);
console.log('reduce', reduceArray);


const arrayNum = [1, 2, 4, 5, 8, 9];
const newArray = arrayNum.map((num, i) => {
	console.log(num, i);
	alert(num);
	return num;
})
// (1), what is the value of i? //29
const reduceArray2 = arrayNum.reduce((accumlator, num) =>{
  return accumlator + num;
}, 0);
console.log(reduceArray2);

// (2), Make this map function pure:


//BONUS: create a new list with all user information, but add "!" to the end of each items they own.


//******************** student solution ***********************//


//**//Create an array using forEach that has all the usernames with a "!" to each of the usernames
 
// const array2 = [];
// array.forEach(obj => array2.push(obj.username + "!"));
// console.log(array2);
 
// //Create an array using map that has all the usernames with a "? to each of the usernames
// const mapArray = array.map(obj => {
//   return obj.username + "?";
// });
// console.log(mapArray);
 
// //Filter the array to only include users who are on team: red
// const filterArray = array.filter(obj => obj.team === "red");
// console.log(filterArray);
 
// //Find out the total score of all users using reduce
// const reduceArray = array.reduce((accumulator, obj) => {
//   return accumulator + obj.score;
// }, 0);
// console.log(reduceArray);
 
// // (1), what is the value of i? index of array
// // (2), Make this map function pure:
// const arrayNum = [1, 2, 4, 5, 8, 9];
// const newArray = arrayNum.map((num, i) => num * 2);
 
// //BONUS: create a new list with all user information, but add "!" to the end of each items they own.
// const finalArray = array.map(obj => {     //loops through each object in the array
//   obj.items = obj.items.map(list => {     //loops through each item property in the object
//     return list + "!";                    //adds and returns the new property in the object
//   });
//   return obj;                             //returns the object with the new item property
// });
// console.log(finalArray);                 //prints out the final array
 
