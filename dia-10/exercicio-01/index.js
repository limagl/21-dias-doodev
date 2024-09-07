let continuar = 0
let array = []
let arraycontador = 0
let indices = 0

let numero = prompt("Digite um numero inteiro e positivo")
while (continuar < 10) {
    let elementos = prompt ("Digite 10 numeros inteiros e positivos.")
    array [arraycontador] = elementos;

    if (elementos == numero) {
        indices++;
        arraycontador++
    }
    arraycontador++;
    continuar++
}
console.log ("Numero digitado pelo usuario " + numero);
console.log ("O indice foi de " + indices);
console.log ("Resultado final " + array);


