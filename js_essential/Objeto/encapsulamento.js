'use stroct';

function Person(initialName) {
	var name = initialName;

	Object.defineProperty(this,'name',{
		get: function () {
			return name;
		},

		set: function(value) {
			name = value;
		}
	});
}

//v2

'use strict';

class Person{
	nameClass = '';

	constructor(name){
		this.nameClass = name;
	}

	get name(){
		return this.nameClass;
	}

	set name(name){
		this.nameClass = name;
	}
}