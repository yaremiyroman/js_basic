function test() { }
Object.setPrototypeOf(test, {});

test();
test.call(); // doesnt work







0.1 / 0.2

0.1 / 0.002
0.1 / 0.0002
0.1 / 0.00002
0.1 / 0.000002
0.1 / 0.0000002
0.1 / 0.00000002
0.1 / 0.000000002
0.1 / 0.0000000002


13.5 / 3
13.2 / 3




// Execution Stack

// різниця між компіляцією та інтерпретацією











// JavaScript функція eval() використовується для виконання рядка JavaScript коду, який передається їй у вигляді аргументу. Ось простий приклад:

// в браузері , потім в коді
var x = 10;
var y = 20;
var code = 'console.log(x + y);';
eval(code); // Результат виводиться в консоль: 30


// У цьому прикладі рядок code містить JavaScript код, який додає значення x та y і виводить результат у консоль. Функція eval() приймає цей рядок як аргумент та виконує його, що призводить до виведення 30.

// Варто зауважити, що використання eval() може бути небезпечним, особливо якщо рядок, який ви передаєте, містить користувацькі дані або введення, оскільки це може відкрити можливості для атак вразливостей, таких як виконання коду. Тому краще уникати використання eval() там, де це можливо, і шукати безпечні альтернативи.




// Існує кілька випадків, коли використання eval() може бути доцільним:

// Динамічна генерація коду: Якщо вам потрібно генерувати JavaScript-код динамічно (наприклад, на основі користувацького введення або конфігурацій), eval() може бути корисним. Наприклад, ви можете створювати функції або обробники подій на льоту з даними, які ви отримуєте.

// Динамічна обробка даних: Іноді вам може знадобитися обробити JavaScript-код, який приходить у вас у вигляді рядка. Наприклад, якщо ви отримуєте JavaScript-код з сервера або із зовнішнього джерела.







// Як створюється Execution Context

// Етап створення — Creation Phase   compilation
// Етап виконання — Execution Phase  interpretation
// jit















// php приклад
// той самий приклад на JS






// Global   області видимості і як ми бачимо змінні
const globalVar = 'GLOBAL A';


function main() {
    // const mainVar = 567;

    // console.log('globalVar > ', globalVar);
    // console.log('mainVar > ', b);

    function inner() {
        // const innerVar = 999;

        // console.log('globalVar > ', globalVar);
        // console.log('mainVar > ', mainVar);
        // console.log('innerVar > ', innerVar);
    }

    inner();
}

// console.log('a > ', a);

main();












// звідки береться це Х - утворює замикання
function outer() {
    const X = 'Hello, World!';

    return function inner() {
        console.log('X > ', X);
    }
}

// const callFunction = inner();

const callFunction = outer();


callFunction();
// inner();








function makeCount() {
    let counter = 0;
    console.log('counter > ', counter);

    return function() {
        return counter++;
    }
}

// makeCount();
// makeCount();
// makeCount();

const goCount = makeCount();


console.log(goCount());
console.log(goCount());
console.log(goCount());
console.log(goCount());










//  Перепишіть функцію sum(a, b) щоб вона працювали у вігляді sum(a)(b)

function sum(a, b) {
    console.log(' a + b  >', a + b);
}

sum(6, 7);

sum(6)
sum(6)(7);


function sum(a) {
    return function (b) {
        console.log(' a + b  >', a + b);
    }
}

sum(7);

sum(7)(7);

// carrying






(function(a) {
    console.log(a);
})(15)