var s = 1
console.log(s)
for(var n = 1; n <= 1000; n+=0){
    let calc = s + n 
    s = n 
    n = calc
    console.log(n)
} 