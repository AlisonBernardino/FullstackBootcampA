// Booleans
let isGreaterThanZero = 3 > 0;
let isTurnedOn = false;
let isSmallerThanThree = 4 < 3;
console.log(isGreaterThanZero);
console.log(isTurnedOn);
console.log(isSmallerThanThree);

// Transforming booleans into strings
let isGreaterThanZeroString = isGreaterThanZero.toString();
let isTurnedOnString = isTurnedOn.toString();
let isSmallerThanThreeString = isSmallerThanThree.toString();
console.log(isGreaterThanZeroString);
console.log(isTurnedOnString);
console.log(isSmallerThanThreeString);

// Checking the variables types
console.log(
  `"isGreaterThanZero" variable data type: `,
  typeof isGreaterThanZero
);
console.log(
  `"isGreaterThanZeroString" variable data type: `,
  typeof isGreaterThanZeroString
);
console.log(`"isTurnedOn" variable data type: `, typeof isTurnedOn);
console.log(`"isTurnedOnString" variable data type: `, typeof isTurnedOnString);
console.log(
  `"isSmallerThanThree" variable data type: `,
  typeof isSmallerThanThree
);
console.log(
  `"isSmallerThanThreeString" variable data type: `,
  typeof isSmallerThanThreeString
);

// Arrays/Vectors
let numbersVector = [];
numbersVector.push(4);
console.log(numbersVector);
numbersVector.push(6);
console.log(numbersVector);
numbersVector.push(8);
console.log(numbersVector);
numbersVector.pop();
console.log(numbersVector);
numbersVector.shift();
console.log(numbersVector);

// Printing the array values
let lettersArray = ["A", "E", "I", "O", "U"];
for (let counter = 0; counter < lettersArray.length; counter++) {
  console.log(lettersArray[counter]);
}

// ".every" && ".some" methods
console.log(lettersArray.every(element => element === "E"));

console.log(lettersArray.some(element => element === "A"));

// Array inversion method (.reverse())
console.log(lettersArray.reverse());