function first(){
    var greet = 'Hi';
    function second(){
        alert(greet);
    }
    return second;
}

var newFunc = first();
newFunc();

// convert to ES6

// using ES6 creates new local var greet every time funct is run to 
// eliminate error for reassigning to a const

// closures- 
// function runs, executes, never executes again
// but remebers references to vars in memory
// so the child scope always has access to parent scope
// but not vice versa so first() [parent] wouldn't have access to vars in second() [child]

const first = () => {
    const greet = "Hi";
    const second = ()=> {
        alert(greet);
    }
    return second;
}

const newFunc = first();
newFunc();

// currying - process of converting a function that takes mult args into a funct that takes them one at a time
// used because its more extensible 
const multiply = (a,b) => a * b;
const curriedMultiply = (a) => (b) => a*b;
//curriedMultiply(3)
//curriedMultiply(3)(4)
//curriedMultiply accepts a parameter, a, and once the funct called/ran
//it returns another funct b that returns a*b once called/ran

//extensible ex.
const multiplyBy5 = curriedMultiply(5);
//multiplyBy5(5) //returns 25

const div = (a, b) => a / b
const curriedDiv = (a) => (b) => a / b
const div5 = curriedDiv(5) //5 => (b) => 5 / b
div5(100)//0.05 :5 => 0.05 => 5 / 100

//compose- putting two functions together to form a third funct
// where the ouput of one function is the input of another

//f,g are functs
const compose = (f, g) => (a) => f(g(a));

const sum = (num) => num + 1;

compose (sum, sum)(5);
// first funct returns another funct which runs as a is 5
// so composition function work starting with the inner most functionand working you way out
// f(g(a)) ->  f(g(5)) ->  f(sum(5)) : 5 + 1 ->  f(6) -> sum(6) : 6+1 -> 7


//avoiding side effects and functional purities
//side effects - actions that happen inside of the funct that we don't really know anything about
//if it interacts or reads or writes to an external var (eg console.log)

var a = 1;
function b(){
    a = 2;
}  
//side effect because the funct is doing somehting to affect the outside 'world'
// remember you want to think of funct as their own universe and we don't want it affecting anything outside of it in order to achieve funct purity

//funct purity- avoiding side effects and always return something to create a deterministic concept

//deterministic - inputs will always return the same value/output
