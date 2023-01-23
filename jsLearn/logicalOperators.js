// 1.

const age = prompt("write age", 20);
const result = age >= 14 && age <= 90;


// 2

const age = Number(prompt("write age", 20));
const result = !(age >= 14 && age <= 90);
const result1 = age < 14 && age >90;


// 3.

const login = prompt("Who is this?", "name");

if(login === "Admin"){
    let parol = prompt("Parol", "");

    if(parol === "I'm in charge") {
        alert("Hello");
    }else {
        alert("Wrong password");
    }
}else {
    alert("I don't know you");
}
