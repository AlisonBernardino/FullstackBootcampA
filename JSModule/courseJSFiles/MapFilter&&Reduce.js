// Map, filter && reduce

// Map
// The ".map()" vs ".forEach()" method

// Using ".map()"
const sampleVector = [2, 4, 6, 8, 9];
console.log(sampleVector.map((element) => element * 2));

// Using ".forEach()"
const sampleArray = [1, 3, 5, 7, 8];
let multipliedArray = [];
multipliedArray = sampleArray.forEach((fragment) => fragment * 2);
console.log(multipliedArray);

// Note: The use difference is the auxiliary
// vector definition to show the resultant array
// after using the ".forEach()" method.


// Filter
// Sample:
const vehicles = ['Ferrari 458 Italia', 'Ferrari F40', 'Porsche Cayman S','BMW X1','Chevrolet Corvette', 'Chevrolet Camaro 2SS'];

console.log(vehicles.filter((specifiedCar) => vehicles.includes('Chevrolet','Ferrari')));
