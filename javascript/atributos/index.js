/**
 * element.getAttribute(attributeName) 
  -> retorna o valor do atributo
 * element.setAttribute(attributeName, value) 
  -> configura um novo valor pro atributo
 * element.removeAttribute(attributeName) 
  -> remove o atributo
 */

const container = document.getElementById("container");
const p = document.createElement("p");
container.appendChild(p);
p.innerText = "Texto";

p.setAttribute("class", "texto"); // -> class="texto"
p.setAttribute("id", "paragrafo"); // -> id="paragrafo"

// Recebe o VALOR do atributo class
console.log(p.getAttribute("class"));
// Recebe o VALOR do atributo id
console.log(p.getAttribute("id"));

// Removendo o atributo id
p.removeAttribute("id");
