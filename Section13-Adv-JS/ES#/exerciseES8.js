// Solve the below problems:

// #1) Line up the Turtle and the Rabbit at the start line:
const startLine = '     ||<- Start line';
let turtle = '🐢';    //turtle.padStart(9);   
let rabbit = '🐇';    //rabbit.padStart(9); 

turtle = turtle.padStart(9);
rabbit = rabbit.padStart(9); 

// when you do:
console.log(startLine);
console.log(turtle);
console.log(rabbit);

// it should look like this:
'     ||<- Start line'
'       🐢'
'       🐇'

// #2) What happens when you run turtle.trim().padEnd(9, '=') on the turtle variable
// Read about what the second parameter does in padEnd and padStart
turtle = turtle.trim().padEnd(9, '=');
//trim removes whitespace from both ends of a string
//(targetLength, padstring)
//optional- pad string is string to pad current string with
//

// #3) Get the below object to go from:
let obj = {
  my: 'name',
  is: 'Rudolf',
  the: 'raindeer'
}
// to this:
'my name is Rudolf the raindeer'

