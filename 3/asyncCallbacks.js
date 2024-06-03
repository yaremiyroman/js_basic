////////////////////////////////////////////////////////////////////////////////////////////////
// Object.create — це потужний метод у JavaScript, який дозволяє створювати новий об'єкт з певним прототипом. Це дозволяє вам створювати об'єкти, які наслідують від іншого об'єкта, встановлюючи прототип нового об'єкта на певний існуючий об'єкт.

// const person = {
//     greet: function () {
//         console.log(`Hello, my name is ${this.name}`);
//     }
// };

// const john = Object.create(person);

// john.name = 'John';
// john.greet();  // Hello, my name is John

// // person є об'єктом, який має метод greet.
// // john створюється з прототипом person.
// // Властивість name додається до john, і метод greet успадковується від person.



// // Другий аргумент Object.create використовується для додавання властивостей name та age до john.

// const person2 = {
//     greet: function () {
//         console.log(`Hello, my name is ${this.name}`);
//     }
// };

// const john = Object.create(person2, {
//     name: {
//         value: 'John',
//         writable: true,
//         configurable: true,
//         enumerable: true
//     },
//     age: {
//         value: 30,
//         writable: true,
//         configurable: true,
//         enumerable: true
//     }
// });

// john.greet();  // Hello, my name is John
// console.log(john.age);  // 30






////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
// // Ось приклад використання Object.defineProperty() для визначення властивості з configurable: false. Це означає, що властивість не можна буде видалити або змінити її дескриптори (за винятком значення, якщо writable: true)

const person4 = {};

Object.defineProperty(person4, 'name', {
    configurable: false, // Властивість не можна видалити або змінити її дескриптори
    enumerable: true, // Властивість буде перераховуватися в циклах
    writable: true, // Значення властивості можна змінювати
    value: 'John' // Початкове значення властивості
});

console.log(person4.name); // Виведе 'John'

// // Спроба змінити значення властивості
person4.name = 'Jane';
console.log(person4.name); // Виведе 'Jane'

// Спроба видалити властивість (не вдасться через configurable: false)
delete person4.name;
console.log(person4.name); // Виведе 'Jane', властивість не видалена

// Спроба змінити дескриптори властивості (викличе помилку через configurable: false)
try {
    Object.defineProperty(person4, 'name', {
        writable: false
    });
} catch (e) {
    console.error(e); // TypeError: Cannot redefine property: name
}
// configurable: false: Властивість name не можна видалити або змінити її дескриптори (наприклад, зробити її не writable або змінити геттери/сеттери).
// enumerable: true: Властивість буде перераховуватися в циклах, таких як for...in.
// writable: true: Значення властивості можна змінювати.
// value: 'John': Початкове значення властивості.







////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
// Що таке асинхронний код

// Asynchronous programming is a technique that enables your program to start a potentially long-running task and still be able to be responsive to other events while that task runs, rather than having to wait until that task has finished. Once that task has finished, your program is presented with the result.


// fetch api
// getUserMedia
// timers
// get browser location
// event listeners



// Synchronous programming
// Синхронно строка виконується одразу
const name1 = "Michael";
console.log(`Hello, my name1 is ${name1}!`);

// Після неї строка виконується одразу
const name2 = "Michael";
console.log(`Hello, my name2 is ${name2}!`);


// як зробити асинхронно?
// set timeout є саме в бразуерному API (window.api)

// window.setTimeout(cb, delay)
window.setTimeout(function () {
    console.log('Inside timeout 2s');
}, 2000)


// що цікаво, цей код викличеться до таймаута
// Після неї строка виконується одразу
const name3 = "Michael";
console.log(`Hello, my name3 is ${name3}!`);


// // At each point, the browser waits for the line to finish its work before going on to the next line. It has to do this because each line depends on the work done in the preceding lines.
// The reason for this is that this JavaScript program is single-threaded. A thread is a sequence of instructions that a program follows. Because the program consists of a single thread, it can only do one thing at a time: so if it is waiting for our long-running synchronous call to return, it can't do anything else.







////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
// Загальний огляд механізму EventLoop


// все в стек
// асинки улетают в очередь
// в очереди бежит цикл и когда видит что собітие состоялось, закидіваєт задание из очереди обратно в стек



// http://latentflip.com/loupe









//  як застосувати напррактиці наприклад
// SYNC
function toughFn(i = 1, top = 100) {
    console.log('counter >', i);
    return i >= top ? false : toughFn(i + 1, top);
}

toughFn(1, 1000);

alert('21');





// ASYNC
function toughFn(i = 1, top = 100) {
    console.log('counter >', i);
    return i >= top ? false : setTimeout(() => toughFn(i + 1), 100);
}

toughFn(1, 1000);

alert('21');





// hard
function toughFnHard(i = 1, top = 100) {
    console.log('counter >', i);
    const result = i + 1 * 2 / 3 + 100 - 1000 / 2 * 9 + 1;
    return i >= top ? false : toughFnHard(result, top);
}

