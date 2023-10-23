function maiorNumero(array, numero){
    var novo = []
    for(var n = 0; n < array.length; n++)
    if (array[n] > numero) novo.push(array[n])
    return novo
}

console.log(maiorNumero([11, 12, 13, 14, 15, 16, 17], 0))