let continuar = 1
let array = []
let contador = 0

while (continuar <= 5) {
    let numeros = parseInt(prompt("Digite 5 numeros pra mim."))
    array [contador] = numeros;

    continuar++
    contador++;
}


for (let i = array - 1; i >= 0; i--) {
    console.log("Saída: " + array[i]);
}   
