// 1. Hello object

const user = {};

user.name = "John";
user.surname = "Smith";

console.log(user);

user.name = "Pete";

console.log(user);

delete user.name;

console.log(user);


// 2. Check for emptiness

function isEmpty (obj){
    return !Object.keys(obj)[0];
}

const object = {
    name: "Peto",
};

console.log(isEmpty(object))


// 3. Sum object properties

function sum(obj) {
    let result = 0;

    for(key in obj) {
        result += obj[key]
    }

    return result
}

const salaries = {
    John: 120,
    Ann: 130,
    Pete: 140,
};

console.log(sum(salaries));


// 4. Multiply numeric property values by 2

function multiplyNumeric(obj) {
    for(key in obj) {
        if(typeof obj[key] === 'number'){
            obj[key] *= 2;
        }
    }

    return obj
}

const menu = {
    width: 200,
    height: 300,
    title: "My menu",
};

console.log(multiplyNumeric(menu))
