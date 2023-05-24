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

const filter = function (array, callback) {
    let newArray = [];

    for (let i = 0; i < array.length; i++){
        let checkElement = callback(array[i], i, array)
        if (checkElement) newArray.push(array[i])
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


// 5. Array every method

const every = function (array, callback) {
    let result = true;

    for (let i = 0; i < array.length; i++){
        let checkElement = callback(array[i], i, array);
        if(!checkElement) return false
    }

    return result
}

const numbers5 = [3,4];
console.log(every(numbers5,a => a > 2))


// 6. Array find method

const find = function (array, callback) {

  for(let i = 0; i < array.length; i++) {
      let checkElement = callback(array[i], i, array);
      if(checkElement) return array[i]
  }

  return undefined
}

const numbers6 = [1, 0, 3];
console.log(find(numbers6,a => a > 2))


// 7. Array findIndex method

const findIndex = function (array, callback) {
    let defaultResult = -1;

    for (let i = 0; i < array.length; i++) {
        let checkElement = callback(array[i], i, array);
        if (checkElement) return i
    }

    return defaultResult
}

const numbers7 = [1, 0, 3];
console.log(findIndex(numbers7,a => a > 2))


// 8. Array some method

const some = function (array, callback) {

    for(let i = 0; i < array.length; i++) {
        let checkElement = callback(array[i], i, array);
        if (checkElement) return true
    }

    return false
}

const numbers8 = [1, 0, 1];
console.log(some(numbers8,a => a > 2))
