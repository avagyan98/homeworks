// // 1. Array reduce method
//
// const reduce = function (array, callback, initialValue) {
//
//     let accumulator = initialValue || array[0];
//
//     for (let i = 0; i < array.length; i++) {
//         accumulator = callback(accumulator, array[i], i, array);
//     }
//
//     return accumulator
// }
//
// const numbers1 = [11, 3, 20, 1];
// console.log(reduce(numbers1, (a, b) => a+b, 27));
//
//
// // 2. Array map method
//
// const map = function (array, callback, thisArg) {
//     let newArray = [];
//
//     for (let i = 0; i < array.length; i++) {
//         const newItem = callback(array[i], i, array);
//         newArray.push(newItem);
//     }
//
//     return newArray
// }
//
// const numbers2 = [1,2,3,4];
// console.log(map(numbers2,a => a + 5))
//
//
// // 3. Array filter method
//
// const filter = function (array, callback, thisArg) {
//     let newArray = [];
//
//     for (let i = 0; i < array.length; i++){
//         let newItem = callback(array[i], i, array)
//         if (newItem) newArray.push(array[i])
//     }
//
//     return newArray
// }
//
// const numbers3 = [1,2,3,4];
// console.log(filter(numbers3,a => a > 2))
//
//
// // 4. Array concat method
//
// const concat = function (array, value) {
//    let newArray = array;
//
//    if(typeof value === "object") {
//        for(let i = 0; i < value.length; i++) {
//            newArray.push(value[i])
//        }
//    } else {
//        newArray.push(value)
//    }
//
//     return newArray
// }
//
// const numbers4 = [1,2,3,4];
// console.log(concat(numbers4,['asd', 99]))
//
//
// // 5. Array reverse method
//
// const arr5 = [1,2,3,4,5];
//
// const reverse1 = function(arr) {
//     let newArr = [];
//
//     for (let i = arr.length - 1; i >= 0; i--) {
//         newArr.push(arr[i])
//     }
//
//     return newArr
// }
//
// const reverse2 = function (arr) {
//     for(let i = 0; i < Math.floor(arr.length/2); i++ ){
//         let temp = arr[i];
//         arr[i] = arr[arr.length - 1 - i];
//         arr[arr.length - 1 - i] = temp;
//     }
//
//     return arr
// }
//
// console.log(reverse1(arr5));
// console.log(reverse2(arr5));


// 6. Array slice method

// const slice = function (arr) {
//
// }
