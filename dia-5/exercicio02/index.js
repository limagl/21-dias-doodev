let valor
let quantidade
let escolhas = prompt ("Escolha entre essas opções: \p1 Abastecer com gasolina \p2 Abastecer com álcool \p3 Calibrar os pneus")

switch (escolhas) {
  case "1": 
    valor = parseInt (prompt("Digite o valor que voce quer colocar"))
    quantidade = valor / 5
    console.log (quantidade + " litros De gasolina abastecidos" )
    break;
  case "2":
    valor= parseInt (prompt("Digite o valor que voce quer colocar"))
    quantidade = valor / 3
    console.log (quantidade + " Litros de álcool abastecidos")
    break;
  default:
        console.log ("Voce calibrou os pneus")
    break;
}
        