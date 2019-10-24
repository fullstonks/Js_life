let loggedin = false;
function callIfAuthenticated(fn) {
    return !!loggedin && fn();
}

function sum(a,b) {
	return a + b;
}

console.log(callIfAuthenticated(() => sum(2,3)));
loggedin = true;
console.log(callIfAuthenticated(() => sum(2,3)));
loggedin = false;
console.log(callIfAuthenticated(() => sum(2,3)));

// function readonly(target, name, descriptor) {
// 	descriptor.write = false;
// 	return descriptor;
// }

// class job{
// 	@readonly -> sintaxe decorator 
// 	title() {return 'CEO'}
// }

//uma fun��o decorator recebe uma outra fun��o como par�metro e estende o seu comportamento sem modific�-la explicitamente.
