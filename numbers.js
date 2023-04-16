// 1. Sum numbers from the visitor

const number1 = Number(prompt("write number", 10));
const number2 = Number(prompt("write number", 10));

alert(number1 + number2)

// 2. Repeat until the input is a number

function readNumber() {
    let number = prompt("Write a number", "10");
    if (number === null || number === "") {
        return null;
    }
    if (isNaN(+number)) {
        return readNumber();
    }

    alert("your number is " + number )
}

readNumber()

// 3. A random number from min to max

function random(min, max) {
    return Math.random() * (max - min) + min;
}

console.log(random(3,5))

// 4. A random integer from min to max

function randomInteger(min, max) {
    return Math.floor(Math.random() * (max + 1 - min) + min);
}

console.log(randomInteger(3,5))
