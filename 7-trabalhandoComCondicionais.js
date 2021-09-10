console.log("Trabalhando com condicionais");

console.log("Trabalhando com listas");
const listaDeDestinos = new Array(
    'Salvador',
    'São Paulo',
    'Brasília',
    'Rio De Janeiro',
    'Dubai',
    'Nova York',
);

const idadeComprador = 15;
const estaAcompanhado = false;
const temPassagemComprada = true;

if (idadeComprador >= 18 || estaAcompanhado) {
    listaDeDestinos.splice(5, 1);
    console.log("O destino foi vendido.");
}else {
    console.log("A compra não pôde ser concluída, comprador é menor de idade e está desacompanhado.");
}

console.log("Embarque:\n\n")
if (idadeComprador >= 18 && temPassagemComprada){
    console.log("Boa Viagem!!");
} else {
    console.log("Sinto muito, você não pode embarcar.");
}

listaDeDestinos.push('Curitiba', 'Belho Horizonte');

console.log(listaDeDestinos);
