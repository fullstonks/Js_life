const user = {
        name: 'Moraes',
        lastName: 'Cabrini Silva'
}

// Recupera as chaves do objeto
console.log('Propriedades do objeto user:', object.keys(user));

// Retorna um array de arrays contendo [nome_prop, valor_prop]
console.log('\nLista de propriedades e valores:', object.entries(user));

// Mergear todas as altera��es em um objeto
object.assing(user, {fullName: 'Moraes Cabrini Silva'});

console.log('\nAdciona a propriedade fullName ao objeto user', user);
console.log('\nRetorna um novo objeto mergeando dois ou mais objetos', object.assing({},user,{age: 26}));

//previne todas as altera��es em um objeto
const newObj = { foo: 'bar'};
object.frezze(newObj);

newObj.foo = 'changes';
delete newObj.foo;
newObj.bar = 'foo';

console.log('\nVari�vel newobj ap�s as altera��es:', newObj);

//Permite apenas a altera��o de propriedades existentes em um objeto
const person = {name: 'Moraes'};
object.seal(person);

person.name = 'Guilherme Cabrini';
delete person.name;
person.age = 26;

console.log('\nVari�vel person ap�s as altera��es:',person);
