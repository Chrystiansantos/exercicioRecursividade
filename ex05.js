class ex05 {
    constructor(isPalindromo) {
        this.palindromo = isPalindromo;
    }

    verificarPolindromo(palavra, indiceInicial, IndiceFinal) {

        if (this.palindromo == false || palavra.length == indiceInicial) {
            return;
        } else {
            if (palavra[indiceInicial] !== palavra[IndiceFinal]) {
                this.palindromo = false;
            }
        }
        this.verificarPolindromo(palavra, indiceInicial + 1, IndiceFinal - 1)
        return this.palindromo;
    }
}
const ex = new ex05(true);
let palavra = 'Joao'
console.log(ex.verificarPolindromo(palavra, 0, palavra.length - 1));