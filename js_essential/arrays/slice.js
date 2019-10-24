// retorna um novo array "fatiando" o array de acordo com inicio e fim
const item = [1,2,3,4,5];

item.slice(0,2);
// [1,2]
console.log(item.slice(0,2));
item.slice(2);
// [3,4,5]
console.log(item.slice(2));
item.slice(-1);
// [5]
console.log(item.slice(-1));
item.slice(-3);
// [3,4,5]
console.log(item.slice(-3));