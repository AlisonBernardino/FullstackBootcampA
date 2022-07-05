// Variables
let mention01 = 9;
let mention02 = 8;
const focusAverage = 10;

console.log(mention01);
console.log(mention02);

// Functions
let generalValuesVector = [2, 3, 4, 6, 8, 9, 11, 12, 15];
function returnOddValues(vector) {
  let oddNumbers = [];
  let evenNumbers = [];
  for (let counter = 0; counter < vector.length; counter++) {
    if (vector[counter] % 2 == 1) {
      oddNumbers.push(vector[counter]);
    } else {
      evenNumbers.push(vector[counter]);
    }
  }
  // Content presentation method
  console.log(`Vector "odd" values = ${oddNumbers}`);
  console.log(`Vector "even" values = ${evenNumbers}`);
}

returnOddValues(generalValuesVector);
