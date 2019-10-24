const users = ['Guapa','Pedro','Yennifer'];

const gender = {
        MAN: Symbol('M'),
        WOMAN: Symbol('W')
}

const persons = [{
        name: 'Guapra',
        age: 21,
        gender: gender.MAN
},
{
        name: 'Pedro',
        age: 14,
        gender: gender.MAN
},
{
        name: 'Yennifer',
        age: 22,
        gender: gender.WOMAN
}
];

// Retornar a quantidade de itens de um array
console.log('Items:', persons.length);

//verificar se é array
console.log('A variavel persons é um array:', Array.isArray(persons));

// Iterar os itens do array
persons.forEach(persons =>{
        console.log(`Nome: ${person.name}`);
});

//Retornar um novo
const personWithCourse = persons.map(person =>{
        person.course = 'Introdução ao Javascript';
        return person;
});

console.log('\nPessoas com a adição do course:', personWithCourse);

// Transformar um array em outro tipo
const totalAge = persons.reduce((age, person) => {
        age += person.age;
        return age;
}, 0);

console.log('\nSoma de idade das pessoas', totalAge);