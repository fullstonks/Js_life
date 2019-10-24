const myNumber = 12.4032;

// Transformar número para string
const numberAsString = myNumber.toString();
console.log('Número transformado em string: ', typeof numberAsString);

// retorna número com um número de casas decimais
const fixedTwoDecimals = myNumber.toFixed(2);
console.log('\nNúmero com duas casas docimais:',fixedTwoDecimals);

// Transforma uma string em float
console.log('\nString parseada para flaot:', parseFloat('13,22'));

// transforma uma string em int
console.log('\nStrign parseada para int:', parseInt('13.20'));