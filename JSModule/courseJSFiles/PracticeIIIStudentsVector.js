// Practice III - Students vector
const currentStudents = [
  {
    name: "Victor",
    average: 9.5,
    group: "FrontEnd",
  },
  {
    name: "Melissa",
    average: 9.1,
    group: "BackEnd",
  },
  {
    name: "Anastacia",
    average: 10.0,
    group: "Database",
  },
];

function showAcceptedStudents(vector, classificationAverage) {
  let acceptedStudents = [];

  for (let index = 0; index < vector.length; index++) {
    const { name, average } = vector[index];
    if (vector[index].average >= classificationAverage) {
      acceptedStudents.push(vector[index].name);
    }
  }

  return acceptedStudents;
}

console.log(showAcceptedStudents(currentStudents, 6));
