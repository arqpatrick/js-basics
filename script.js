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