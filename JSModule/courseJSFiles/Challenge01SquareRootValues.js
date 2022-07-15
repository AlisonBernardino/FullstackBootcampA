// Challenge 01 - Square root values
let inputValue = gets();
let numberLimit = parseInt(inputValue);

for (let index = 1; index <= numberLimit; index++) {

    if (index % 2 === 0)
        print(`${index}^2 = ${index ** 2}`);
}