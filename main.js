/**
 * descubra quantos % tem de cada categoria.
 * categorias: positivos, negativos e zeros
 * array exemplo: [2, 1, 0, -1, -2]
 */

const numeros = [2, 1, 0, -1, -2] // se inserir ou retirar números o script funciona normalmente.


function calculaPorcentagem() {
    let positivos = []
    let negativos = []
    let zeros = []
    for (let indice = 0; indice <= numeros.length; indice++) {
        if(numeros[indice] === 0){
            zeros.push(numeros[indice])
        } else if(numeros[indice] > 0){
            positivos.push(numeros[indice])
        } else if(numeros[indice] < 0){
            negativos.push(numeros[indice])
        } else{
            console.log("ERRO NO ARRAY DE NÚMEROS")
        }
    }

    let quantidadeNumeros = numeros.length

    let quantidadePositivos = positivos.length
    let quantidadeNegativos = negativos.length
    let quantidadeZeros = zeros.length

    let porcentagemPositivos = 100 * (quantidadePositivos/quantidadeNumeros)
    let porcentagemNegativos = 100 * (quantidadeNegativos/quantidadeNumeros)
    let porcentagemZeros = 100 * (quantidadeZeros/quantidadeNumeros)

    console.log(`Segue resultado do teste:\nPositivos = ${porcentagemPositivos}%\nNegativos = ${porcentagemNegativos}%\nZeros = ${porcentagemZeros}%`)
}
calculaPorcentagem()