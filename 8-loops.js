console.log(" \n Trabalhando com condicionais");
const listaDeDestinos = new Array(
    'Salvador',
    'São Paulo',
    'Brasília',
    'Rio de Janeiro',
    'Dubai',
    'Nova York',
);

listaDeDestinos.push('Curitiba', 'Belo Horizonte');
console.log("\n Destinos possíveis:")
console.log(listaDeDestinos);

const idadeComprador = 20;
const estaAcompanhado = false;
let temPassagemComprada = true;
const destino = "Brasília";

const podeComprar = idadeComprador >= 18 || estaAcompanhado == true;
let destinoDisponivel = false;

// let contador = 0;
// while(contador < 8) {
    // if(listaDeDestinos[contador] == destino) {
        // destinoDisponivel = true;
        // break;
    // }
    // contador += 1;
//} 

// if (podeComprar && destinoDisponivel) {
//     console.log("Obrigado pela compra, tenha uma boa viagem!");
// } else {
//     console.log("Desculpe não foi possível concluir a compra");
// }

for(let cont = 0; cont < 8; cont++) {
    if (listaDeDestinos[cont] == destino) {
        destinoDisponivel = true;
        break;
    }
}

if (podeComprar && destinoDisponivel) {
    console.log("Obrigado pela compra, tenha uma boa viagem!");
} else {
    console.log("Desculpe não foi possível concluir a compra");
}