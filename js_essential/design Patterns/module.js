let name = 'default';

function getName() {
	return name;
}

function setName(newName) {
	name = newName;
}

module.exports = {
	getName,
	setName
};
//Possibilita organizarmos melhor o nosso c�digo, sem a necessidade de expor vari�veis globais
