class Ex06 {

    somatoria(num) {
        if (num == 0) {
            return 0;
        }
        return num + this.somatoria(num - 1);
    }
}
const num = 5;
const ex07 = new Ex06();
console.log(ex06.somatoria(num));