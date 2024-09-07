
function obterDados () {
    const nome = prompt ("Digite seu nome");
    const salario = parseFloat(prompt("Digite seu salário"));

    return {nome, salario};
}

function Calcular(salario) {
    let porcentagem 

    if (salario <= 1500) {
        salario += salario * porcentagem;
    } else if (salario >= 1501 && salario <= 2000) {

        porcentagem -= 0.05;    
        salario += salario * porcentagem;
    } else if (salario >= 2001 && salario <= 3000) {

        porcentagem -= 0.10;
        salario += salario * porcentagem;
    } else {
        porcentagem -= 0.15;
        salario += salario * porcentagem;
    }


    console.log("Nome do colaborador: " + nome);
    console.log("Salário: " + salario.toFixed(2));
    console.log("Porcentagem de aumento: " + (porcentagem * 100).toFixed(2) + "%");
    console.log("Salário reajustado: " + (salario - porcentagem).toFixed(2));
}

const { nome, salario } = obterDados();
Calcular(salario);   











