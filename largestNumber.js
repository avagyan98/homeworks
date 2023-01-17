const arr = [3, 5, 1, 37, 26];

function largest(arr) {
    return Math.max(...arr)
}

console.log(largest(arr))


function largest2(arr) {
    arr.sort((a, b) => a - b);
    return arr[arr.length - 1]
}

console.log(largest2(arr))


function largest3(arr) {
    maxNumber = arr[0];
    for(let i = 1; i < arr.length; i++) {
        if(maxNumber < arr[i]) {
            maxNumber = arr[i];
        }
    }
    return maxNumber
}

console.log(largest3(arr))
