console.log("Trabalhando com listas");
const listaDeDestinos = new Array(
    'Salvador', 
    'São Paulo' , 
    'Brasília',
    'Rio De Janeiro',
    'Dubai', 
    'Nova York',
);

listaDeDestinos.push('Curitiba', 'Belho Horizonte');

console.log(listaDeDestinos);

listaDeDestinos.splice(1, 1);
console.log(listaDeDestinos);

console.log(listaDeDestinos[2]);