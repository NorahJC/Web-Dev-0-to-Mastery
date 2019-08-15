//pad used to align/space words

'Turtle'.padStart(10); //returns to spaces before word
'Turtle'.padEnd(10); //returns to spaces after word

// comma allowed in order to avoid error that used to result 
// incase you had a long list and left the comma on it at the end
const fun = (a,b,c,d,) => {
    console.log(a);
}
fun(1,2,3,4,) //returns 1

//objs
let obj = {
    username0: 'Santa',
    username1: 'Rudolf',
    username2: 'Mr.Grinch'
}

Object.keys(obj).forEach((key, index) => {
    console.log(key, obj[key]);
});

Object.values(obj).forEach(value =>{
    console.log(value);
});

Object.entries(obj).forEach(value =>{
    console.log(value);
});

Object.entries(obj).map(value => {
    return value[1] + value[0].replace('username', ' ');
});

// or ++index if you want to count from 1 instead of 0
Object.entries(obj).map((value, index) => {  
    return value[1] + index; 
});