// var list = ["tiger", "cat", "bear", "bird"];
// console.log(list[0]);

// var list2 = [ 
//     ["tiger", "cat", "bear", "bird"]
// ];
// console.log(list2[0][3]);

//some option: concat,pop,sort,shift,push

//---------------------------------
// using this array,
// var array = ["Banana", "Apples", "Oranges", "Blueberries"];


// 1. Remove the Banana from the array.

// 2. Sort the array in order.

// 3. Put "Kiwi" at the end of the array.

// 4. Remove "Apples" from the array.

// 5. Sort the array in reverse order. (Not alphabetical, but reverse
// the current Array i.e. ['a', 'c', 'b'] becomes ['b', 'c', 'a'])

//you should have at the end:
//["Kiwi", "Oranges", "Blueberries"]

// using this array,
// var array2 = ["Banana", ["Apples", ["Oranges"], "Blueberries"]];
// access "Oranges".

//------ --------- --------- ------- ------

var array = ["Banana", "Apples", "Oranges", "Blueberries"];
// 1 - 5 modify original array

//0
console.log(array);

//1 - removes the first element
array.shift();
console.log(array);

//2 - sorts array
array.sort();
console.log(array);

//3 - add element to end of array
array.push("Kiwi");
console.log(array);

//4 - selects a part of an array, and returns the new array
//array.shift(); or
array.splice(0,1);
console.log(array);

//5 - reverse array order
array.reverse();
console.log(array);

//6B - joins arrays - creates new array in process
var newArray = array.concat("strawberries","pineapples");
console.log(newArray);

//7B - removes the last element
newArray.pop();
console.log(newArray);



var array2 = ["Banana", ["Apples", ["Oranges"], "Blueberries"]];
console.log(array2);
//console.log(array2[1][1]); or
console.log(array2[1][1][0]);

