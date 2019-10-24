//Retorna um booleano verificando se pelo menos um item de um array satisfaz a condição
const item = [1,2,3,4];

const hasSomeEvenNumber = item.some(value => value % 2 === 0);
//true

console.log(hasSomeEvenNumber);