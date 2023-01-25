const arr = [3, 7, -13, -4];

function productMultiply(arr) {
    let negativeCount = 0;

    if(arr.includes(0)) return 'The product is 0';

    for (let i = 0; i < arr.length; i++) {
        if (arr[i] < 0) {
            negativeCount++;
        }
    }

    return !(negativeCount % 2) ? 'The product is positive' : 'The product is negative';
}

console.log(productMultiply(arr));


function productAdd(arr) {
    let sum = 0;

    for(let i = 0; i < arr.length; i++) {
        sum += arr[i];
    }

    if(sum > 0) {
        return 'The product is positive'
    }

    return sum < 0 ? 'The product is negative' : 'The product is 0';
}

console.log(productAdd(arr));

