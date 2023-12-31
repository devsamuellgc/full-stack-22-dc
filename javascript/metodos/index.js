/**
 * Array é uma tipo de dado que permite guardar
 * mais de um valor na mesma variável.
 */
//                 0        1
const frutas = ["Maçã", "Banana"];

// Length é uma propriedade que contabiliza a
// quantidade total de itens no array.
// console.log(frutas.length);

/**
 * Para acessar um item do array é necessário
 * colocar o index do mesmo entre colchetes.
 */
// console.log(frutas[0]);

// Acessar o último elemento do array
// console.log(frutas[frutas.length - 1]);

// frutas.map((fruta, index) => {
//   return console.log(fruta, index);
// });

//https://dontpad.com/fs-22-map

// Push, pop, unshift, shift
// console.log(frutas);

// Envia o valor para o final do array
frutas.push("Abacaxi");
// console.log(frutas);

// Exclui o último elemento do array
// frutas.pop();
// console.log(frutas);

// Exclui o primeiro elemento do array
// frutas.shift();
// console.log(frutas);

// Adiciona um valor na primeira posição do array
// frutas.unshift("Uva");
// console.log(frutas);
