function overwriteOddValues(vector) {
  if (!vector)
    return "Error. Null or empty vector detected. Please, try again.";
  if (!vector.length)
    return "Error. Null or empty vector detected. Please, try again.";
  for (let loopCounter = 0; loopCounter < vector.length; loopCounter++) {
    if (vector[loopCounter] === 0) {
      console.log("The value is already 0 (zero)");
    } else if (vector[loopCounter] % 2 === 1) {
      vector[loopCounter] = "X";
    }
  }

  return vector;
}

let oddAndEvenArray = [2, 4, 5, 6, 8, 9, 11, 12];
console.log(
  `"oddAndEvenArray" with ODD values replaced by "X" = ${overwriteOddValues(
    oddAndEvenArray
  )}`
);
