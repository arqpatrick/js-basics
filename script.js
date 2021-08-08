/*
JS

Valores, Operadores, Expressões, Palavra-chave e comentários
*/

console.log('Hello Word!')

// var, let e const

/* var
var nome = 'Patrick' // string
var idade = 35 // number
*/

/* let
let nome = 'Patrick' // posso alterar o valor
nome = 'Tatiana' // funciona, agora nome é Tatiana
*/

/* const
const nome = 'Patrick'
nome = 'Tatiana' // gera erro, pois é const e não pode mudar
*/

/* Tipagem Dinâmica
string - texto
number - número
boolean - true/false
array - grupo de dados
object - objeto
undefined - indefinido (ainda não designado)
null - nulo
*/

let nome = 'Patrick'
let sobrenome = 'Kottwitz'

//string concatenada
console.log(nome + ' ' + sobrenome)

//string literal
console.log(`${nome} ${sobrenome}`)

// number - float
let numero = 1.5

//boolean
let maior = 1 > 2
console.log(`1 é maior que 2? ${maior}`)

// array
let habilidades = ['Javascript', 'HTML', 'CSS', 'MongoDB']
console.log(habilidades)
console.log(`Quantos itens dentro de habilidades? ${habilidades.length}`)
console.log(`Em ordem, qual a 2ª habilidade? ${habilidades[1]}`)

// object
let pessoa = {
  nome: 'Patrick',
  sobrenome: 'Kottwitz',
  idade: 35,
  habilidades: ['JS', 'Next.js', 'Node.js']
}
console.log(pessoa)
console.log(`Nome: ${pessoa.nome}`)
console.log(`Sobrenome: ${pessoa.sobrenome}`)
console.log(`Nome Completo: ${pessoa.nome} ${pessoa.sobrenome}`)
console.log(`Idade: ${pessoa.idade} anos`)

// undefined
let endereco
console.log(endereco)

/* Operadores
adição: +
subtração: -
multiplicação: *
divisão: /
incremento: ++
decremento: --

atribuição += e -=
*/

let a = 10
let b = 5
let c = a + b
let d
let e = 2
let f = 6
console.log(`${a} + ${b} = ${a+b}`)
console.log(`${a} + ${b} = ${c}`)
console.log(`${a} - ${b} = ${a-b}`)
console.log(`${a} * ${b} = ${a*b}`)
console.log(`${a} / ${b} = ${a/b}`)
console.log(`${a} ++ = ${++a}`)
console.log(`${b} -- = ${--b}`)
console.log(`${a} + d = ${a+d} - (Not a Number)`)
console.log(`Atribuição de 'e + 7', sendo 'e = ${e}'. Então 'e += 7' é o mesmo que 'e = e + 7'. 'e = ${e += 7}'`)
console.log(`Atribuição de 'f - 4', sendo 'f = ${f}'. Então 'f -= 4' é o mesmo que 'f = f - 4'. 'f = ${f -= 4}'`)

/* Operadores Lógicos
== igualdede de valores
=== igualdade de valores e tipos
!= diferença de valores
!== diferença de valores e tipos
> maior que
< menor que
*/

let g = 10
let h = 5
let i = '10'
let j = 5
console.log(`${g} == ${h}? ${g == h} - retorno de boolean, igual a`)
console.log(`${g} == ${i}? ${g == i} - retorno de boolean verdadeiro, mas nesse caso o segundo 10 é string, então deu true`)
console.log(`${g} === ${i}? ${g === i} - retorno de boolean, agora comparando o numero e também o tipo, dá false`)
console.log(`${g} != ${i}? ${g != i} - retorno de boolean falsa porque os valores iguais apesar de tipos diferentes`)
console.log(`${g} !== ${i}? ${g !== h} - retorno de boolean verdadeira porque os valores são iguais mas os tipos direfentes`)
console.log(`${g} > ${h}? ${g > h} - retorno de boolean, maior que`)
console.log(`${g} < ${h}? ${g < h} - retorno de boolean, menos que`)
console.log(`${h} < ${j}? ${h < j} - retorno de boolean, maior que`)
console.log(`${h} <= ${j}? ${h <= j} - retorno de boolean, maior ou igual`)

