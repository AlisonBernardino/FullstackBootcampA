// Challenge 02 - Division modulo

let targetValue = gets();

let grabbedValue = parseInt(targetValue);

for (let index = 1; index < 10000; index++) {

    //TODO: Complete os espaços em branco com uma possível solução para o desafio

    if (index % targetValue == 2) {
        console.log(index);
    }
}

