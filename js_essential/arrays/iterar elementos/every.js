//Retornja um booleano verificando se todos os itens de um array satisfazem a condição

const item = [1,2,3,4];

const allEventsNumber = item.every(value => value % 2 === 0);

console.log(allEventsNumber);
//false