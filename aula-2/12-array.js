// Array de números
const numbers = [1, 2, 3, 4, 5];
numbers[5] = 121 
const numbers2 = numbers.pop()
console.log(numbers2)
console.log(numbers)

// Array de strings
const fruits = ['maçã', 'banana', 'laranja', 'uva'];
const fruitsNinja = fruits.shift()
const fruitsYellow = fruits.unshift('Cajá', 'Melão')
console.log(fruits)
console.log(fruitsNinja)

// Array de objetos
const persons = [
  { nome: 'João', idade: 30 },
  { nome: 'Maria', idade: 25 },
  { nome: 'Pedro', idade: 35 }
];

persons.push({
  nome: 'Jonmar', idade: 99
})

// Array misto
const mixedArray = [1, 'dois', true, { chave: 'valor' }];

// Impressão dos arrays
console.log('Array de números:', numbers);
console.log('Array de frutas:', fruits);
console.log('Array de pessoas:', persons);
console.log('Array misto:', mixedArray);

const array = [1, 2, 3, 4, 5];
array.splice(2, 1, 'a', 'b'); // indice, números a serem removidos, ...elememento a serem adicionados*
console.log(array); // Saída: [1, 2, 'a', 'b', 4, 5]

const array9 = [1, 2, 3, 4, 5];
const newArray = array9.slice(1, 3); // inicio, final*  e aceitam parâmetros negativos
console.log(newArray); // Saída: [2, 3]

const array99 = [1, 2, 3];
array99.forEach(item => console.log(item));
// Saída:
// 1
// 2
// 3


