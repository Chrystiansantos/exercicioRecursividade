class Ex01 {
    retornarNumeroBinario(numero) {
        if (numero == 1) return 1;
        if (numero == 0) return 0;
        return (numero % 2) + "" + this.retornarNumeroBinario(parseInt(numero / 2));
    }
}
let ex01 = new Ex01();
let numBinario = ex01.retornarNumeroBinario(10);
let num = "";
for (let i = (numBinario.length - 1); i != -1; i--) {
    num += "" + numBinario[i];
}
console.log(num)