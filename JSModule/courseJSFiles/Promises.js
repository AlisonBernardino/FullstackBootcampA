// Promises

// Sample structure
const promiseSample = new Promise((resolve, reject) => {
    window.setTimeout(() => {
        resolve(console.log('Promise solved successfully'));
    }, 1500);
});

// Promises + await 
const customPromise = new Promise((resolve, reject) => {
    window.setTimeout(() => {
        resolve('Solved');
    }, 1400);
});

await customPromise.then((result) => result + ' passing through a then method')
    .then((result) => result + ', process finished successfully.')
    .catch((error) => console.log(error.message));


// Async/await function
async function solvePromise() {
    const personalPromise = new Promise((resolve, reject) => {
        window.setTimeout(() => {
            resolve('Resolved.');
        }, 2700);
    });
    const resolved = await personalPromise
        .then((result) => result + 'passing through then item')
        .then((result) => result + 'and reached the final point.')
        .catch((error) => console.log(error.message));

    return resolved;
} 