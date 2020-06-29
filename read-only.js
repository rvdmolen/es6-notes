
var myObject = {};

Object.defineProperty(myObject, 'myProp', {
    enumerable: false,
    configurable: true,
    writable: false,
    value: 'I am read only'
});


myObject.myProp = 'Hey!'; // this will not throw an exception, but just ignores it!
// with use strict this can be solved
console.log(myObject.myProp);