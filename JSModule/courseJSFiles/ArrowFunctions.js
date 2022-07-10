// Arrow functions
// Normal function
const sendMessage = function(){
    return "Greetings, coder";
}

console.log(sendMessage());

// "Normal function" transformed into
// Arrow function
const sendNewMessage = () => {
    return "Greetings using arrow functions, coder";
}

console.log(sendNewMessage());

// Single line operations using arrow functions
// Note: If you have a single line operation,
// you can discard the "{} (block keys)"
// and the "return" method:
const multiplyValues = (itemA, itemB) => itemA * itemB;

console.log(multiplyValues(3, 2));

// Note02: Arrow functions DOESN'T make
// "hoisting" (Calling an item before declaring it).