toughFnHard(1, 1000);

alert('21');


function toughFnHard(i = 1, top = 100) {
    console.log('counter >', i);
    const result = i + 1 * 2 / 3 + 100 - 1000 / 2 * 9 + 1;
    return i >= top ? false : setTimeout(() => toughFnHard(result), 100);
}

toughFnHard(1, 1000);

alert('21');











////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
// ///////////Функції зворотного виклику

////// звичайний колбек

// A callback is a function passed as an argument when calling a function (high-order function) that will start executing a task in the background.
// And when this background task is done running, it calls the callback function to let you know about the changes

// function iWillGetCallBack(callback, msg) {
//     console.log("Calling iWillGetCallBack!");
//     if (callback) {
//         callback(msg);
//     }
//     console.log("Calling iWillGetCallBack finished!");
// }

// function log(msg) {
//     if (msg) {
//         console.log("The technology used is: " + msg);
//     }
// }

// iWillGetCallBack(log, "HTML5");






//////////// Використання колбеків всередині колбеків


// setTimeout(() => {
//     console.log('First operation completed!');

//     setTimeout(() => {
//         console.log('Second operation completed!');

//         setTimeout(() => {
//             console.log('Third operation completed!');
//         }, 4000);
//     }, 3000);
// }, 2000);




// function firstOperation(callback) {
//     setTimeout(() => {
//         console.log('First operation completed');
//         callback();
//     }, 1000);
// }

// function secondOperation(callback) {
//     setTimeout(() => {
//         console.log('Second operation completed');
//         callback();
//     }, 1000);
// }

// function thirdOperation(callback) {
//     setTimeout(() => {
//         console.log('Third operation completed');
//         callback();
//     }, 1000);
// }

// firstOperation(() => {
//     secondOperation(() => {
//         thirdOperation(() => {
//             console.log('All operations completed');
//         });
//     });
// });






//////// асинхронна підгрузка

// function iFrameLoaded(msg = null) {
//     console.log(`%c${msg}`);
//     console.log('iframe LOADED ');
// }

// function loadIFrame(src, callback) {
//     let iframe = document.createElement('iframe');
//     iframe.src = src;

//     iframe.onload = () => callback();
//     iframe.onerror = () => callback(new Error(`Помилка завантаження скрипту для ${src}`));

//     document.body.append(iframe);
// }

// loadIFrame('https://lms.ithillel.ua/', iFrameLoaded);






////////////////////////////////////////////////
// navigator.geolocation.getCurrentPosition(location => {
//     coordinates = location.coords;
//     console.log(`coordinates > ${coordinates.latitude}, ${coordinates.longitude}`);
// });



























/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
// setTimeout / clearTimeout
// let timeoutID = setTimeout(function, delay, [arg1, arg2, ...]);

// The setTimeout() is executed only once.
// If you need repeated executions, use setInterval() instead.
// Use the clearTimeout() method to prevent the function from starting.
// To clear a timeout, use the id returned from setTimeout():
// myTimeout = setTimeout(function, milliseconds);
// Then you can to stop the execution by calling clearTimeout():
// clearTimeout(myTimeout);

// function: The function to be executed.
// delay: The time, in milliseconds, the timer should wait before the specified function is executed.
// arg1, arg2, ...: Additional arguments to pass to the function (optional).



// timeoutID: The identifier of the timeout you want to cancel. This ID is returned by the setTimeout function.
// clearTimeout is a function that cancels a timeout that was previously established by calling setTimeout.

// clearTimeout(timeoutID);

// Here's a practical example of using both setTimeout and clearTimeout:
// Set a timeout to execute a function after 5 seconds

let timeoutID = setTimeout(() => {
    console.log('This message will appear after 5 seconds.');
}, 5000);

// Clear the timeout before it completes, preventing the function from executing
clearTimeout(timeoutID);



/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
// setInterval / clearInterval

// let intervalID = setInterval(function, delay, [arg1, arg2, ...]);
let intervalID = setInterval(() => {
    console.log('This message is displayed every 2 seconds.');
}, 2000);


clearInterval(intervalID);






// interval + timeout
// set some interval
const intervalID_1 = setInterval(() => {
    console.log('This message will be displayed every 0.5 seconds until the interval is cleared.');
}, 500);

// Clear this interval after 10 seconds
setTimeout(() => {
    clearInterval(intervalID_1);
    console.log('The interval has been cleared.');
}, 10000);





// Here's a practical example of using both setInterval and clearInterval:
let counter = 0;

// Set an interval to execute a function every 1 second
let intervalID6 = setInterval(() => {
    console.log('Counter:', ++counter);

    // Clear the interval after 5 counts
    if (counter === 5) {
        clearInterval(intervalID6);
        console.log('The interval has been cleared after 5 counts.');
    }
}, 1000);











/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
// Рекурсивний setTimeout

