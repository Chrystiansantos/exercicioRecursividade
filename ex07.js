class ex07 {
    potenciacaoKeN(k, n) {
        if (n == 1) {
            return k;
        }
        return k * this.potenciacaoKeN(k, n - 1);
    }
}
let ex = new ex07();
console.log(ex.potenciacaoKeN(10, 2));