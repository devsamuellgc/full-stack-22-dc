/**
 * Selecionar elementos no JS
 * document.getElementById('id'); -> retorna um elemento
 * document.getElementsByClassName('nome da classe'); -> retorna os elementos que possuem a classe
 * document.getElementsByTagName('nome da tag'); -> retorna os elementos que possuem a tag
 * document.querySelector('#text');
 * document.querySelectorAll('Query da busca');
 * .innerText -> Retorna o texto / valor do nosso elemento
 * .innerHtml -> Retorna o HTML do nosso elemento
 */

const texto = document.getElementById("text");
texto.innerHTML = "<div>Texto novo</div>";

/**
 * Criar uma função que ao iniciar o site
 * retorne na div container um lista de 1 até 5 ol.
 * - getElementById -> recebe em uma const
 * - Função -> criar a função
 * - InnerHTML -> ol com 5 li
 * - Chamar a função -> nomeFuncao()
 */

const container = document.getElementById("container"); // 1º ponto
// Função criada
function createList() {
  // Criar a lista ordenada com 5 itens
  container.innerHTML = `
    <ol>
        <li></li>
        <li></li>
        <li></li>
        <li></li>
        <li></li>
    </ol>
    `;
}
// Chamar a função
createList();
