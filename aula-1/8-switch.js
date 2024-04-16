const resultado = prompt("Escolha um número de 1 a 7: ")
resultadoInteiro = parseInt(resultado)

switch(resultadoInteiro) {
  case 1: 
    alert("Você ganhou uma BMW 320i")
  case 5: 
    alert("Você ganhou um Fiat Uno")
  case 7: 
    alert("Você ganhou um Chevrolet Onix")
  default:
    alert("Você não ganhou nada")
}

