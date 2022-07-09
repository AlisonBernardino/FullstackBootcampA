// Objects
let sampleObject = {}
console.log(typeof(sampleObject));

// Adding items to the object
sampleObject.title = "Ferrari";
sampleObject.model = "458 Italia";
console.log(sampleObject);

// Checking the object content
console.log(Object.values(sampleObject));

// Checking the object keys
console.log(Object.keys(sampleObject));

// Defining an object - Form B
let fruit = {
    title: "Watermelon",
    weight: "2kg",
    externalColor: "Green",
    internalColor: "Red"
}

// Setting an object attribute - Form B
fruit["texture"] = "Flat";

console.log(fruit);

// Transforming a variable into a attribute
let fruitSizeInCM = "sizeInCM";
fruit[fruitSizeInCM] = 26.5;
console.log(fruit);