const numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
const numbers2 = [6, 7, 8, 9, 15];
const temperature = [42, 33.5, 17, 9, -5, 12];
const strings = ["Um", "Teste", "Outra string", "Mais um teste"];

function doubleNumbers(arr) {
  const double = arr.map((value) => value * 2);

  return double;
}

// console.log(doubleNumbers(numbers));

function celciusToFahrenheit(arr) {
  const fahreinheit = arr.map((temp) => {
    const newTemp = (temp * 1.8 + 32).toFixed(2);
    return Number(newTemp);
  });

  return fahreinheit;
}

// console.log(celciusToFahrenheit(temperature));

function squareNumber(arr) {
  const squaredNumbers = arr.map((number) => {
    const squaredNumber = number ** 2;
    return squaredNumber;
  });

  return squaredNumbers;
}

// console.log(squareNumber(numbers));

function evenNumbers(arr) {
  const newArr = [];

  arr.forEach((number) => {
    if (number % 2 === 0) {
      return newArr.push(number);
    }
  });

  return newArr;
}

console.log(evenNumbers(numbers));

function stringsLength(arr) {
  const newArr = arr.map((string) => {
    return string.length;
  });

  return newArr;
}

console.log(stringsLength(strings));

const medidas = [
  { altura: 10, largura: 15 },
  { altura: 20, largura: 10 },
  { altura: 42, largura: 5 },
  { altura: 28, largura: 5 },
];

const datas = ["11/06/1997", "18/06/2002", "01/06/2000"];

const formattedDate = datas.map((data) => {
  const partDate = data.split("/");
  const dia = partDate[0];
  const mes = partDate[1];
  const ano = partDate[2];
  return console.log(`${mes}/${dia}/${ano}`);
});
