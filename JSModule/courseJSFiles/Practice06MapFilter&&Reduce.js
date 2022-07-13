// Practice 06 - Map, filter && reduce

// MAP practice (01 exercise completed)
// Sample A >>> Using normal functions
const pineapple = {
  value: 1,
};

const strawberry = {
  value: 2,
};

function mapItemsWithTheThisItem(vector, thisArgument) {
  return vector.map(function (element) {
    return element * this.value;
  }, thisArgument);
}

const valuesVector = [2, 4];

console.log(
  "this ==> Pineapple",
  mapItemsWithTheThisItem(valuesVector, pineapple)
);
console.log(
  "this ==> strawberry",
  mapItemsWithTheThisItem(valuesVector, strawberry)
);

// Sample B >>> Without the ".this" item + arrow functions
function mapWithoutTheThisItem(array) {
  return array.map((functionFragment) => {
    return functionFragment * 3;
  });
}

const integersArray = [1, 3, 5, 7];

console.log(mapWithoutTheThisItem(integersArray));

// Note: The "integersArray" item wasn't modified:
console.log(`Untouched array = ${integersArray}`);

// FILTER practice (01 exercise completed)
function filterFerrariCars(vector) {
  return vector.filter(runCallback);
}

function runCallback(element) {
  return element.includes("Ferrari");
}

const vehiclesVector = [
  "Ferrari Maranello",
  "Ferrari 458 Italia",
  "Ford GT",
  "BMW X2",
  "Subaru Impreza",
];

console.log(filterFerrariCars(vehiclesVector));

// REDUCE practices + arrow functions (02 exercises completed)
// Exercise 01
function subtractValues(array) {
  return array.reduce((previousValue, currentValue) => {
    console.log({ previousValue });
    console.log({ currentValue });
    return previousValue - currentValue;
  });
}

const numbersVector = [3, 5, 3];

console.log(subtractValues(numbersVector));

// Exercise 02
const objectsList = [
  {
    title: "Brush",
    price: 4.99,
  },
  {
    title: "Flashlight",
    price: 8.99,
  },
  {
    title: "Desinfectant spray",
    price: 3.99,
  },
  {
    title: "Hatchet",
    price: 17.99,
  },
];

const availableBalance = 150.0;

function calculateBalanceAfterPurchase(specificValue, itemsList) {
  return objectsList.reduce((previousItem, currentItem, loopIndex) => {
    console.log(`Round 0${loopIndex}:`);
    console.log({ previousItem });
    console.log({ currentItem });
    return previousItem - currentItem.price;
  }, availableBalance);
}

console.log(calculateBalanceAfterPurchase(availableBalance, objectsList));