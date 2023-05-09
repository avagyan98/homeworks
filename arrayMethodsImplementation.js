// 1. Array reduce method

const reduce = function (array, callback, initialValue) {
    if(!initialValue && initialValue !== 0) return;

    let accumulator = initialValue;

    for (let i = 0; i < array.length; i++) {
        accumulator = callback(accumulator, array[i], i, array);
    }

    return accumulator
}

const numbers1 = [11, 3, 20, 1];
console.log(reduce(numbers1, (a, b) => a+b, 27));


// 2. Array map method
// this is no finished, I need add thisArg

let aa = {ccc: [1,2,3,4]}
const map = function (array, callback, thisArg) {
    let newArray = [];

    for (let i = 0; i < array.length; i++) {
        const newItem = callback(array[i], i, array);
        newArray.push(newItem);
    }

    return newArray
}

const numbers2 = [1,2,3,4];
console.log(map(numbers2,a => a + 5))


// 3. Array filter method
// this is no finished, I need add thisArg

const filter = function (array, callback, thisArg) {
    let newArray = [];

    for (let i = 0; i < array.length; i++){
        let a = callback(array[i], i, array)
        if (a) newArray.push(array[i])
    }

    return newArray
}

const numbers3 = [1,2,3,4];
console.log(filter(numbers3,a => a > 2))


// 4. Array concat method

const concat = function (array, value) {
   let newArray = array;

   if(typeof value === "object") {
       for(let i = 0; i < value.length; i++) {
           newArray.push(value[i])
       }
   } else {
       newArray.push(value)
   }

    return newArray
}

const numbers4 = [1,2,3,4];
console.log(concat(numbers4,['asd', 99]))


// to be continued
