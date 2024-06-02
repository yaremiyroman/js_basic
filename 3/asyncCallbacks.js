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
// // Другий аргумент Object.create використовується для додавання властивостей name та age до john.
// // Ці властивості мають атрибути writable, configurable та enumerable, які можуть бути налаштовані.










////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
// // Ось приклад використання Object.defineProperty() для визначення властивості з configurable: false. Це означає, що властивість не можна буде видалити або змінити її дескриптори (за винятком значення, якщо writable: true)

// const person4 = {};

// Object.defineProperty(person4, 'name', {
//     configurable: false, // Властивість не можна видалити або змінити її дескриптори
//     enumerable: true, // Властивість буде перераховуватися в циклах
//     writable: true, // Значення властивості можна змінювати
//     value: 'John' // Початкове значення властивості
// });

// console.log(person4.name); // Виведе 'John'

// // Спроба змінити значення властивості
// person4.name = 'Jane';
// console.log(person4.name); // Виведе 'Jane'

// // Спроба видалити властивість (не вдасться через configurable: false)
// delete person4.name;
// console.log(person4.name); // Виведе 'Jane', властивість не видалена

// // Спроба змінити дескриптори властивості (викличе помилку через configurable: false)
// try {
//     Object.defineProperty(person4, 'name', {
//         writable: false
//     });
// } catch (e) {
//     console.error(e); // TypeError: Cannot redefine property: name
// }
// // configurable: false: Властивість name не можна видалити або змінити її дескриптори (наприклад, зробити її не writable або змінити геттери/сеттери).
// // enumerable: true: Властивість буде перераховуватися в циклах, таких як for...in.
// // writable: true: Значення властивості можна змінювати.
// // value: 'John': Початкове значення властивості.







////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
// Що таке асинхронний код

// Asynchronous programming is a technique that enables your program to start a potentially long-running task and still be able to be responsive to other events while that task runs, rather than having to wait until that task has finished. Once that task has finished, your program is presented with the result.

// fetch
// getUserMedia
// Asking a user to select files using showOpenFilePicker()



// Synchronous programming
// const name = "Miriam";
// const greeting = `Hello, my name is ${name}!`;
// console.log(greeting);
// // "Hello, my name is Miriam!"

// // Declares a string called name.
// // Declares another string called greeting, which uses name.
// // Outputs the greeting to the JavaScript console.


// // At each point, the browser waits for the line to finish its work before going on to the next line. It has to do this because each line depends on the work done in the preceding lines.

// // That makes this a synchronous program. It would still be synchronous even if we called a separate function, like this:
// function makeGreeting(name) {
//     return `Hello, my name is ${name}!`;
// }

// // Here, makeGreeting() is a synchronous function because the caller has to wait for the function to finish its work and return a value before the caller can continue.


// window.setTimeout(function () {
//     console.log(makeGreeting('Hi!'))
// }, 1000);



// The reason for this is that this JavaScript program is single-threaded. A thread is a sequence of instructions that a program follows. Because the program consists of a single thread, it can only do one thing at a time: so if it is waiting for our long-running synchronous call to return, it can't do anything else.

// What we need is a way for our program to:

// Start a long-running operation by calling a function.
// Have that function start the operation and return immediately, so that our program can still be responsive to other events.
// Have the function execute the operation in a way that does not block the main thread, for example by starting a new thread.
// Notify us with the result of the operation when it eventually completes.




// // SYNC
// function toughFn(i = 1, top = 100) {
//     console.log('counter >', i);
//     return i >= top ? false : toughFn(i + 1, top);
// }

// toughFn(1, 1000);

// console.log('21');


// // ASYNC
// function toughFn(i = 1, top = 100) {
//     console.log('counter >', i);
//     return i >= top ? false : setTimeout(() => toughFn(i + 1), 100);
// }

// toughFn(1, 1000);

// console.log('21');







// Code example: synchronous callback

// const arr = [1, 2, 3]
// const doubler = x => x * 2
// const doubled = arr.map(doubler)



// Code example: asynchronous callback

