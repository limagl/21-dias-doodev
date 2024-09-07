let arrayA = []
let arrayNotas = []
let aluno = 0
let continuar = true
let mediaGeral = 0

while (continuar) {
    let nome = prompt ("Digite seu nome");
    let notas = parseInt(prompt("Digite a sua nota"));
    let respostas = prompt ("Deseja continuar?")

    arrayA [aluno] = nome
    arrayNotas [aluno] = notas

    aluno++;

    if (respostas == "n") {
        continuar = false
    }

    mediaGeral = notas / aluno
}

for (let i = 0; i < aluno; i++) {
    console.log(arrayA[i] + " tirou nota " + arrayNotas[i]);
}

console.log ("A media geral da classe foi de " + mediaGeral)

