// 1. Uppercase the first character

function ucFirst(str) {
    str = str[0].toUpperCase() + str.slice(1);
    return str
}

let text = 'text';
console.log(ucFirst(text));

// 2. Check for spam

function checkSpam(str, checkStr1, checkStr2) {
    str = str.toLowerCase();
    checkStr1 = checkStr1.toLowerCase();
    checkStr2 = checkStr2.toLowerCase();

    if(str.includes(checkStr1) || str.includes(checkStr2)){
        return true
    }

    return false
}

console.log(checkSpam("asdsd sdf viagra", 'viaGra', 'XXX'));

// 3. Truncate the text

function truncate(str, lengthStr) {
    return (str.length > lengthStr) ? str.slice(0, lengthStr - 3) + "..." : str
}

console.log(truncate("Hi everyone!", 10))

// 4. Extract the money

function extractCurrencyValue(str) {
    let firstNumber;
    for(let i = 0; i < str.length; i++){
        if (str.codePointAt(i) >= 48 && str.codePointAt(i) <= 57) {
            firstNumber = i;
            break
        }
    }

    return Number(str.slice(firstNumber))
}

const many = "$$340"

console.log(extractCurrencyValue(many))
