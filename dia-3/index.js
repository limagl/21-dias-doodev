   //Declaração de variaveis.
    let nome = ""
    let idade = 0
    let peso = 0
    let altura = 0

    //Solicitando informação ao usuario e atríbuindo valores as variaveis.
    nome = (prompt("Digite seu nome"))
    idade = parseInt(prompt("Digite sua idade"))
    peso = parseInt (prompt(" Digite seu peso"))
    altura = parseFloat(prompt("Digite sua altura"))

    //Calculando o ano que a pessoa nasceu e o IMC.
    let anoNasc = 0
    anoNasc = 2024 - idade

    let imc = 0
    imc = peso / (altura*altura)

    //Exibindo as informações no console.
    console.log (" Ola " + nome + ", Voce tem " + idade + " anos, Nasceu em " + anoNasc + ", Você tem " +altura+ " De altura, pesa " + peso + "kg e seu IMC é" +imc+ "kg/m2")