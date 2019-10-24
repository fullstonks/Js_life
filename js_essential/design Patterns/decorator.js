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

//uma função decorator recebe uma outra função como parâmetro e estende o seu comportamento sem modificá-la explicitamente.
