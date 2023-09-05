function somaDezMaisDez() {
    const soma = 10 + 10;
    console.log(soma);
}

function soma(num1, num2) {
    const soma = num1 + num2;
    console.log(soma);
}

function somaNumArray(array) {
    let soma = 0;
    for (const value of array) {
        soma += value;
    }
    console.log(soma);
}

somaDezMaisDez()
soma(10, 100);
somaNumArray([15, 50, 10, 25, 30])


if(true) {
    let letra3 = 'B';
    letra3 = 'S';
    const letra2 = 'G';
    var letra = 'L';
    console.log(letra, letra2, letra3)
}
letra = 'J';
console.log(letra)