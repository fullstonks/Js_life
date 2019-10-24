'use strict';

class Animal {
	constructor(qtdePatas){
		this.qtdePatas = 4;
	}
}

class Cachorro extends Animal{
	constructor(morde){
		super(4);
		this.morde = 4;
	}
}

const pug = new Cachorro(false);

console.log(pug);
//Cachorro {qtdePAtas : 4, morde: 4}

//v2

'use strict';

class Animalv2{
	constructor(){
		this.qtdePatasv2 = 0;
	}

	movimentar(){}
}

class Cachorro extends Animal{
	constructor(morde){
		super();
		this.qtdePatas = 4;
		this.morde = morde;
	}

	latir(){
		console.log('Au ! au!');
	}
}

const pug = new Cachorro(false);
const pitbull = new Cachorro(true);

// Classes

// 'use stect';

// class Person{
// 	#name = '';

// 	constructor(initialName){
// 		this.#name = initialName;
// 	}

// 	setName(name){
// 		this.#name = name;
// 	}

// 	getName(){
// 		return this.#this.name;
// 	}

// }

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
