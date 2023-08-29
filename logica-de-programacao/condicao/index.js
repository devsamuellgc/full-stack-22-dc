/**
 * Exercícios
 * Escreva um programa que verifique se um número é positivo, negativo ou zero.
 * Escreva um programa que determine se um número é par ou ímpar.
 * Escreva um programa que calcule o IMC (Índice de Massa Corporal) 
   de uma pessoa com base em seu peso e altura. 
   O programa deve exibir uma mensagem informando se a pessoa 
   está abaixo do peso, com peso normal, com sobrepeso ou obesa.
   IMC = peso / (altura * altura)
    RESULTADO	        SITUAÇÃO
    Abaixo de 17	    Muito abaixo do peso
    Entre 17 e 18,49	Abaixo do peso
    Entre 18,5 e 24,99	Peso normal
    Entre 25 e 29,99	Acima do peso
    else if (resultado > 25 && resultado < 30)
    Entre 30 e 34,99	Obesidade I
    Entre 35 e 39,99	Obesidade II (severa)
    Acima de 40	        Obesidade III (mórbida)

 */

const peso = 75.5;
const altura = 1.70
const resultado = (peso / (altura * altura)).toFixed(2);

if (resultado < 17) {
    console.log('Muito abaixo do peso', resultado)
} else if (resultado >= 17 && resultado < 18.5) {
    console.log('Abaixo do peso', resultado)
} else if (resultado >= 18.5 && resultado < 25) {
    console.log('Peso normal', resultado)
} else if (resultado >= 25 && resultado < 30) {
    console.log('Acima do peso', resultado)
} else if (resultado >= 30 && resultado < 35) {
    console.log('Obesidade I', resultado)
} else if (resultado >= 35 && resultado < 40) {
    console.log('Obesidade II (severa)', resultado)
} else {
    console.log('Obesidade III (mórbida)', resultado)
}

const number = 0;

if (number === 0) {
    console.log('Valor: ', number)
} else if (number > 0) {
    console.log('Valor positivo: ', number)
} else {
    console.log('Valor negativo: ', number)
}

if (number === 0) {
    console.log('Valor nulo')
} else if (number % 2 === 0) {
    console.log('Número par:', number)
} else {
    console.log('Número impar:', number)
}

/**
 * Verificação de Ano Bissexto:
 * Crie um programa que verifica se um ano fornecido pelo usuário é bissexto. 
 * Anos bissextos são divisíveis por 4, mas não por 100, a menos que também 
 * sejam divisíveis por 400.
 * 
 * Verificação de Triângulo:
 * Escreva um programa que solicita três comprimentos e determina se esses 
 * comprimentos podem formar um triângulo. 
 * Se a soma de quaisquer dois lados for maior que o terceiro lado, 
 * é possível formar um triângulo
 * 
 * Cálculo de Desconto:
 * Crie um programa que calcula o preço final de um produto após aplicar um desconto. 
 * Se o valor original do produto for maior do que $100, aplique um desconto de 10%. 
 * Caso contrário, não aplique nenhum desconto.
 */

const ano = 2016;

if (ano % 4 === 0 && ano % 100 !== 0) {
    console.log('Ano bissesto')
} else if (ano % 400 === 0) {
    console.log('Ano bissesto')
} else {
    console.log('Não é ano bissesto')
}

const trianguloA = 10;
const trianguloB = 11;
const trianguloC = 12;

if ((trianguloA + trianguloB) > trianguloC) {
    console.log('Triângulo')
} else if ((trianguloB + trianguloC) > trianguloA) {
    console.log('Triângulo')
} else if ((trianguloA + trianguloC) > trianguloB) {
    console.log('Triângulo')
} else {
    console.log('Não é triângulo')
}

const valor = 120;
if (valor > 100) {
    console.log('Valor com desconto: ', valor * 0.9)
} else {
    console.log('Não recebe desconto')
}