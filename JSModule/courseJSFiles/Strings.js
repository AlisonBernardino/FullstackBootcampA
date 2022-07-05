// Strings functionality
let title = 'God of War 4';
let expansion = ' - Ragnarok';
console.log(typeof(title));
console.log(typeof(expansion));
let completeTitle = title.concat(expansion);
console.log(completeTitle);
console.log(typeof(completeTitle));
console.log(title.length);
console.log(expansion.length);
console.log(completeTitle.length);

// Concatenating - Form 02
let gameCompleteTitle = `${title}${expansion}`;
console.log(gameCompleteTitle);

// Difference between a string variable
// and a string type object

// "String" type variable
let consoleItem = "Joystick";
console.log(typeof(consoleItem));

// "String" type object
let consoleModel = new String("Playstation 5");
console.log(typeof(consoleModel));

// An empty string and it's value data type
let emptyVariable = '';
console.log(typeof(emptyVariable));

// Using the "split" method
let welcomeMessage = 'Welcome, user';
console.log(welcomeMessage.split(""));

// ".includes" method
console.log(welcomeMessage.includes("a"));

// .startsWith() method
console.log(welcomeMessage.startsWith("W"));

// .endsWith() method
console.log(welcomeMessage.endsWith("d"));

// .replace() method
console.log(welcomeMessage.replace("user","guest"));