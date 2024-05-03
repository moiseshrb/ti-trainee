const numbers = [10, 5, 20, 8, 15];

const maxNumber = numbers.reduce((max, current) => {
  if (current > max) {
    return current; // Se o número atual for maior que o máximo, retorna o número atual
  } else {
    return max; // Caso contrário, retorna o máximo atual
  }
}, numbers[0]); // Inicializa o máximo como o primeiro número do array

console.log("O maior número é:", maxNumber); // Saída: O maior número é: 20
