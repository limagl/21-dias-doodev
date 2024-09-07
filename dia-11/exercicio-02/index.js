let arrayModelos = []
let arrayAnos = []
let arrayValores = []
let usuarios = 0
let continuar = true


while (continuar) {
    let carros = prompt ("Cadastre novos carros:")
    let ano = prompt ("Ano do carro:")
    let valor = parseInt (prompt("Valor do carro escolhido: "))
    let encerrar = prompt ("Deseja continuar? (s/n)")

    arrayModelos [usuarios] = carros
    arrayAnos [usuarios] = ano
    arrayValores [usuarios] = valor

    usuarios++;

    if (encerrar == "n") {
        continuar = false
    }
}

for (i = 0; i < usuarios; i++) {
    console.log ("Modelos: " + arrayModelos [i] , + "Anos : " + arrayAnos[i] + "Valor: " + arrayValores [i]);
}

console.log ( " Modelos: " + arrayModelos + " Anos: " + arrayAnos + " Valores: "+ arrayValores)