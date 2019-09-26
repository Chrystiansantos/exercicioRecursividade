class Ex04 {

    constructor(vet) {
        this.vetor = vet;
    }
    soma(posicao) {
        if (posicao == this.vetor.length - 1) {
            return this.vetor[posicao];
        }
        return this.vetor[posicao] + this.soma(posicao + 1);
    }
    multiplicacao(posicao) {
        if (posicao == this.vetor.length - 1) {
            return this.vetor[posicao];
        }
        return this.vetor[posicao] * this.multiplicacao(posicao + 1);
    }
}
const vetor = [1, 2, 3, 4];
const ex04 = new Ex04(vetor);
console.log(ex04.soma(0), 'soma')
console.log(ex04.multiplicacao(0), 'multi');
