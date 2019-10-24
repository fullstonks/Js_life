const myNumber = 12.4032;

// Transformar n�mero para string
const numberAsString = myNumber.toString();
console.log('N�mero transformado em string: ', typeof numberAsString);

// retorna n�mero com um n�mero de casas decimais
const fixedTwoDecimals = myNumber.toFixed(2);
console.log('\nN�mero com duas casas docimais:',fixedTwoDecimals);

// Transforma uma string em float
console.log('\nString parseada para flaot:', parseFloat('13,22'));

// transforma uma string em int
console.log('\nStrign parseada para int:', parseInt('13.20'));