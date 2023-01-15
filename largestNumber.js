function largest(arr) {
    return Math.max(...arr)
}

console.log(largest([3, 5, 1, 37, 26]))


function largest2(arr) {
    arr.sort();
    return arr[-1]
}

console.log(largest2([3, 5, 1, 37, 26]))
