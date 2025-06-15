let valor //nao inicializado
console.log(valor)

//console.log(valor2) //is not defined

valor = null //ausencia de valor
console.log(valor)

//console.log(valor.toString()) //erro

const produto = {}
console.log(produto.preco)
console.log(produto)

produto.preco = 3.50
console.log(produto)
console.log(produto.preco)

produto.preco = undefined //evite atribuir undefined
console.log(!!produto.preco)

delete produto.preco
console.log(produto)

produto.preco = null //sem preco
console.log(produto.preco)
console.log(!!produto.preco)
console.log(produto)