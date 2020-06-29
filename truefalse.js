// !! operator turns it into boolean

// Boolean(true) is the same as !!true

//  ==(abstract equality) and ===(strict equality) is


// truthy values
console.log('Truthy Values: ')
console.log(Boolean(true));
console.log(!!{});
console.log(!![]);
console.log(!!new Date());
console.log(!!'0');
console.log(!!'42');
console.log(!!-42);
console.log(!!3.14);
console.log(!!-3.14);


// falsy values
console.log('Falsy Values: ')
console.log(!!false);
console.log(!!null);
console.log(!!undefined);
console.log(!!0);
console.log(!!-0);
console.log(!!NaN);
console.log(!!'');