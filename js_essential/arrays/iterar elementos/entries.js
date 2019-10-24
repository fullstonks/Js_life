// Retorna um Array Iterator que contém os pares chaves/valor para cada elemento do array
const item = [1,2,3,4];

const itemIterator = item.entries();

itemIterator.next();
//{value:[0,1], done: false}
itemIterator.next();
//{value:[1,2], done: false}
itemIterator.next();
//{value:[2,3], done: false}
itemIterator.next();
//{value:[3,4], done: true}