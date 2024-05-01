// Entrada* > Procedimento > Saída* 
function hello() {
  console.log('Hello world!')
}

hello
hello()

function dobro(x) {
  return x * 2
}


console.log(dobro(4))

// A ordem dos parâmetros é importante
// Ao usar vários parâmetros, é recomendado deixar aqueles com valor padrão por último
function criarUsuario(nome, email, senha, tipo = "leitor") {
  const usuario = { nome, email, senha, tipo }
  console.log(usuario)
}

function novoUsuario(nome, tipo = "leitor", email, senha) {
  const usuario = { nome, email, senha, tipo }
  console.log(usuario)
}

criarUsuario("Isaac", "isaac@email.com", "1234")
novoUsuario("Isaac", "isaac@email.com", "1234")


// Funções com muitos parâmetros
// Ao criarmos uma função com muitos parâmetros,
// uma boa prática é substituí-los por um objeto
function parametrosDoJeitoErrado(nome, telefone, endereco, aniversario, email, senha) {
  // ...
}
function parametrosDoJeitoCerto(usuario) {
  // ...
}
// Além de facilitar na chamada da função, a ordem dos parâmetros se torna irrelevante
parametrosDoJeitoErrado("nome", "telefone", "endereco", "aniversario", "email", "senha")
const dadosDoUsuario = {
  nome: "",
  telefone: "",
  email: "",
  senha: "",
  aniversario: "",
  endereco: ""
}
parametrosDoJeitoCerto(dadosDoUsuario)


// Escopo de uma função

const pokemom = "mew"

function evoluir() {
  pokemom = "mewtwo"
}

console.log(pokemom)
evoluir()
console.log(pokemom)
