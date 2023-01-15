function product(arr) {
    let negativeCount = 0;
    for (let i = 0; i < arr.length; i++) {
        if (arr[i] === 0) {
            return 'The product is 0'
        } else if (arr[i] < 0) {
            negativeCount ++;
            continue
        } else {
            continue
        }
    }
    if (negativeCount % 2 === 0) {
        return 'The product is positive'
    }else {
        return 'The product is negative'
    }
}

console.log(product([3, 7, -13, -4]));
