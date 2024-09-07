//adicionando variaveis/valores
let mediageral = 0
let qtdHomens = 0
let qtdMulheresAcimaDe7 = 0
let maiorNotaDeHomens = 0
let contador = 1

//criando meu while
while (contador <=10) {
  nota = parseInt(prompt("Digite a nota do " + contador + " aluno"))
  sexo = prompt("Escolha qual é seu sexo. (m/f)")

//adicionado estrutura de repetições
  if (sexo == "m") {
    if (nota > maiorNotaDeHomens) {
      maiorNotaDeHomens = nota;
    } 
    qtdHomens++
 }

  if (sexo == "f" && nota > 7) {
    qtdMulheresAcimaDe7++
  }

//calculando a media dos alunos
  mediageral += nota
  contador++
}

//fazendo a soma da media geral divida pela quantidade de alunos
mediageral = mediageral / 10

//dando um console log da mediageral, qtdhomens, qtdmulheres acima de 7 e maior nota de homens
console.log ("A média geral dos alunos foi: " + mediageral)
console.log ("A quantidade de homens cadastrados foi: " + qtdHomens)
console.log ("A quantidade de mulheres que tiveram nota acima de 7 foi: " + qtdMulheresAcimaDe7)
console.log ("A maior nota de Homens foi: " + maiorNotaDeHomens)