/* CONDICIONAIS
if - se
*/

let idade = 18//prompt('Digite sua idade')

if (idade >= 18) {
  document.write('Ok, você é maior de idade')
} else if (idade == 15) {
  document.write('Você têm 15 anos')
} else {
  document.write('Você não pode acessar!')
}

document.write('<br>')

/*

|| - ou
&& - e

*/

let inputNota1 = 10 //prompt('Digite a primeira nota')

let inputNota2 = 8 //prompt('Digite a segunda nota')

let nota1 = parseInt(inputNota1)
let nota2 = parseInt(inputNota2)

let mediaMinima = 7

let media = (nota1 + nota2)/2

if (media >= mediaMinima) {
  document.write('Ok, passou de ano')
} else if (media < mediaMinima) {
  document.write('Ops, não passou de ano!')
}

document.write('<br>')

if (media >= mediaMinima && media === 10) {
  document.write('Nossa! Você foi muito bem, continue assim!')
} else if (media >= mediaMinima && media === 9) {
  document.write('Você mandou bem! Vamos tentar chegar a 10!')
}

/* 
    CONDICIONAIS - SWITCH
*/

let diaSemana = new Date().getDay()

console.log(diaSemana)

let nomeDiaSemana

switch(diaSemana) {
  case 0:
    nomeDiaSemana = 'Domingo'
    break;
  case 1:
    nomeDiaSemana = 'Segunda-feira'
    break;
  case 2:
    nomeDiaSemana = 'Terça-feira'
    break;
  case 3:
    nomeDiaSemana = 'Quarta-feira'
    break;
  case 4:
    nomeDiaSemana = 'Quinta-feira'
    break;
  case 5:
    nomeDiaSemana = 'Sexta-feira'
    break;
  case 6:
    nomeDiaSemana = 'Sábado'
    break;
}

document.write('<br>')
document.write(`O dia da semana é ${nomeDiaSemana}`)
document.write('<br>')

/*
  LAÇOS DE REPETIÇÕES - FOR

  for (let contador = 0; contador <= 5000; contador++) {
  document.write('Hello World')
}

*/

for (let contador = 0; contador <= 50; contador++) {
  document.write(`Hello Word - ${contador} <br>`)
}

// EXEMPLO 01 - SELEÇÃO DE ANO
// criar um campo de SELEÇÃO DE ANO com laço FOR
// atribuir uma 'id' ao SELECT no html, que será utilizada para manipular os options e adicionar os anos através de programação javascript

let opcoes

for (let contadorAno = 2021; contadorAno >= 1900; contadorAno--) {
  opcoes += `<option>${contadorAno}</option>`
} //significa: [opcoes = opcoes + `<option>${contadorAno}</option>`] - (para concatenar as opções, senão ela subscreve e aparece só a última)
// para inverter a ordem do números: for (let contadorAno = 1900; contadorAno <= 2021; contadorAno++)

document.querySelector('#ano').innerHTML = opcoes

// EXEMPLO 02 - SELEÇÃO DE CLIENTES
//

let lista = '' //definir lista em branco, pois o <li> geraria undefined no primeiro resultado

let clientes = ['Patrick', 'Tatiana', 'Paulo', 'Francinne', 'Eva Vitória', 'Eduarda']

for (let contadorClientes = 0; contadorClientes <= clientes.length -1; contadorClientes++) { // [clientes.length -1] para não gerar undefined no ultimo campo. O length conta o total, mas o java começa no 0, então sempre ficaria um resultado a mais na busca
  lista += `<li>${clientes[contadorClientes]}</li>`
}

document.querySelector('#listaClientes').innerHTML = lista

/*
  LAÇO DE REPETIÇÃO - FOR OF
*/

