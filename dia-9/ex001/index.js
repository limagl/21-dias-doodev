let nome = prompt("Insira seu nome")
let idade = prompt("Insira sua idade")
let peso = prompt("Insira seu peso")
let altura = prompt ("Insira sua altura")
let profissão = prompt("Insira sua profissão")

console.log (`Olá ${nome}, você tem ${idade} anos, é ${profissão}, tem ${altura} e pesa ${peso}kg`);

if (idade >= 18) {
    console.log ("Está liberado para tomar umas geladas");
}if (idade < 18) {
    console.log ("Sem gelada pra você");
}

let meses = idade * 12
let semanas = idade * 52
let anos = idade * 365

let imc = peso / (altura * altura)

if (peso < 18.5) {
  console.log("Magreza, quando o resultado é menor que 18,5 kg/m².");
} else if (peso <= 24.9) {
  console.log("Normal, quando o resultado está entre 18,5 e 24,9 kg/m².");
} else if (peso <= 30) {
  console.log("Sobrepeso, quando o resultado está entre 24,9 e 30 kg/m².");
} else {
  console.log("Obesidade, quando o resultado é maior que 30 kg/m².");
}

let anoAtual = 2023
let anoNasc = anoAtual - idade
console.log ("Você nasceu no ano de " + anoNasc)

let anoVivido = anoNasc
let idadeAtual = 0

for (let anoVivido = anoNasc; anoVivido <= anoAtual; anoVivido++) {
    console.log (anoVivido + " - " + idadeAtual + " Anos de idade");
    idadeAtual++
}

let continuar;
do {
    continuar = prompt("Deseja inserir os dados novamente? (s/n)");
} while (continuar === "s");
