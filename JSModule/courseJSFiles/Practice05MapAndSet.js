// Practice V - Map and Set

// "Map" practice
function grabAdministrators(mapItem) {
  let administrators = [];
  for ([key, value] of mapItem) {
    if (value === "Administrator") {
      administrators.push(key);
    }
  }
  return administrators;
}

const users = new Map();

users.set("Jonas", "User");
users.set("Marcos", "Administrator");
users.set("Fernando", "User");
users.set("Marcella", "User");
users.set("Daiane", "Administrator");
users.set("Hellen", "Administrator");

console.log(users);
console.log(`Administrators = ${grabAdministrators(users)}`);

// "Set" practice
const valuesVector = [25, 25, 26, 45, 48, 48, 110, 119, 350, 350, 397, 506];

function findUniqueValues(vector) {
  const uniqueValuesSet = new Set(vector);

//   Using the "spread" technique
  return [...uniqueValuesSet];
}

console.log(`Unique values = `, findUniqueValues(valuesVector));
