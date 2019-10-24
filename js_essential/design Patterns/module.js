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
//Possibilita organizarmos melhor o nosso código, sem a necessidade de expor variáveis globais
