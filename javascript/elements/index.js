/**
 * document.createElement -> criar um elemento no documento
 * node.appendChild -> Adicionar o elemento como ÚLTIMO nó do pai
 * node.insertBefore -> inserir um elemento antes de outro elemento
 * node.removeChild -> remover um filho do elemento
 */

// Criando um elemento com uma tag p
const p = document.createElement("p");

// Recebe o elemento que tenha uma div chamada container
const container = document.getElementById("container");

// Adiciona o elemento p ao final do elemento container
container.appendChild(p);

// Adiciona o elemento p antes de um elemento específico
container.insertBefore(p, container.firstChild);

// Remove um elemento específico do nó
container.removeChild(p);

/**
 * Criar dois elementos
 * - h1
 * - p
 * Inserir primeiro o h1
 * Inserir o p abaixo do h1
 * Modifica o texto/html de ambos elementos
 * Excluir primeiro o p e depois o h1
 */

const h1 = document.createElement("h1");
const paragrafo = document.createElement("p");

container.appendChild(paragrafo);
container.insertBefore(h1, paragrafo);

h1.innerText = 'Título';
paragrafo.innerText = 'Texto';

container.removeChild(paragrafo);
container.removeChild(h1);
