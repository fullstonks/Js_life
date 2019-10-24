class observables{
	constructor(){
		this.observables = []; //obrigatorio
	}

	subscribe(fn){
		this.observables.push(fn); //Obrigatorio
	}

	unsubscribe(fn){
		this.observables = this.observables.filter(subscriber => subscriber !== f);
	}
	notify(data){
		this.observables.forEach(fn => fn(data));
	}
}
const o = new observables();

const logData1 = data => console.log(`subscribe 1: ${data}`);
const logData2 = data => console.log(`subscribe 2: ${data}`);
const logData3 = data => console.log(`subscribe 3: ${data}`);
const logData4 = data => console.log(`subscribe 4: ${data}`);

o.subscribe(logData1);
o.subscribe(logData2);
o.subscribe(logData3);
o.subscribe(logData4);

o.notify('notified 1');

o.unsubscribe(logData2);

o.notify('notified 2');
//Mantém um coleção de objetivos(observables) e notifica todos eles quando ocorrem mudanças no estado.
