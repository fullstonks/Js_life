// Retorna um Array Iterator que contém os valores para cada elemento do array
const item = [1,2,3,4];

const itemIterator = item.values();

itemIterator.next();
//{value: 1, done: false}
itemIterator.next();
//{value: 2, done: false}
itemIterator.next();
//{value: 3, done: false}
itemIterator.next();
//{value: 4, done: true}