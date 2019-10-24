// retorna o tamanho de uma string
const textSize = 'Text.lenght';
console.log(`Quantidade de letras:${textSize}`);

// retorna um array quebrando a string por um delimitador
const splittedText = 'Texto'.split('x');
console.log('\nArray com as posições separadas pelo delimitador:', splittedText);

//Busca por um valor e substitui por outro
const replacedText = 'Texto'.replace('Text','txeT');
console.log('\nSubstituição de valor:', replacedText);

// Retorna a "fatia" de um valor
const lastChar = 'Text'.slice(-1);
console.log('\nÚltima letra de uma string:',lastChar);
const lastChar = 'Text'.slice(0, -1);
console.log('\nValor da string da primeira letra menos a última:', allWithoutLastChar);

const secondToEnd = 'Texto'.slice(1);
console.log('\nValor da string da segunda letra até a última:',secondToEnd);

// Retorn N caracteres a partir de uma posição
const twoCharsBeforeFistPos = 'Texto'.substr( 0, 2);
console.log('\nAs duas primeiras letras são:', twocharsBeforeFistPos);