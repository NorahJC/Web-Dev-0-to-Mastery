//value
var a = 5;
var b = a; //copies value of a

b++; //returns 6


//reference
let obj1 = {name: 'Yao', password: '123'};
let obj2 = obj1;

obj2.password = 'easypeasy';

// both return easypeasy as pass
console.log(obj1);
console.log(obj2);

//ex.2 - arrays are obj thus they pass by reference
var c = [1,2,3,4,5];
var d = c; //returns the same thing sing they are all pointing to the same place in memory
d.push(187628761);
console.log(c); //returns [1,2,3,4,5,187628761]

//clone and copy so as to not modify original
////ex.3
var c = [1,2,3,4,5];
var d = [].concat(c); 
d.push(187628761);
console.log(c); ////returns [1,2,3,4,5]
console.log(d); //clones the array returns [1,2,3,4,5,187628761]

//ex.4
let obj = {a: 'a', b:'b', c:'c'};
//let obj2 = obj // would change the original where c : 5
//param1 object to copy to, param2 source from which to copy props
let clone = Object.assign({}, obj); 
//another way
let clone2 = {...obj};

obj.c = 5;
console.log(obj); //returns modified
console.log(clone); //returns original
console.log(clone); //returns original

//ex.5 obj within obj
let obj = {a: 'a', b:'b', c:{deep:'try and copy me'}};
let clone = Object.assign({}, obj); 
//another way
let clone2 = {...obj};

obj.c.deep = 'hahaha';

console.log(obj); 
console.log(clone); 
console.log(clone); 
//all return modifed bc obj is pointing(referencing) to one address in memory, but the second obj with that address is pointing to another address in memory  
//each obj get passed by ref so although we cloned the inital obj a shallow clone occured where it only cloned the first level. So, that is the memory address in obj. But within this obj there was another address to another obj never changed.

//ex.6 achieve deep cloning with JSON
let obj = {
    a: 'a', 
    b:'b', 
    c:{
        deep:'try and copy me'
    }
};
let clone = Object.assign({}, obj); 
let clone2 = {...obj};
let superClone = JSON.parse(JSON.stringify(obj));

obj.c.deep = 'hahaha';

console.log(obj); 
console.log(clone); 
console.log(clone);
console.log(superClone); //keeps original with deep clone

//deep clones with JSON can have some perfomance implications