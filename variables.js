
// var = function scoped

{
    var a = 5;
}
console.log(a);

// let = blocked scoped
{
    let b = 9;
    console.log(b);
}
// console.log(b) => will not work because it is blocked scoped


// let is also not hoisted. meaning it is not moved to the top of the scope

console.log(c); // undefined
var c = 10;

// console.log(d);
// let d = 4; // error


const e = 99; // const is blocked scoped but not immutabele!

const f = {
    name: 'Test'
};

f.name = 'newName';

console.log(f);