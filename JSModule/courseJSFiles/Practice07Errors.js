// Practice 07 - Errors
function validateVector(vector, value) {
    try {
        if (!vector && !value) {
            throw new ReferenceError("Invalid parameters. Please, re-check this information.");
        }

        if (typeof (vector) !== 'object') {
            throw new TypeError('The vector type must be an object.');
        }

        if (typeof (value) !== 'number') {
            throw new TypeError('The value must be a number.');
        }

        if (vector.length !== value) {
            throw new RangeError('Invalid size. Please, try again.');
        }

        return vector;
    }
    catch (error) {
        if (error instanceof ReferenceError) {
            console.log('Reference error detected.');
            console.log(error.message);
        } else if (error instanceof TypeError) {
            console.log('TypeError detected.');
            console.log(error.message);
        } else if (error instanceof RangeError) {
            console.log('Range error detected.');
            console.log(error.message);
        } else {
            console.log('Unknown error detected.', error);
        }
    }
}

console.log(validateVector([], 2));