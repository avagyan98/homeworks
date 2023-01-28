// Even numbers (2-10)

for(let i = 2; i <= 10; i += 2) {
    console.log(i);
}

// from for to while

// this is example
// for (let i = 0; i < 3; i++) {
//     console.log( `number ${i}!` );
// }

// 1.

let num1 = 0;

while(num1 < 3) {
    console.log( `number ${num1}!` );
    num1++;
}

// 2.

let num2 = 0;

while(num2 < 3) console.log( `number ${num2++}!` );


//primes number

function primesNumbers(n) {
    if(n < 2) return;
    let arr = [];

    firstLoop: for(let i = 2; i <= n; i++) {
         for(let j = 2; j <= Math.sqrt(i); j++) {
            if(i % j === 0) continue firstLoop;
        }
         arr.push(i);
    }
    return arr;
}

console.log(primesNumbers(100))


// from switch to if

function switchToIf(browser) {
    if(browser === 'Edge') {
        console.log("You've got the Edge!")
    } else if(browser === 'Chrome' || browser === 'Firefox' || browser === 'Safari' || browser === 'Opera') {
        console.log('Okay we support these browsers too')
    }else {
        console.log('We hope that this page looks ok!')
    }
}

console.log(switchToIf("Hello World!"))

// from if to switch

function ifToSwitch(num) {
    switch(num) {
        case 0:
            console.log("you wrote 0")
            break;
        case 1:
            console.log("you wrote 1");
            break;
        case 2:
        case 3:
            console.log("you wrote 2 or 3");
            break;
        default:
            console.log("you wrote another numbeer");
    }
}

ifToSwitch(+prompt("write number from 0 to 3", "2"));



