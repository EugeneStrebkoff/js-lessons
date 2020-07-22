function primeOf(num) {
    let i = 2;
    let res = [];
    while (i <= num) {
        let isPrime = true;
        for (let d = i - 1; d < i && d > 1; d--) {
            if (i % d === 0) {
                isPrime = false;
                break;
            }
        }
        if (isPrime === true) {
            console.log(i);
        }
        i++;
    }
}

primeOf(100);