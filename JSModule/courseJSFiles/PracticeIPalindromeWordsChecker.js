// Practice I - Palindrome words checker - Type A
function detectPalindrome(word) {
  if (!word) return "Error! No word detected. Please, try again.";

  return word.split("").reverse().join("") === word;
}

console.log(`The typed word palindrome status is = ${detectPalindrome("AWB")}`);

// Palindrome checker - Type B
function detectPalindromeByLetters(string) {
  if (!string) return "Error! Null or empty string. Please, try again.";

  for (let index = 0; string.length / 2; index++) {
    if (string[index] !== string[string.length - 1 - index]) {
      return false;
    }
  }

  return true;
}

console.log(`The typed word palindrome status is = ${detectPalindromeByLetters("Banana")}`);