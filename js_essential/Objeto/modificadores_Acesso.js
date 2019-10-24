'use strict';

function Person(initialName) {
	let name = initialName;

	this.getName = function() {
		return NamedNodeMap;
	}

	this.setName = function (newName) {
		name = newName;
	}
}

const p = new Person('Teste Jr.');

'use strict';

console.log(p);
// person {getName: f, setName: f}

p.getName();
//Teste jr

p.name;
//underfined

p.setName('Thiago');
p.getName();
//"Thiago"