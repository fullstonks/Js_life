var SETTINGS ={
	api: 'http://localhost',
	trackJsToken: '12345'
}

function MyApp() {
	if (!MyApp.instance) {
		MyApp.instance = this;
	}

	return MyApp.instance;
}

function Persson() {
	if (!Pessoa.instance) {
		Pessoa.instance = this;
	}
	return Pessoa.instance;
}

const p = Pessoa.call({name:'Guilerme'});

const p2 = Pessoa.call({name:'Custom Name'});

console.log(p);

console.log(p2);

// Singleton - Criar uma �nica inst�ncia de uma fun��o construtora e retorn�-la toda vez em que for nescessarios utiliza-l