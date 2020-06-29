//console.log(myVariable);
//var myVariable;

// hoisting , declare vars after they are being used
// Javascript default behavior of moving all the declarations to the top of the current scope

console.log(myVariable);
var myVariable = 10;

// after javascript compiler
var myVariable;             // creation
console.log(myVariable);
myVariable = 10;            // initialisation

// What?? Now it is undefined
// So the only piece that is moved to the top is the variable itself but not the assignment

// first scope
var mySecondVar = 10;

function setVar() {
    // second scope
    mySecondVar = 25;
    var mySecondVar; // will be moved to the top of the function, so this will become local scope
}

setVar(); // will change the var , tough the declaration does not exist inside the function
// it will break out and find it one scope higher
console.log(mySecondVar);

// if (5 === 5) {
//     let message = 'hello';
// }

// console.log(message); // undefined


var toPrint = 'printMe!';

function printLine(value) {
    stringToPrint = value;
    console.log(value);
}

// console.log(stringToPrint); // does not work
printLine('hello');
console.log(stringToPrint); // does work




