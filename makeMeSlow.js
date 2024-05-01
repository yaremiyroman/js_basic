// // Calling makeMeSlow() should take at least 7 seconds

// function makeMeSlow(timeout = 7500) {
// 	console.log(`Set timeout for ${timeout}`);

// 	return setTimeout(function() {
//         alert(timeout);
//     }, timeout);
// }

// makeMeSlow();







// // Calling makeMeSlow() should take at least 7 seconds

// function makeMeSlow(timeout = 7500) {
// 	console.log(`Set timeout for ${timeout}`);

//     const timerPromise = new Promise((resolve, reject) => {
//         console.log(`Set promise`);

//     	const timer = setTimeout(function() {
//             alert(timeout);
//             resolve();
//         }, timeout);
//     });

//     timerPromise.then(() => {
//         console.log(`then ${timeout} passed`);
//         console.log("Empty Promise resolved!");
//     }).catch((error) => {
//         console.error("Empty Promise rejected:", error);
//     });

//     // return timer;

// }

// makeMeSlow();
// // const result = makeMeSlow();
// // console.log('result >', result);




// // Calling makeMeSlow() should take at least 7 seconds

// function makeMeSlow(n) {
//     console.log('-start-');

//     return function fibonacci(n = 10) {
//         if (n <= 1) {
//             return n;
//         } else {
//             return fibonacci(n - 1) + fibonacci(n - 2);
//         }
//     }
// }

// console.time('Fibonacci calculation start');
// const result = makeMeSlow(40)();
// console.time('Fibonacci calculation end');

// console.log(`Fibonacci = ${result}`);










// Calling makeMeSlow() should take at least 7 seconds

function makeMeSlow(n = BigInt(10)) {
    if (n <= BigInt(1)) {
        return n;
    } else {
        return makeMeSlow(n - BigInt(1)) + makeMeSlow(BigInt(n) - BigInt(2));
    }
}

const start = new Date().getTime()
console.log('Fibonacci calculation start: ', start);

const result = makeMeSlow(BigInt(30));
console.log(`Fibonacci = ${result}`);

const passedBy = new Date().getTime() - start;
console.log('Passed by: ', passedBy);

