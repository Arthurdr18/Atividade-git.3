var numeros = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10]

var soma = 1
for(var p = 0; p <= 10; p++){

    var impares = numeros[p]
    
    if ((impares % 2) != 0){

        console.log(soma + impares)      
    }
}