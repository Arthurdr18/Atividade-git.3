function numerosPrimos(numero) {
  const arrnumerosPrimos = []
  for (var numero1 = 2; numero1 <= numero; numero1 +=1){
    var numeroPrimo = true;
    for (var numeroDivisor = 2; numeroDivisor <= numero1; numeroDivisor += 1) {
      if (numero1 % numeroDivisor === 0 && numero1 !== numeroDivisor) {
        numeroPrimo = false;
      }
    }
    if (numeroPrimo === true){
      arrnumerosPrimos.push(numero1);
    }
      }
      return arrnumerosPrimos
    }
    console.log(numerosPrimos(20));
  