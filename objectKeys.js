// 1. Sum the properties

const salariesWorkers = {
    "John": 100,
    "Pete": 300,
    "Mary": 250,
};

function sumSalaries1(salaries) {
    let peopleSalaries = Object.values(salaries)
    let result = 0;

    for(let salary of peopleSalaries) {
        result += salary
    }

    return result
}

function sumSalaries2(salaries) {

    return Object.values(salaries).reduce((a, b) => a+b, 0);
}

console.log(sumSalaries1(salariesWorkers));
console.log(sumSalaries2(salariesWorkers));


// 2. Count properties

const user = {
    name: 'John',
    age: 30
};

function count(obj) {
    return Object.keys(obj).length
}

console.log(count(user))
