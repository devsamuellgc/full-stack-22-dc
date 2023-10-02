const input1 = document.getElementById("input1");
const input2 = document.getElementById("input2");
const btnCalc = document.getElementById("btnCalc");
const result = document.getElementById("resultado");

function sum(v1, v2) {
  return v1 * v2;
}

function showResult(resultado) {
  const finalResult = (result.innerText = resultado);
  return finalResult;
}

btnCalc.addEventListener("click", () => {
  let value1 = Number(input1.value);
  let value2 = Number(input2.value);
  const total = sum(value1, value2);
  return showResult(total);
});
