class ex08 {
    constructor(vetor) {
        this.vet = vetor
    }
    inverterVetor(posicaoInicial, posicaoFinal) {
        if (posicaoInicial == this.vet.length / 2) {
            return;
        }
        const aux = this.vet[posicaoInicial]
        this.vet[posicaoInicial] = this.vet[posicaoFinal];
        this.vet[posicaoFinal] = aux;
        this.inverterVetor(posicaoInicial + 1, posicaoFinal - 1)
        return this.vet;
    }
}
const vetor = [1, 2, 3, 4, 5, 50, 40, 30, 20, 10];
const exercicio = new ex08(vetor);
const resultado = exercicio.inverterVetor(0, vetor.length - 1);
console.log(resultado)
