// 1. Uppercase the first character

function ucFirst(str) {
    return str[0].toUpperCase() + str.slice(1).toLowerCase();
}

let text = 'teXt';
console.log(ucFirst(text));

// 2. Check for spam

function checkSpam(str) {
    const lowerCaseStr = str.toLowerCase();

    return lowerCaseStr.includes('viagra') || lowerCaseStr.includes('xxx')
}

console.log(checkSpam("asdsd sdf viAgra"));

// 3. Truncate the text

function truncate(str, lengthStr) {
    return (str.length > lengthStr) ? `${str.slice(0, lengthStr - 3)}...` : str
}

console.log(truncate("Hi everyone!", 10))

// 4. Extract the money

function extractCurrencyValue(str) {
    return Number(str.slice(1))
}

const money = "$340"
console.log(extractCurrencyValue(money))


let words = [];
let wordStartIndex = 0;

function getWords(str) {
    for (let i = 0; i <= str.length; i++) {
        if (str[i] === " " || i === str.length) {
            let word = str.slice(wordStartIndex, i);
            words.push(word);
            wordStartIndex = i + 1;
        }
    }

    return words
}

let str = "asd asdf asdfjnmk nkmljok lplkjo";
console.log(getWords(str));

