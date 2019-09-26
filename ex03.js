class Ex03 {
    constructor(nome) {
        this.nome = nome
    }
    getNomeInverso(qtdCaracters) {
        if (qtdCaracters == 0) {
            return "";
        }
        return this.nome[qtdCaracters - 1] + this.getNomeInverso(qtdCaracters - 1);
    }
}
const nome = 'ana';
const ex03 = new Ex04(nome);
console.log(ex03.getNomeInverso(nome.length));