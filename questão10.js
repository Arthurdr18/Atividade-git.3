 let pi = 1 
    for (let i = 0; i < 1000; i++){
        let den = i * 2 + 3;
        if (i % 2 == 0){
            pi -= (1 / den)
        } else {
            pi += (1 / den)
        }
    }

    pi *= 4
    console.log(pi)
