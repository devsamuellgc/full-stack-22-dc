const numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

numbers.map((number) => console.log(number * 2));

const temperature = [42, 33.5, 17, 9, -5, 12];

temperature.map((temp) => {
  const newTemp = temp * 1.8 + 32;
  return console.log(newTemp);
});

numbers.map((number) => {
  return console.log(number ** 2);
});

numbers.map((number) => {
  if (number % 2 === 0) {
    return console.log(number);
  }
});

const strings = ["Um", "Teste", "Outra string", "Mais um teste"];

strings.map((string) => {
  return console.log(string.length);
});
