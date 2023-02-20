// 1. calculator

let calculator = {
    num1: 5,
    num2: 7,
    read() {
        console.log(this.num1, this.num2)
    },
    sum() {
        return this.num1 + this.num2
    },
    mul() {
        return this.num1 * this.num2
    }
}

calculator.read();
console.log( calculator.sum() );
console.log( calculator.mul() );


// 2. Chaining

let ladder = {
    step: 0,
    up() {
        this.step++;
        return this
    },
    down() {
        this.step--;
        return this
    },
    showStep: function() { // показывает текущую ступеньку
        console.log( this.step );
        return this
    }
};

ladder.up().up().down().showStep().down().showStep();
