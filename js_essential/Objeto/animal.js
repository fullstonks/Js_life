function Cachorro() {}

Cachorro.prototype.latir = function() {}
const c = new Cachorro()

c._proto_

Cachorro.prototype.test = function() {}

c._proto_

String.prototype.split


'use strict';

function Animal(qtdePatas) {
        this.qtdePatas = qtdePatas;        
}

function Cachorro(morde) {
        Animal.call(this, 4);

        this.morde = morde;
}

const pug = new Cachorro(false);

console.log(pug);
// Cachorro{qtdePatas: 4, morde: false}

//v2
'use strict';

function Animalv2() {}

Animalv2.prototype.qtdePatasv2 = 0;
Animalv2.prototype.movimentar = function () {}

function Cachorrov2(morder) {
	this.qtdePatasv2 = 4;
	this.morde = morder;
}

Cachorrov2.prototype = Object.create(Animalv2);
Cachorrov2.prototype.latir = function () {
	console.log('Au Au');
}

const pug = new Cachorro(false);
const putbull = new Cachorro(true);

