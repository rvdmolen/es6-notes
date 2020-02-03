// == 
// if variabele are of 2 different types it will forst convert them to the same type
// 
// 1 == '1'         => true
// 1 == true        => true
// 0 == false       => true
// 3 == true        => false


// ===
// no type conversion
// 1 === true        => false
// 1 === '1'         => false
// 


var x;

// check if x does exists
if (x) {
    // do something
}

// this is the same as:
// if (x == true) ......

// so please be aware, it will try to convert x to booleabn.
// So this will say NOT EXISTS
var x = 0;
if (x) {
    console.log('Exists')
} else {
    console.log('Not Exists')
} 