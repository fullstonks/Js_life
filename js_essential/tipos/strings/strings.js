// retorna o tamanho de uma string
const textSize = 'Text.lenght';
console.log(`Quantidade de letras:${textSize}`);

// retorna um array quebrando a string por um delimitador
const splittedText = 'Texto'.split('x');
console.log('\nArray com as posi��es separadas pelo delimitador:', splittedText);

//Busca por um valor e substitui por outro
const replacedText = 'Texto'.replace('Text','txeT');
console.log('\nSubstitui��o de valor:', replacedText);

// Retorna a "fatia" de um valor
const lastChar = 'Text'.slice(-1);
console.log('\n�ltima letra de uma string:',lastChar);
const lastChar = 'Text'.slice(0, -1);
console.log('\nValor da string da primeira letra menos a �ltima:', allWithoutLastChar);

const secondToEnd = 'Texto'.slice(1);
console.log('\nValor da string da segunda letra at� a �ltima:',secondToEnd);

// Retorn N caracteres a partir de uma posi��o
const twoCharsBeforeFistPos = 'Texto'.substr( 0, 2);
console.log('\nAs duas primeiras letras s�o:', twocharsBeforeFistPos);