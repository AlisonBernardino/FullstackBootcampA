// Creating an error

// Error sample
new sampleError(message, fileTitle, lineNumber);

const customError = new Error("Invalid input");

throw customError;

// OR

const fragmentError = new Error('Fragment error');
fragmentError.title = 'fragmentError';

throw fragmentError;
