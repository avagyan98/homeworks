// 1.

let age = prompt("write age", 20);
let result = age >= 14 && age <= 90 ? true : false;


// 2

let age = prompt("write age", 20);
let result = !(age >= 14 && age <= 90);
let result1 = age < 14 && age >90;


// 3.

let login = prompt("Who is this?", "name");

if(login == "Admin"){
    let parol = prompt("Parol", "");

    if(parol == "I'm in charge") {
        alert("Hello");
    }else {
        alert("Wrong password");
    }
}else {
    alert("I don't know you");
}
