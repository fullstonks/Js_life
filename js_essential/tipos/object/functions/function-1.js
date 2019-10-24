function fn() {
        return 'code here';
}

const arrowFn = () => 'code here';
const arrowfn2 = () => {
        //mais uma express�o
        return 'code here';
}

//Fun��es tamb�m s�o objetos
fn.prop = 'Posso criar prorpiedades';

console.log(fn());
console.log(fn.prop);

// receber par�rametros

const logValue = value => console.log(value);
const logFnResult = fnParam => console.log(fnparam());

logFnResult(fn);

// Receber e retornar fun��es
const controlFnExec = fnParam => allowed =>{
        if (allowed) {
               fnParam() ;
        }
}

const handleFnExecution = controlFnExec(fn);
handleFnExecution(true); //Executar� a fun��o fn
handleFnExecution();    //N�o execut� a fun��o fn

// controlFnExec como fun��o
function controFnExec(fnParam) {
        return function(allowed){
                if (allowed) {
                        fnParam();
                }
        }        
}