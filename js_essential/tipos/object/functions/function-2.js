this.name = 'nome no cntexto de cria��o;';

const getNameArrowFn = () => this.name;

function getName() {
        return this.name;
}

const user = {
        name: 'Nome no objeto de execu��o',
        getNameArrowfn,
        getName
}

console.log(user.getNameArrowfn());
console.log(user.getName());

