let velocidade = 80;

while (velocidade > 0) {
  console.log(`O carro está a ${velocidade} km/h`);
  velocidade -= 20;
  console.log("Diminuindo 20km/h");

  if (velocidade === 40) {
    console.log("Seguimos em " + velocidade);
    break;
  }
}

console.log("Vruuum");
