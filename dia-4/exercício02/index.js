let nome =""
let idade =0
let temCarro = false
let temCarta =false


nome=prompt("Digite seu nome")
idade= parseInt (prompt("Digite sua idade"))
let opcaoCarta = prompt("Voce tem carta de motorista? (sim/nao)")
if (opcaoCarta ==="sim") {
   temCarta=true
}
let opcaoCarro = prompt ("Voce tem carro? (sim/nao)")
if (opcaoCarro === "sim") {
    temCarro= true
}


if (idade < 18 || !temCarta) {
 console.log (nome + " , voce nao pode dirigir")
}
else if 
    (idade >= 18 && temCarta && !temCarro) {
    console.log ("Voce tem carta, mas nao tem carro.")
}                                                                                              
else {
    console.log (nome + " , voce sera seu motorista")
}