// ноді виникає необхідність дочекатися кінця виконання функції для того, щоб запланувати новий таймер. У такому випадку нам допоможить рекурсивний виклик setTimeout
// Рекурсивний setTimeout — це метод, який дозволяє виконувати функцію з затримкою, подібно до setInterval, але з більшою гнучкістю в управлінні інтервалами між викликами. Він дозволяє виконувати функцію через певні інтервали часу, але кожен новий виклик планується після завершення попереднього.

// Переваги рекурсивного setTimeout
// Гнучкість у встановленні інтервалів: можна змінювати інтервал між викликами функції в залежності від умов.
// Уникнення накопичення викликів: виклик наступного setTimeout відбувається після завершення поточної функції, що знижує ймовірність накопичення невиконаних викликів у випадку, коли функція виконується довше, ніж інтервал.


function recursiveTimeout() {
    console.log('This message is displayed every 2 seconds.');

    setTimeout(recursiveTimeout, 2000);
}

// Запуск рекурсивного setTimeout
setTimeout(recursiveTimeout, 2000);







// Умовне припинення рекурсії

let counter5 = 0;

function recursiveTimeout() {
    counter5++;
    console.log('Counter5:', counter5);

    if (counter5 < 5) {
        setTimeout(recursiveTimeout, 1000);
    } else {
        console.log('Recursion stopped.');
    }
}

// Запуск рекурсивного setTimeout
setTimeout(recursiveTimeout, 1000);






// Динамічне управління інтервалами
function recursiveTimeout(delay) {
    console.log('This message is displayed with a dynamic delay:', delay);

    // Наступний інтервал затримки може бути змінений
    let nextDelay = delay + 1000;

    setTimeout(() => recursiveTimeout(nextDelay), nextDelay);
}

// Запуск рекурсивного setTimeout з початковою затримкою 1 секунда
setTimeout(() => recursiveTimeout(1000), 1000);












/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
// Callback hell


// const frameURL = 'https://lms.ithillel.ua/';

// function iFrameLoaded(msg = '') {
//     console.log(`%c${msg}`, `color: green;`);
// }

// function loadIFrame(src, callback) {
//     let iframe = document.createElement('iframe');

//     try {
//         iframe.src = src;
//         iframe.onload = () => callback('Frame loaded');
//         iframe.onerror = () => callback(new Error(`Помилка завантаження фрейма для ${src}`));
//         document.body.append(iframe);
//     } catch (e) {
//         callback(new Error(`Помилка завантаження фрейма для ${src}`))
//     }
// }

// loadIFrame(frameURL, iFrameLoaded);





// function handleError(error) {
//     if (!!error) throw new Error('Error happened!');
// }

// loadIFrame(frameURL, function (msg, error) {
//     if (!!error) {
//         handleError(error);
//     } else if (!!msg) {
//         iFrameLoaded(msg);
//         loadIFrame(frameURL, function (msg, error) {
//             if (!!error) {
//                 handleError(error);
//             } else if (!!msg) {
//                 iFrameLoaded(msg);
//                 loadIFrame(frameURL, function (msg, error) {
//                     if (!!error) {
//                         handleError(error);
//                     } else if (!!msg) {
//                         iFrameLoaded(msg);
//                         iFrameLoaded('IFrames Loaded!')
//                     }
//                 });
//             }
//         });
//     }
// });






// loadIFrame(frameURL, step1);

// function step1(msg, error) {
//     if (!!error) {
//         handleError(error);
//     } else {
//         iFrameLoaded(msg);
//         loadIFrame(frameURL, step2);
//     }
// }

// function step2(msg, error) {
//     if (!!error) {
//         handleError(error);
//     } else {
//         iFrameLoaded(msg);
//         loadIFrame(frameURL, step3);
//     }
// }

// function step3(msg, error) {
//     if (!!error) {
//         handleError(error);
//     } else {
//         iFrameLoaded(msg);
//     }
// }
















/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
// function async1() {
//     console.log('async1 start');
//     async2();
//     console.log('async1 end');
// }

// function async2() {
//     console.log('async2');
// }

// console.log('Start');

// setTimeout(() => {
//     console.log('Timeout 1');
// }, 0);

// setTimeout(() => {
//     console.log('Timeout 1');
// }, 1);

// Promise.resolve().then(() => {
//     console.log('Promise 1');
// });

// setTimeout(() => {
//     console.log('Timeout 0');
// }, 0);

// setTimeout(() => {
//     console.log('Timeout 100');
// }, 100);


// async1();

// Promise.resolve().then(() => {
//     console.log('Promise 2');
// });

// console.log('End');



// Пояснення

// Всі синхронні операції виконуються спочатку.
// одна зв одною


// Мікротаски виконуються в порядку їх додавання
// Проміси додаються в чергу мікротасків
// Мікротаски виконуються після завершення всіх синхронних операцій
// але перед макротасками.

// Таймери(в цьому випадку setTimeout) додаються в чергу макротасків.
// Макротаски виконуються після мікротасків.
// Тому setTimeout(() => { console.log('Timeout 1'); }, 0) виконається після всіх мікротасків, навіть якщо затримка становить 0 мілісекунд
