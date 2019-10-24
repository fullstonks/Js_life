this.name = 'nome no cntexto de criação;';

const getNameArrowFn = () => this.name;

function getName() {
        return this.name;
}

const user = {
        name: 'Nome no objeto de execução',
        getNameArrowfn,
        getName
}

console.log(user.getNameArrowfn());
console.log(user.getName());

