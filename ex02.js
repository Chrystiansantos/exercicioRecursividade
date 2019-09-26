class Ex02 {
    multiplicacao(priParcela, segParcela) {
        if (segParcela == 0) {
            return 0;
        }
        return priParcela + this.multiplicacao(priParcela, segParcela - 1)
    }
}
const ex2 = new Ex02();
console.log(ex2.multiplicacao(10, 4));