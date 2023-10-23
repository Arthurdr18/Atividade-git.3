/*var s = 1
console.log(s)
for(var n = 1; n <= 7000; n+=0){
    let calc = s + n 
    s = n 
    n = calc
    console.log(n)
} */
function fibonacci(valor){
    var anterior = 0
    var agora = 1
    var proximo = 1

    for(var i = 0; i <= valor; i++){
    console.log(proximo)
    anterior = agora + proximo * 2
    agora = proximo 
    proximo = anterior
}
}
fibonacci(20)
