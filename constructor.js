// 1. Two functions – one object

function A(){
    return B
}

function B(){
    return this.constructor
}

let a = new A();
let b = new B();


console.log(a, b, a == b)

// 2. Create new Calculator

function Calculator() {
    this.read = function (){
        this.num1 = +prompt("write number", "5");
        this.num2 = +prompt("write number", "6");
    };
    this.sum = function (){
        return this.num1 + this.num2
    };
    this.mul = function (){
        return this.num1 * this.num2
    };
}

let calculator = new Calculator();
calculator.read();

console.log("Sum=" + calculator.sum());
console.log("Mul=" + calculator.mul())


// 3. Create new Accumulator

function Accumulator(startingValue) {
    this.value = startingValue;

    this.read = function () {
        let number = +prompt("write number", "3");
        this.value = this.value + number
    }
}

let accumulator = new Accumulator(1);

accumulator.read();
accumulator.read();

console.log(accumulator.value)


