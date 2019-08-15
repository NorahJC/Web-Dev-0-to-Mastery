//console - may need to refresh
//new ways of declaring variables

//let+const

const player = 'bobby';
let experience = 100;
let wizardLevel = false;

if(experience > 90){
    let wizardLevel = true;
    //write in console: wizardLevel 
    //returns false when we would've expected true if we were using 'var' instead of 'let'
    console.log('inside', wizardLevel); //added1
}
console.log('outside', wizardLevel); //added2

//with var you can ony create a scope inside of a function not with an if statement

//with let anytime its wrapped around a curly bracket it creates a new scope

//1 returns true
//2 returns false

//vs var
//where no new scope has been created because we aren't using a function, but instead using if
// so the var is simply updated / reassigned
const player = 'bobby';
let experience = 100;
var wizardLevel = false;

if(experience > 90){
    var wizardLevel = true;
    
    console.log('inside', wizardLevel); //true
}
console.log('outside', wizardLevel); //true

//const

player = 'sally' // error due to assignment to const var

const obj = {
    player: 'bobby',
    experience: 100,
    wizardLevel: false
}

obj = 5 // returns error due to assignment to const

obj.wizardLevel = true;

//write: obj // returns the updated property as true 
