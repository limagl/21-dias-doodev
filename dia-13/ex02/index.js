class Carro {
    nome 
    potencia 
    velocidadeMaxima 
    aceleracao
    constructor (nome, potencia, velocidadeMaxima, aceleracao) {
        this.nome = nome;
        this.potencia = potencia;
        this.velocidadeMaxima = velocidadeMaxima;
        this.aceleracao = aceleracao;
    }
    CalcularTempoMedio (distancia) {
        let resultado = distancia / (this.velocidadeMaxima / this.aceleracao);
        return resultado;
    }
}

class Corrida {
    Nome 
    Tipo
    Distancia
    Participantes 
    Vencedor
    constructor (nome, tipo, distancia) {
        this.Nome = nome;
        this.Tipo = tipo;
        this.Distancia = distancia;
        this.Participantes = []
        this.Vencedor = ""
    }    
    DefinirVencedor(){
       let vencedor = this.Participantes [0]
       let menorTempo = this.Participantes[0].CalcularTempoMedio(this.Distancia)

        for (let index = 1; index < this.Participantes.length; index++) {
            let tempo = this.Participantes[index].CalcularTempoMedio(this.distancia);
            if (tempo < menorTempo) {
               menorTempo = tempo
               vencedor = this.Participantes[index]
            }
        }

         return vencedor;
    }
    
    ExibirVencedor(){
        alert ("O vencedor é: " + this.Vencedor.Nome)
    }
}

let corrida = new Corrida ("Monza",  "Formúla 1", 60000)

corrida.Participantes[0] = new Carro("Kicks", 120, 160, 5)
corrida.Participantes[1] = new Carro("Marea", 120, 200, 9)
corrida.Participantes[2] = new Carro("Peugeot 206", 300, 220, 10)

corrida.DefinirVencedor();
corrida.ExibirVencedor();