// const addButton = document.querySelector("#add");
// addButton.addEventListener("click", () => {
//     console.log("You clicked #addButton")
// })
// The addEventListener method attaches an event handler to a DOM element. The details of this method is not important here; all we need to know is that the second parameter is treated as an asynchronous callback function which is only executed when the particular event is triggered on the target node. So, in this case, the async callback function is called every time we click on the #add element.









////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
// Загальний огляд механізму EventLoop













////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
// ///////////Функції зворотного виклику
////// звичайний колбек

// A callback is a function passed as an argument when calling a function (high-order function) that will start executing a task in the background.
// And when this background task is done running, it calls the callback function to let you know about the changes
// function callBackTech(callback, tech) {
//     console.log("Calling callBackTech!");
//     if (callback) {
//         callback(tech);
//     }
//     console.log("Calling callBackTech finished!");
// }

// function logTechDetails(tech) {
//     if (tech) {
//         console.log("The technology used is: " + tech);
//     }
// }

// callBackTech(logTechDetails, "HTML5");






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




////////////////////////////////////
// async function getMedia() {
//     let stream = null;

//     try {
//         stream = await navigator.mediaDevices.getUserMedia({
//             audio: true,
//             video: true,
//         });

//         console.log('stream > ', stream);
//         /* use the stream */
//     } catch (err) {
//         /* handle the error */
//     }
// }

// getMedia();


////////////////////////////////////////////////
// navigator.geolocation.getCurrentPosition(location => {
//     coordinates = location.coords;
//     console.log(`coordinates > ${coordinates.latitude}, ${coordinates.longitude}`);
// });




























// setTimeout / clearTimeout
// The setTimeout() is executed only once.

// If you need repeated executions, use setInterval() instead.

// Use the clearTimeout() method to prevent the function from starting.

// To clear a timeout, use the id returned from setTimeout():

// myTimeout = setTimeout(function, milliseconds);
// Then you can to stop the execution by calling clearTimeout():

// clearTimeout(myTimeout);






// setInterval / clearInterval
// Рекурсивний setTimeout








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

// Promise.resolve().then(() => {
//     console.log('Promise 1');
// });

// setTimeout(() => {
//     console.log('Timeout 2');
// }, 100);

// async1();

// Promise.resolve().then(() => {
//     console.log('Promise 2');
// });

// console.log('End');

// Пояснення
// Синхронні операції: Всі синхронні операції виконуються спочатку.В цьому випадку, console.log('Start') і console.log('End') виконуються послідовно.

//     Мікротаски: Проміси додаються в чергу мікротасків.Мікротаски виконуються після завершення всіх синхронних операцій.Тому Promise.resolve().then(() => { console.log('Promise 1'); }) і Promise.resolve().then(() => { console.log('Promise 2'); }) виконуються після синхронних операцій, але перед макротасками.

//         Макротаски: Таймери(в цьому випадку setTimeout) додаються в чергу макротасків.Макротаски виконуються після мікротасків.Тому setTimeout(() => { console.log('Timeout 1'); }, 0) виконається після всіх мікротасків, навіть якщо затримка становить 0 мілісекунд.setTimeout(() => { console.log('Timeout 2'); }, 100) виконається після Timeout 1, так як його затримка більша.








// console.log('A');

// setTimeout(() => {
//     console.log('B');
// }, 0);

// Promise.resolve().then(() => {
//     console.log('C');
// }).then(() => {
//     console.log('D');
// });

// console.log('E');

// setTimeout(() => {
//     console.log('F');
// }, 0);

// Promise.resolve().then(() => {
//     console.log('G');
// });

// Синхронні операції: console.log('A') і console.log('E') виконуються спочатку.

// Мікротаски:

// Promise.resolve().then(() => { console.log('C'); }) додає мікротаск для виведення C.
// Promise.resolve().then(() => { console.log('G'); }) додає мікротаск для виведення G.
// then(() => { console.log('D'); }) додає мікротаск для виведення D після виконання попереднього промісу.
// Мікротаски виконуються в порядку їх додавання:

// C виконується першим.
// G виконується другим.
// D виконується останнім з мікротасків, оскільки він був доданий під час виконання першого промісу.
// Макротаски:

// setTimeout(() => { console.log('B'); }, 0) виконається після всіх мікротасків.
// setTimeout(() => { console.log('F'); }, 0) виконається після B, оскільки був доданий пізніше.