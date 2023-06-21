// 1. Translate border-left-width to borderLeftWidth

function camelize(str) {
    return str.split('-').map((item, index) => index === 0 ? item : item[0].toUpperCase() + item.slice(1)).join('');
}

const string1 = 'abc-defgh-igklmn';
console.log(camelize(string1))


// 2. Filter range

function filterRange(arr, a, b) {
    return arr.filter(num => num >= a && num <= b)
}

const numbers2 = [5, 3, 8, 1];
console.log(filterRange(numbers2, 1, 4));


// 3. Filter range "in place"

function filterRangeInPlace(arr, a, b) {
    for(let i = 0; i < arr.length; i++){
        if(arr[i] <= a || arr[i] >= b){
            arr.splice(i, 1);
        }
    }
}

const numbers3 = [5, 3, 8, 1];
filterRangeInPlace(numbers3, 1, 4);
console.log(numbers3)


// 4. Sort in decreasing order

let numbers4 = [5, 2, 1, -10, 8];
numbers4.sort((a, b) => b - a);
console.log(numbers4)


// 5. Copy and sort array

function copySorted(arr) {
   return arr.slice().sort()
}

let arr5 = ["HTML", "JavaScript", "CSS"];
console.log(copySorted(arr5), arr5)


// 6. Create an extendable calculator

function Calculator() {
    this.operators = {
        "+" : (a, b) => a + b,
        "-" : (a, b) => a - b,
    }

    this.calculate = function(str) {
        const [elem1, operator, elem2] = str.split(" ");

        return this.operators[operator](+elem1, +elem2);
    }

    this.addMethod = function (name, func) {
         this.operators[name] = func
    }
}

const calc = new Calculator;
console.log(calc.calculate("1 + 2"))
const powerCalc = new Calculator;
powerCalc.addMethod("**", (a, b) => a ** b);
const result = powerCalc.calculate("2 ** 3");
console.log(result)


// 7. Map to names

let vasya7 = { name: "Вася", age: 25 };
let petya7 = { name: "Петя", age: 30 };
let masha7 = { name: "Маша", age: 28 };

let users7 = [ vasya7, petya7, masha7 ];

let names7 = users7.map(item => item.name)
console.log(names7)


// 8. Map to objects

let vasya8 = { name: "Вася", surname: "Пупкин", id: 1 };
let petya8 = { name: "Петя", surname: "Иванов", id: 2 };
let masha8 = { name: "Маша", surname: "Петрова", id: 3 };

let users8 = [ vasya8, petya8, masha8 ];

let usersMapped8 = users8.map(item =>({ fullName: `${item.name} ${item.surname}`, id: item.id }));
console.log(usersMapped8)


// 9. Sort users by age

let vasya9 = { name: "Вася", age: 25 };
let petya9 = { name: "Петя", age: 30 };
let masha9 = { name: "Маша", age: 28 };

let arr9 = [ vasya9, petya9, masha9 ];

function sortByAge(users) {
    return users.sort((a, b) => a.age - b.age)
}

console.log(sortByAge(arr9))


// 10. Shuffle an array

function shuffle(array) {
    return array.sort(() => Math.random() - 0.5);
}

let arr10 = [1, 2, 3];
console.log(shuffle(arr10))


// 11. Get average age

let vasya11 = { name: "Вася", age: 25 };
let petya11 = { name: "Петя", age: 30 };
let masha11 = { name: "Маша", age: 29 };

let arr11 = [ vasya11, petya11, masha11 ];

function getAverageAge(array) {
    return array.reduce((sumAge, item) => sumAge + item.age, 0) / array.length
}
console.log(getAverageAge(arr11))


// 12. Filter unique array members

function unique(arr) {
    let uniqueArr = [arr[0]];

    for(let i = 1; i < arr.length; i++) {
        if(!uniqueArr.includes(arr[i])) {
            uniqueArr.push(arr[i])
        }
    }

    return uniqueArr
}

let strings12 = ["кришна", "кришна", "харе", "харе",
    "харе", "харе", "кришна", "кришна", ":-O"
];

console.log(unique(strings12))


// 13. Create keyed object from array

function groupById(arr) {
    return arr.reduce((obj, item) => {
        obj[item.id] = item
        return obj
    } ,{})
}

let users13 = [
    {id: 'john', name: "John Smith", age: 20},
    {id: 'ann', name: "Ann Smith", age: 24},
    {id: 'pete', name: "Pete Peterson", age: 31},
];

let usersById13 = groupById(users13);
console.log(usersById13)
