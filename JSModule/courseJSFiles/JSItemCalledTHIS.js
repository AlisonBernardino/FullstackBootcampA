// The "this" item (Called to access objects properties)
const product = {
    title: "Headset",
    mark: "Alienware",
    ID: 1,
    showCompleteTitle: function takeCompleteTitle(){
        return this.mark + " " + this.title;
    },
    showID: function takeID(){
        return this.ID;
    }
};

console.log(`Product title: ${product.showCompleteTitle()}`);
console.log(`Product ID: ${product.showID()}`);


// Handling the "this" item value 
// and the ".call()" method

const memberA = {
    occupation: "CEO",
};

const memberB = {
    occupation: "Check statistics",
};

function getData(){
    console.log(this.occupation);
}

console.log(getData.call(memberA));

// Using ".call" method with numbers
const currentElements = {
    valueA: 9,
    valueB: 4,
};

function subtractItems(itemX, itemY){
    console.log(this.valueA - this.valueB - itemX - itemY);
}

console.log(subtractItems.call(currentElements, 3, 1));


// Using the ".apply" method
const participant = {
    title: "Coder",
};

const stack = {
    title: "Fullstack",
}

function grabInformation(){
    console.log(this.title);
}

grabInformation.apply(stack);

// Difference between ".call" and ".apply" uses:
// We send the ".apply" parameters inside an array.

// Sample:
const defaultPack = {
    itemA: 6,
    itemB: 10,
};

function sumValues(elementX, elementY){
    console.log(this.itemA + this.itemB + elementX + elementY);
}

sumValues.apply(defaultPack, [4, 2]);

// The ".bind()" = Data attribution method
// Short description:
// ".bind" is responsible for cloning 
// function structure where it was called
// and parameter object value application

const grabNames = function () {
    return this.name;
};

let selectPerson = grabNames.bind({name: "Elias"});

console.log(selectPerson());