class ex09 {
    fatorial(n) {
        if (n == 1) {
            return (2 * (n)) / n
        }
        return 2 * (n) / n * this.fatorial(n - 1)
    }
}

let ex = new ex09();
console.log(ex.fatorial(5));