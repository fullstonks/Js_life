function fn() {
        return 'code here';
}

const arrowFn = () => 'code here';
const arrowfn2 = () => {
        //mais uma expressão
        return 'code here';
}

//Funções também são objetos
fn.prop = 'Posso criar prorpiedades';

console.log(fn());
console.log(fn.prop);

// receber parârametros

const logValue = value => console.log(value);
const logFnResult = fnParam => console.log(fnparam());

logFnResult(fn);

// Receber e retornar funções
const controlFnExec = fnParam => allowed =>{
        if (allowed) {
               fnParam() ;
        }
}

const handleFnExecution = controlFnExec(fn);
handleFnExecution(true); //Executará a função fn
handleFnExecution();    //Não executá a função fn

// controlFnExec como função
function controFnExec(fnParam) {
        return function(allowed){
                if (allowed) {
                        fnParam();
                }
        }        
}