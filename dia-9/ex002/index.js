let confirmar = "n";
while (confirmar != "s") {
    let nome = prompt("Digite seu nome");
    let idade = parseInt(prompt("Digite sua idade"));
    let salarioAtual = parseFloat(prompt("Digite seu salário atual"));
    console.log("Nome: " + nome + "; Idade: " + idade + "; Salário atual: " + salarioAtual);
    confirmar = prompt("As informações estão corretas? (s/n)")
}


let aumento = 0.015
console.log ("Previsão salarial para os proximos 10 anos")

for (let ano = 1; ano <= 10; ano++) {
    salarioAtual += salarioAtual * aumento
    aumento *= 2

    console.log ((2023 + ano) + " = R$ " + salarioAtual)
}


