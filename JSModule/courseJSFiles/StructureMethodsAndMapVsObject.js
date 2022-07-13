// Collections - Structure, methods 
// and ".map()" vs "Object"
const sampleMap = new Map();

console.log(sampleMap.set('sword', 'weapon'));

console.log(sampleMap.get("sword"));

console.log(sampleMap.delete("sword"));

console.log(sampleMap.get("sword"));

// ".set()" vs "Arrays"
const sampleVector = [1, 1, 3, 3, 5, 6, 7, 4, 2];

const sampleSet = new Set(sampleVector);
console.log(sampleSet);

// To add, check and delete "Set" items
// Add
sampleSet.add(15);
sampleSet.add(18);
console.log(sampleSet);

// Check
console.log(sampleSet.has(15));

console.log(sampleSet.has(32));

// Delete
console.log(sampleSet.delete(18));
