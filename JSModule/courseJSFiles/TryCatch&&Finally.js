// Try, catch && finally

function checkItem(string) {
  if (!string) throw 'Invalid string item';
  return string === string.split('').reverse().join('');
}

function treatWithThrowCatch(string) {
  try {
    checkItem(string);
  } catch (error) {
    throw error;
  } finally {
    console.log(`Received string: ` + string);
  }
}

treatWithThrowCatch('');
