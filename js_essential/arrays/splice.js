//altera um array adcionando novos elementos enquanto remove elementos antigos
const item = [1,2,3,4,5];

item.splice(2);
// [3,4,5]
console.log(item);

item.splice(0,0, 'fisrt');
//[]
console.log(item.splice(0,0, 'fisrt'));
console.log(item);