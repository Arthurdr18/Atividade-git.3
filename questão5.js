const fizzBuzz = function(){
for(let k = 1; k <= 100; k++){
   if (k % 3 ===0 && k % 5 === 0){
   console.log('FizzBuzz')
   }
   else if(k % 5 === 0){
   console.log('Buzz')
   }
   else if(k % 3 === 0){
   console.log('Fizz')
   } else {
    console.log(k)
   }
}
}
fizzBuzz()