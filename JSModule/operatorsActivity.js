// Form 01
let value01 = 0;
let value02 = 5;
function checkNumbers(valueA, valueB) {
  if (valueA === valueB) {
    console.log(`${valueA} and ${valueB} have the same value`);
  } else {
    console.log(`${valueA} and ${valueB} are not equal in value or data type.`);
  }
  if (valueA + valueB > 10 || (valueA + valueB > 10 && valueA + valueB < 20)) {
    console.log(`Their sum is bigger than 10 or smaller than 20`);
  } else {
    console.log(`Their sum is not bigger than 10 or not smaller than 20`);
  }
}

checkNumbers(value01, value02);

// Form 02
let numberA = 9;
let numberB = 10;
function compareItems(valueA, valueB) {
  const areTheItemsEqual = valueA == valueB;
  const itemsMultiplication = valueA * valueB;
  const itemsDivision = valueA / valueB;
  const itemsSum = valueA + valueB;
  const itemsSubtraction = valueA - valueB;

  // Return type A - Normal conditions operators
  // if (areTheValuesEqual) {
  //   return "The values are equal";
  // } else {
  //   return "The values are not equal";
  // }

  // Return type B - Ternary conditions operators
  return areTheValuesEqual ? "The items are equal" : "The items are not equal";
}

compareItems(numberA, numberB);

// Form 03
function compareValues(valueA, valueB) {
  const equalitySentence = createEqualitySentence(valueA, valueB);
  const valuesCheckSentence = createValuesCheckSentence(valueA, valueB);
}

function createEqualitySentence(valueA, valueB) {
  let areTheValuesEqual = "";

  if (valueA !== valueB) {
    areTheValuesEqual = "not";
  }

  return `${valueA} and ${valueB} are ${areTheValuesEqual} equal.`;
}

function createValuesCheckSentence(valueA, valueB) {
  const valuesSum = valueA + valueB;

  let isShorterThan10 = " less than ";
  let isShorterThan20 = isShorterThan10;
  let isGreaterThan10 = " greater than ";
  let isGreaterThan20 = isGreaterThan10;
  const comparisonGreaterThan10 = valuesSum > 10;
  const comparisonShorterThan10 = valuesSum < 10;
  const comparisonGreaterThan20 = valuesSum > 20;
  const comparisonShorterThan20 = valuesSum < 20;
}
