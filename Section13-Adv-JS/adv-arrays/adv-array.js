//map, filter, reduce- funct purity

const array = [1, 2, 10, 16];

const newArray = array.forEach((num) => {
    num * 2;
})

console.log(newArray);// won't return anything because not storing array

const array = [1, 2, 10, 16];

const double = [];
const newArray = array.forEach((num) => {
    double.push(num * 2);
});

console.log('forEach', double);

//map - to loop and take a simple action on an array with an expectation of returning a value else it returns undefined
const mapArray = array.map((num) => {
    return num *2;
});
console.log('map',mapArray);

//(1)map vs (2)forEach- 
// 1 always returns something; creates a new/copy of array (thus maintains original data of array); funct purity 
//2 simply iterates through array unless told do specific actions; side effects possible

 
//can use no brackets if only dealing with one parameter and no need for word 'return'
const mapArray2 = array.map(num => num *5);
console.log('map2',mapArray2);

//filter - filter array with condition and returns a new array
const filterArray = array.filter(num => num> 5);
console.log('filter', filterArray);

//reduce - can do map and filter; uses param acc(to store data) and num(to reference nums in array) and returns a new array
//the second param after the funct initializes/defaults acc  
const reduceArray = array.reduce((accumlator, num) =>{
    return accumlator + num;
}, 0);
console.log('reduce', reduceArray);
//0 - 29
//5 - 34