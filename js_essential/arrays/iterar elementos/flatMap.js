// retorna um novo array assim como a função map e executa um flat de profundidade
const item = [1,2,3,4];

item.flatMap(value => [value * 2]);

item.flatMap(value => [[value * 2]])