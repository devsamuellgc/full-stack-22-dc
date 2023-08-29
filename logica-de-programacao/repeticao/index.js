//                 0, 1, 2, 3, 4, ..., 99
const arrNumber = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]
const arrNumber2 = [1, 2, 3, 4, 5]

for (let i = 0; i < arrNumber.length; i++) {
    // console.log(arrNumber[i] * 2);
}

for (let i = 0; i < arrNumber2.length; i++) {
    // console.log(arrNumber2[i]);
}

for (let i = 0; i < arrNumber.length; i++) {
    if (arrNumber[i] % 2 === 0) {
        // console.log(arrNumber[i]);
    }
}

const nome = 'Samuel' // ['s', 'a', 'm', 'u', 'e', 'l']

for (let i = 0; i < nome.length; i++) {
    if (nome[i] === 'a' || nome[i] === 'e' || nome[i] === 'i' || nome[i] === 'o' || nome[i] === 'u') {
        console.log(nome[i])
    }
}

/**
 * Tabuada: Crie um programa que imprima a tabuada de multiplicação de um número 
 * fornecido pelo usuário, indo de 1 a 10.
 * 
 * Sequência numérica personalizada: Peça ao usuário um número inteiro positivo e, 
 * em seguida, crie e imprima uma sequência que comece a partir desse número e 
 * vá até o dobro dele.
 */