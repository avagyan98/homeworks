const arr = [3, 7, -13, -4];

function productMultiply(arr) {
    let negativeCount = 0;

    if(arr.includes(0)) return 'The product is 0';

    for (let i = 0; i < arr.length; i++) {
        if (arr[i] < 0) {
            negativeCount++;
        }
    }
    if (negativeCount % 2 === 0) {
        return 'The product is positive'
    }else {
        return 'The product is negative'
    }
}

console.log(productMultiply(arr));


function productAdd(arr) {
    let sum = 0;

    for(let i = 0; i < arr.length; i++) {
        sum += arr[i];
    }
    console.log(sum)

    if(sum > 0) {
        return 'The product is positive'
    }

    if(sum < 0) {
        return 'The product is negative'
    }

    return 'The product is 0';

}

console.log(productAdd(arr));

