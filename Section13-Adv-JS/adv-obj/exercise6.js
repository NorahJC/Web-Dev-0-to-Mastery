//Evaluate these:
//#1
[2] === [2] //not equal- false
{} === {} //not equal- false

//#2 what is the value of property a for each object.
                          //if exe by line        //if ran completely
const object1 = { a: 5 }; //object1.a returns 5 // 4
const object2 = object1;  // returns 5          // 4
const object3 = object2; // return 5            // 4
const object4 = { a: 5}; // returns 5           //5
object1.a = 4; //returns 4                      //4
// so the last line would be the only output 

//#3 create two classes: an Animal class and a Mamal class. 
// create a cow that accepts a name, type and color and has a sound method that moo's her name, type and color. 
class Animal{
   constructor(name, type, color){
      this.name = name;
      this.type = type;
      this.color = color;
   }
}
class Mamal extends Animal{
    constructor(name, type, color){
        super(name,type,color);
    }
    song(){
        console.log(`Clap along with me. Moo! Hi, I'm ${this.name} the ${this.type}. I'm ${this.color}.`);
    }
}

const cow = new Mamal ('Cory', 'cow', 'black and white');