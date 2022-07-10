// Practice IV - Age calculator

function calculateAge(detectedYears) {
  return `In ${detectedYears} years, 
    ${this.name} will be ${this.age + detectedYears}
    years old.`;
}

const person01 = {
  name: "Anthony",
  age: 28,
};

const person02 = {
  name: "Manuella",
  age: 21,
};

console.log(calculateAge.call(person01, [10]));
console.log(calculateAge.call(person02, [15]));