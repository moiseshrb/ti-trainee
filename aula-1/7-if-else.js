const idade = prompt("Qual sua idade: ")

if(idade > 18) {
  alert("Pode entrar")
} else {
  alert(":(")

  if (idade < 12) {
    alert("Cadê seus pais?")
  }
}

// if(idade > 18) {
//   alert("Pode entrar")
// } else if(idade > 12) {
//     alert("Desculpe, não pode entrar")
// } else if(idade > 4) {
//   alert("Cadê seus pais?")
// } else {
//   alert("...")
// }

const resultado = condicao ? resultado_verdadeiro : resultado_falso
const resultadoConta = (6 === 6) ? "Verdade" : "Falso"