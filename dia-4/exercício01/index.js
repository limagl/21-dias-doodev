const temFome = prompt("Você tem fome?  (sim/não)")
const temDinheiro = prompt("Você tem dinheiro? (sim/não)")
const restauranteAberto = prompt("O restaurante está aberto? (sim/não)")


if (temFome === "não" || temDinheiro === "não") {
    console.log ("Hoje a janta sera em casa");
}else if (temDinheiro ==="sim" && restauranteAberto === "sim") {
    console.log ("Hoje tera sua janta preferida");
} else {
    console.log ("Peça um delivery");
}

   


