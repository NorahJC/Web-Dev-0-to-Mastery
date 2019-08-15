const basket = ['apples', 'oranges', 'grapes'];
const detailedBasket = {
    apples: 5,
    oranges: 10,
    grapes: 1000
}

//1 - review
for (let i = 0; i < basket.length; i++){
    console.log(basket[i]);
}

//2 - review
basket.forEach(item => {
    console.log(item);
})

//ES6
//for of
// Iterating - arrays, strings
for (item of basket){
    console.log(item);
}
for (item of 'basket'){
    console.log(item);
}

//for in works with obj
//enumerating - obj; properties of an object are enumerable

for (item in detailedBasket){
    console.log(item);
} //loops through item properties
//can use forEach or for loop instead

for (item in basket){
    console.log(item);
} //return index 
//can use keys, values, or entries instead