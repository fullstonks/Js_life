const symbol1 = Symbol();
const sumbol2 = Symbol();

// Symbols são únicos
console.log('symbol1 é igual a symbol2:',symbol1 === symbol2);

// Prevenir conflito entre nomes de propriedades 
const nameSymbol1 = Symbol('name');
const nameSymbol2 = Symbol('name');

const user = {
        [nameSymbol1]: 'Moraes',
        [nameSymbol2]: 'Outro nome',
        lastName: 'Cabrini da silva'
}

console.log(user);

// Symbols criam propriedades que não são enumberables
for(const key in user){
        if(user.hasOwnPoperty(key)){
                console.log(`\nValor da chave ${Key}: ${user[key]}`);
        }
}

console.log('Propriedades do objeto user:',Object.keys(user));
console.log('Valores das propriedades do objeto user:', Object.values(user));

// Exibir symnols de um objeto
console.log('symbols registrados no objeto user:',Object.getOwnPropertySymbols(user));

// Acesssando todas as propriedades do objeto
console.log('Todas propriedades do objeto user:', Reflect.ownKeys(user));

// criar um enum 
const directions = {
        UP  : Symbol( 'UP' ),
        DOWN: Symbol( 'DOWN'),
        LEFT: Symbol( 'LEFT'),
        RIGHT:Symbol( 'RIGHT')
};