// retorna um novo array com todos os elementos de um sub-array 
// concatenados de forma recursiva de acordo com a profundidade especificada (depth)

const item = [1,2,[3,4],5];

item.flat(1);
// [1,2,3,4]

console.log(item);