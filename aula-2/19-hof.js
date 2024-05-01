function calcular(a, b, operacao) {
  console.log("Realizando uma operação.")
  const resultado = operacao(a, b)
  return resultado
}

function somar(x, y) {
  console.log("Realizando soma.")
  return x + y
}

calcular(3, 5, somar)
console.log(somar)       // Retorna a própria função
console.log(somar(1, 1)) // Chama a função (retorna o resultado da função)

calcular(9, 2, function (x, y) {
  console.log("Realizando substração.")
  return x - y
})

//

function exibirElemento(elemento, indice, array) {
  console.log({
    elemento,
    indice,
    array
  })
}

const lista = ["Maçã", "Banana", "Laranja", "Limão", "Uva"]
// Forma tradicional
for (let i = 0; i < lista.length; i++) {
  exibirElemento(lista[i], i, lista)
}
// Forma funcional
lista.forEach(exibirElemento)
// Também poderia ser feito:
lista.forEach(function (elemento, indice, array) {
  console.log({
    elemento,
    indice,
    array
  })
})