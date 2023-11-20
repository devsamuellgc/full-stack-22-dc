const inputName = document.getElementById("name");
const btnSend = document.getElementById("btn-send");
const content = document.getElementById("content");

const convidados = [
  {
    name: "Samuel",
  },
  {
    name: "Bernardo",
  },
  {
    name: "Ariel",
  },
  {
    name: "Moana",
  },
];

function editarConvidado(id) {
  const convidado = convidados.find((convidado, index) => index === id);
  inputName.value = convidado.name;
}

function deletarConvidado(id) {
  convidados.splice(id, 1);
  content.innerHTML = "";
  convidados.map((convidado, index) => {
    return (content.innerHTML += `
              <li>
                  ${convidado.name}
                  <div class="btns-action">
                      <button onclick="editarConvidado(${index})">
                          Editar
                      </button>
                      <button onclick="deletarConvidado(${index})">
                          Excluir
                      </button>
                  </div>
              </li>
          `);
  });
}

window.addEventListener("load", () => {
  convidados.map((convidado, index) => {
    return (content.innerHTML += `
            <li>
                ${convidado.name}
                <div class="btns-action">
                    <button onclick="editarConvidado(${index})">
                        Editar
                    </button>
                    <button onclick="deletarConvidado(${index})">
                        Excluir
                    </button>
                </div>
            </li>
        `);
  });
});

/**
 * splice
 * find
 * filter
 * foreach
 * map
 * includes
 * reduce
 */