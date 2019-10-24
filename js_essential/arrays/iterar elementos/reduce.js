//Retorna um novo tipo de dado iterando cada posição de um array
const item = [1,2,3,4,5];

const itemReduce = item.reduce((total,value) => total += value, 0);

console.log(itemReduce);