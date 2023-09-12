/**
 * Contagem de vogais: Escreva uma função que conte o número de vogais
 * em uma string e retorne o resultado.
 * - Recebe uma string por parâmetro
 * - Contar o número de vogais presentes
 * - For
 * - Console.log na quantidade de vogais existentes
 *
 * Média de notas: Crie uma função que aceite uma matriz/lista(array)
 * de notas e calcule a média das notas usando um loop for of.
 * - Recebe um array como parâmetro
 * - 10 notas
 * - Média das 10 notas
 * - For of
 * - Console.log na média
 *
 * Propriedades do objeto: Escreva uma função que aceite um objeto
 * como argumento e use um loop for in para listar todas as
 * propriedades e seus valores.
 * - Recebe um objeto como parâmetro
 * - Objeto vai ter nome, idade e email
 * - Console.log em todas as propriedades de cada objeto
 * - For in
 *
 * Filtrar objetos: Crie uma função que aceite um array de objetos que contém
 * informações de alunos (nome, idade, nota) e use um loop for in
 * para filtrar e listar apenas os alunos que obtiveram uma nota
 * superior a um determinado valor.
 * - Recebe um objeto
 * - Propriedades (nome, idade, nota)
 * - For in para o loop
 * - Console.log do nome, idade e a nota dos alunos com
 *   nota maior ou igual a 7
 */

// Funções nomeadas, arrow function e funções anônimas
const somarArrow = () => {
  console.log(5 + 5, "Arrow");
};

const somarAnonimo = function () {
  console.log(5 + 5, "Anônima");
};

// Parâmetros
function somarNumerosFora(valor1, valor2, nome) {
  console.log(valor1 + valor2, "Parâmetro", nome);
}

function somar() {
  console.log(5 + 5, "Nomeada");
}

/**
 * Questão 1
 * Contagem de vogais: Escreva uma função que conte o número de vogais
 * em uma string e retorne o resultado.
 * - Recebe uma string por parâmetro
 * - Contar o número de vogais presentes
 * - For
 * - Console.log na quantidade de vogais existentes
 */

function contagemVogais(palavra) {
  let total = 0;
  for (const letra of palavra) {
    if (
      letra === "a" ||
      letra === "e" ||
      letra === "i" ||
      letra === "o" ||
      letra === "u"
    ) {
      total += 1;
    }
  }
  console.log(total);
}

// contagemVogais("samuel");

/**
 * Questão 2
 * Média de notas: Crie uma função que aceite uma matriz/lista(array)
 * de notas e calcule a média das notas usando um loop for of.
 * - Recebe um array como parâmetro
 * - 10 notas
 * - Média das 10 notas
 * - For of
 * - Console.log na média
 */

function calculoMediaNotas(notas) {
  let total = 0;
  for (const nota of notas) {
    total += nota;
  }
  const media = total / notas.length;
  console.log(media);
}

const notas = [10, 5, 7, 8, 2, 8, 10, 2, 1, 0];

// calculoMediaNotas(notas);

/**
 * Exercício 3
 * Propriedades do objeto: Escreva uma função que aceite um objeto
 * como argumento e use um loop for in para listar todas as
 * propriedades e seus valores.
 * - Recebe um objeto como parâmetro
 * - Objeto vai ter nome, idade e email
 * - Console.log em todas as propriedades de cada objeto
 * - For in
 */

const array = [0, 2, 45, 1];

function listarObjeto(pessoa) {
  for (const prop in pessoa) {
    console.log(pessoa[prop]);
  }
}

const pessoa = {
  nome: "Samuel",
  idade: 26,
  email: "samuel@hotmail.com",
};

// listarObjeto(pessoa);

const alunos = [
  {
    nome: "Aluno 1",
    idade: 26,
    nota: 2,
  },
  {
    nome: "Aluno 2",
    idade: 26,
    nota: 10,
  },
  {
    nome: "Aluno 3",
    idade: 26,
    nota: 7,
  },
  {
    nome: "Aluno 4",
    idade: 26,
    nota: 5,
  },
];

function listarAlunosAprovados(alunos) {
  for (const index in alunos) {
    const aluno = alunos[index];
    if (aluno.nota >= 7) {
      console.log(`O ${aluno.nome} passou com a nota ${aluno.nota}`);
    }
  }
}

// listarAlunosAprovados(alunos);

const vendas = [
  {
    id: 1,
    produto: "Computador",
    quantidade: 15,
    valor: 2900,
  },
  {
    id: 2,
    produto: "Monitor",
    quantidade: 10,
    valor: 400,
  },
  {
    id: 3,
    produto: "Cadeira",
    quantidade: 5,
    valor: 799,
  },
  {
    id: 4,
    produto: "Teclado",
    quantidade: 19,
    valor: 130,
  },
  {
    id: 5,
    produto: "Mouse",
    quantidade: 30,
    valor: 70,
  },
];

/**
 * Função - parâmetro (array de objetos)
 * Calcular o valor total de vendas realizado de todos os protudos juntos
 * Calcular o valor total por produto
 * console.log(Valor de venda mensal: R$ VALOR TOTAL de todos os produtos)
 * console.log(Valor de venda PRODUTO: R$ VALOR TOTAL por PRODUTO)
 */

function somaTotalVendas(produtos) {
  let total = 0;
  for (const produto of produtos) {
    let soma = produto.quantidade * produto.valor;
    total += soma;
  }
  console.log(`Valor de venda mensal: R$ ${total} de todos os produtos juntos`);
}

function somaTotalPorProduto(produtos) {
  for (const produto of produtos) {
    let total = produto.quantidade * produto.valor;
    console.log(`Valor de venda ${produto.produto}: R$ ${total}`);
  }
}

function apresentarResultadosVendas(vendasRealizadas) {
  somaTotalVendas(vendasRealizadas);
  somaTotalPorProduto(vendasRealizadas);
}

apresentarResultadosVendas(vendas);
