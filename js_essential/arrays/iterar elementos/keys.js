// Retorna um Array Iterator que contém as chaves para cada elemento do array
const item = [1,2,3,4];

const itemIterator = item.keys();

itemIterator.next();
//{value: 0, done: false}
itemIterator.next();
//{value: 1, done: false}
itemIterator.next();
//{value: 2, done: false}
itemIterator.next();
//{value: 3, done: true}