let clientesPerfil = [
  {
    nome: 'Patrick',
    idade: 35,
    linguagens: ['javascript', 'html', 'css']
  },
  {
    nome: 'Tatiana',
    idade: 36,
    linguagens: ['javascript', 'c++', 'python']
  },
  {
    nome: 'Cristine',
    idade: 34,
    linguagens: ['c', 'c#', 'sql']
  }
]

// utilizando o laço FOR seria assim:

for (let contadorClientesPerfil = 0; contadorClientesPerfil < clientesPerfil.length; contadorClientesPerfil++) { //se colocar [contadorClientesPerfil < clientesPerfil.length] sem <= não precisa do [-1]
  console.log(clientesPerfil[contadorClientesPerfil].nome) //vai correr pelo nome do contadorClientePerfil e listar todos
}

// nesse caso, o laço mais indicado seria o FOR OF

for (let clienteMelhorSistema of clientesPerfil) {
  console.log(clienteMelhorSistema.nome)
  console.log(clienteMelhorSistema.idade)
}

// EXEMPLO DE LISTA DE CLIENTES COM INFORMAÇÕES
// deixar lindão agora

let htmlClientes = '' //variável para armazenar a lista de clientes que aparecerá no site

for (let clientesCompleto of clientesPerfil) { // criação de variável clientesCompleto que vai percorrer a lista de clientesPerfil

  let listaLinguagens = '' // criação de variável que vai listar as linguagens separadamente

  for (let linguagem of clientesCompleto.linguagens) { //criação de variável linguagem que vai percorrer as linguabens de clientesCompleto
    listaLinguagens += `<li>${linguagem}</li>` // formatação das linguabens e armazenamento em listaLinguagens para imprimir depois na lista
  }
  
  htmlClientes += ` 
    <li>
      <b>Nome:</b> ${clientesCompleto.nome}<br>
      <b>Idade:</b> ${clientesCompleto.idade}<br>
      <b>Linguagens</b><br>
      <ul>
        ${listaLinguagens}
      </ul>
    </li>
  ` // formatação de htmlClientes para aparecer no HTML

}

document.querySelector('#listaClientesCompleta').innerHTML = htmlClientes // função que imprime htmlClientes na div id #listaClientesCompleta

/* LAÇO DE REPETIÇÃO - WHILE
  Cuidado! se não colocar o incremento, entra em loop infinito e trava o navegador
  isso é chamdo de STACK OVERFLOW (estouro da pilha, ele empilha o código até esgotar a memória do computador)
*/

let contadorExemplo = 0

while (contadorExemplo < 100) {
  console.log('Hello world')

  contadorExemplo ++
}

/*  FUNÇÕES
deixar algo guardado para executar apenas quando for solicitado
*/

// cria a função:

function nomeDaFuncao () {
  console.log('Hello world - da função')
}

//agora chama a função:

nomeDaFuncao()

// função pode receber PARÂMETROS/ARGUMENTOS

function escreverNoConsole (mensagem) {
  console.log(mensagem)
}

escreverNoConsole('Olá Mundo')
escreverNoConsole('aqui eu coloco a conteúdo do parâmetro "mensagem"')
escreverNoConsole('e posso chamar a função quando quiser com o parãmentro que quiser')

// função com dois parâmetros

function mensagemComDoisParametros (parametro1, nome) {
  console.log(`Olá ${nome}, ${parametro1}`)
}

mensagemComDoisParametros('seja muito bem vindo!', 'Patrick')

/* FUNÇÕES JÁ EXISTENTES - exemplos

  parseInt('12') - transforma em número
  console.log('argumento') - imprime argumento no console
  document.querySelector('#elementoNaTela') - pega o elemento na tela para executar alguma coisa

*/

/*  RETURN
  com o return posso utilizar o retorno onde eu quiser
*/

function soma (num1, num2) {
  return num1 + num2
}

let resultado = soma(10, 5)

console.log(resultado)

document.write(resultado)

function milhasEmKm (milhas) {
  let km = milhas * 1.6

  return km
}

let resultadoKm = milhasEmKm (150)

document.write('<br>')

document.write(resultadoKm)