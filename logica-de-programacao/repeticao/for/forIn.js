// const cores = ['Verde', 'Amarelo', 'Azul', 'Branco']

// for (const index in cores) {
//     console.log(index, cores[index]);
// }

// for (const value of cores) {
//     console.log(value)
// }

// console.log(cores[0], cores[1], cores[2], cores[3])

// https://dontpad.com/fs-22-repeticao

// const numeros = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
// const tabuada = 2;

// for (let i = 0; i < numeros.length; i++) {
//     console.log(numeros[i] * 1, `Tabuada do ${numeros[i]}` )
//     console.log(numeros[i] * 2)
//     console.log(numeros[i] * 3)
//     console.log(numeros[i] * 4)
//     console.log(numeros[i] * 5)
//     console.log(numeros[i] * 6)
//     console.log(numeros[i] * 7)
//     console.log(numeros[i] * 8)
//     console.log(numeros[i] * 9)
//     console.log(numeros[i] * 10)
// }

// for (let i = 0; i < numeros.length; i++) {
//     console.log(numeros[i] * tabuada)
// }

// for (let i = 10; i > 0; i--) {
//     console.log(i)
// }

// let soma = 0;
// for (let i = 0; i < numeros.length; i++) {
//     soma += numeros[i];
// }
// console.log(soma)

const notas = [
    {
        materia: 'Matemática',
        nota: '7'
    },
    {
        materia: 'Português',
        nota: '8'
    },
    {
        materia: 'Química',
        nota: '5'
    }
]

// for (const index in notas) {
//     console.log(`${notas[index].materia}: ${notas[index].nota}`)
// }

// let soma = 0;

// for (const index in notas) {
//     soma += Number(notas[index].nota)
// }

// const media = (soma / notas.length).toFixed(2)

// console.log(media)


// for (const value of arr) {
//     console.log(value);
// }

const arr = [1, 2, 3, 4, 5, 6];

// let soma = 0;

// for (const value of arr) {
//     soma += value;
// }
// console.log(soma)

// const nome = 'Usuário';
// for (const letra of nome) {
//     console.log(letra);
// }


const clientes = [
    {
        nome: 'Cliente 1',
        valor: 450,
        quantidade: 5,
        produto: 'Produto 1'
    },
    {
        nome: 'Cliente 2',
        valor: 100,
        quantidade: 10,
        produto: 'Produto 2'
    },
    {
        nome: 'Cliente 3',
        valor: 250,
        quantidade: 5,
        produto: 'Produto 1'
    },
    {
        nome: 'Cliente 4',
        valor: 140,
        quantidade: 8,
        produto: 'Produto 4'
    },
]

/**
 * 1ª - O valor total gasto por clientes
 * 2ª - O valor total de todos os clientes juntos
 * 3ª - A quantidade total de itens vendidos todos juntos
 * */

let totalVendido = 0;
let quantidadeVendida = 0;

for (const cliente of clientes) {
    const total = (cliente.quantidade * cliente.valor).toLocaleString("pt-br", { style: "currency", currency: "BRL" });
    console.log(`${cliente.nome}: ${total}`);
    totalVendido += (cliente.quantidade * cliente.valor);
    quantidadeVendida += cliente.quantidade;
}

console.log(`Total vendido: ${totalVendido.toLocaleString("pt-br", { style: "currency", currency: "BRL" })}`);
console.log(`Quantidade vendida: ${quantidadeVendida}`);