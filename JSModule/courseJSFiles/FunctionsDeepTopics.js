// Functions - Deep topics

// Anonymous function
// (Used with expressions + assignment to a variable)
let subtractValues = function makeSubtraction(valueA, valueB) {
  let finalValue = valueA - valueB;
  return finalValue;
};

console.log(`Subtraction A result = ${subtractValues(1, 3)}`);
console.log(`Subtraction B result = ${subtractValues(4, 2)}`);

// Self-summoning functions
// >> Type 01
(function (itemA, itemB) {
  return itemA * itemB;
})(`ItemA X itemB ${(3, 5)}`);

// >> Type 02
const sumValues = (function () {
  return elementA + elementB;
})(`elementA + elementB = ${(6, 3)}`);

console.log(sumValues);

// "arguments" object
function findGreaterValue() {
  let greaterValue = 0;

  for (let counter = 0; counter < arguments.length; counter++) {
    if (arguments[counter] > greaterValue) {
      greaterValue = arguments[counter];
    }
  }

  return greaterValue;
}

console.log(findGreaterValue(2, 4, 5, 8, 11));

// "for" loop inside the functions
function multiplyBy03(vector){
  let multipliedValues = [];

  for (let index = 0; index < vector.length; index++){
    multipliedValues.push(vector[index] * 3);
  }

  return multipliedValues;
}

let rawValues = [1, 3, 5, 7, 9, 12, 14];

console.log(multiplyBy03(rawValues));

// "for...in" loop inside the functions
// >> Form A (Properties labels presentation)
function showFoodPropertiesLabels(foodItem){
  for(property in foodItem){
    console.log(property);
  }
}

const foodA = {
  title: "Cheeseburger",
  weight: "60g",
  price: 4.99
}

console.log(showFoodPropertiesLabels(foodA));

// >> Form B (Properties values presentation)
function showFoodPropertiesValues(foodItem){
  for(propertyValue in foodItem){
    console.log(foodItem[propertyValue]);
  }
}

console.log(showFoodPropertiesValues(foodA));


// "for...of" loop inside the functions
// >> Form A (Letters)
function bringItemLetters(techItem){
  for(letter of techItem){
    console.log(letter);
  }
}

let techComponentA = "Motherboard";

console.log(`"${techComponentA}" letters`, bringItemLetters(techComponentA));

// >> Form B - Arithmetic symbols
function showArithmeticOperators(symbolsCollection){
  for(symbol of symbolsCollection){
    console.log(symbol);
  }
}

const symbolsPack = "*/+-";

console.log(`Arithmetic symbols pack`, showArithmeticOperators(symbolsPack));


// "While" loop inside the functions
function showSkills(){
  let skills = ["Java","Angular","SpringBoot","API"];
  let loopIndex = 0;
  let loopLimit = skills.length;

  while(loopIndex < loopLimit){
    console.log(skills[loopIndex]);
    loopIndex++;
  }
}

console.log(showSkills());


// "do...while" loop inside the functions
// >> Sample: School items array
let schoolItems = ["Pen", "Pencil", "Scissor", "Notebook"];
let loopLimiter = schoolItems.length;
let loopTurn = 0;

function bringSchoolItems(vector){
  do{
    console.log(vector[loopTurn]);
    loopTurn++;
  }while(loopTurn < loopLimiter);
}

console.log(bringSchoolItems(schoolItems));