let confirmar = 1
let array = []
let contador = 0
let opcoes = prompt ("Quantos numeros você deseja inserir?")


while (confirmar <= 5) {
    let numeros = parseInt (prompt("Digite os números"));
    array [contador] = numeros

    contador++
    confirmar++
}

console.log ("Entrada: " + array)

for (let i = array.length -1; i >= 0; i--) {
    console.log ("Saida: " + array[i]);
}
