const prod1 = {}
prod1.nome = 'Celular Ultra Mega'

console.log(prod1)
console.log(prod1.nome)

prod1.preco = 4998.90
console.log(prod1)
console.log(prod1.preco)

prod1['Desconto Legal'] = 0.40 //evitar atributos com espaço
console.log(prod1)

const prod2 = {
    nome: 'Camisa Polo',
    preco: 79.90,
    obj: {
        blabla: 1,
        blabla: 2
    }
}

console.log(prod2)

//exemplo de json valid, json é texto diferente de object
//'{ "nome": "Camisa Polo", "preco": 79.90}'