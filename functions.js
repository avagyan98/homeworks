function chackAge1(age) {
    return age > 18 ? true : "Parents allowed?";
}

console.log(chackAge1(10));

function chackAge2(age) {
    return age > 18 || "Parents allowed?"
}

console.log(chackAge2(10));


function minNumber(a, b) {
    return a < b ? a : b;
}

console.log(minNumber(3, 4));


function powNumber (x, n) {
    let firstX = x;

    if(n === -1) return 1 / x;
    if(n < 0) {
        for(let i = 0; i < -(n + 1); i++) {
            x = firstX * x;
        }
        return 1 / x;
    };


    if(n === 0) return 1;
    if(n === 1) return x;

    for(let i = 0; i < n - 1; i++) {
        x = firstX * x;
    }
    return x;
}

console.log(powNumber(2, 3));

// function to arrow

let ask = (question, yes, no) => {
    if (confirm(question)) yes()
    else no();
}

ask(
    "Вы согласны?",
    () => { console.log("Вы согласились."); },
    () => { console.log("Вы отменили выполнение."); }
);
