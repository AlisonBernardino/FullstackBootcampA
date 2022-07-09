// Zero, null & undefined

// Undefined
let item;
console.log(typeof(item));

// Defining a value, but keeping it empty
let element = "";
console.log(`Element value = "${element}"`);
console.log(`Element type = `, typeof(element));

// To change the variable data type, 
// but keeping the value empty
element = null;
console.log(`"Element" value = ${element}`);
console.log(`"Element" type = `, typeof(element));

// Finding a non-boolean and null value
console.log(`Is the "element" TRUE? Ans.:`, element === true);
console.log(`Is the "element" FALSE? Ans.:`, element === false);
console.log(`It's not TRUE or FALSE because it's a ${element}`,typeof(element));

// Dealing with the "falsy values"
let fragment = element;
console.log(`"Fragment" value = ${fragment}`);

let part = fragment === false;
console.log(`"Part" value = ${part} [Falsy value]`);
console.log(`"!Part" value = ${!part} [Inverted falsy value]`);
