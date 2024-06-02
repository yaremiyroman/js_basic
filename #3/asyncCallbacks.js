// Object.create — це потужний метод у JavaScript, який дозволяє створювати новий об'єкт з певним прототипом. Це дозволяє вам створювати об'єкти, які наслідують від іншого об'єкта, встановлюючи прототип нового об'єкта на певний існуючий об'єкт.

const person = {
    greet: function () {
        console.log(`Hello, my name is ${this.name}`);
    }
};

const john = Object.create(person);
john.name = 'John';
john.greet();  // Hello, my name is John

// person є об'єктом, який має метод greet.
// john створюється з прототипом person.
// Властивість name додається до john, і метод greet успадковується від person.



const person2 = {
    greet: function () {
        console.log(`Hello, my name is ${this.name}`);
    }
};

const john = Object.create(person2, {
    name: {
        value: 'John',
        writable: true,
        configurable: true,
        enumerable: true
    },
    age: {
        value: 30,
        writable: true,
        configurable: true,
        enumerable: true
    }
});

john.greet();  // Hello, my name is John
console.log(john.age);  // 30
// Другий аргумент Object.create використовується для додавання властивостей name та age до john.
// Ці властивості мають атрибути writable, configurable та enumerable, які можуть бути налаштовані.











// Ось приклад використання Object.defineProperty() для визначення властивості з configurable: false. Це означає, що властивість не можна буде видалити або змінити її дескриптори (за винятком значення, якщо writable: true)

const person4 = {};

Object.defineProperty(person4, 'name', {
    configurable: false, // Властивість не можна видалити або змінити її дескриптори
    enumerable: true, // Властивість буде перераховуватися в циклах
    writable: true, // Значення властивості можна змінювати
    value: 'John' // Початкове значення властивості
});

console.log(person4.name); // Виведе 'John'

// Спроба змінити значення властивості
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






// Що таке асинхронний код
// Загальний огляд механізму EventLoop







// Функції зворотного виклику

// setTimeout / clearTimeout
// setInterval / clearInterval
// Рекурсивний setTimeout

// Callback hell


















function async1() {
    console.log('async1 start');
    async2();
    console.log('async1 end');
}

function async2() {
    console.log('async2');
}

console.log('Start');

setTimeout(() => {
    console.log('Timeout 1');
}, 0);

Promise.resolve().then(() => {
    console.log('Promise 1');
});

setTimeout(() => {
    console.log('Timeout 2');
}, 100);

async1();

Promise.resolve().then(() => {
    console.log('Promise 2');
});

console.log('End');

// Пояснення
// Синхронні операції: Всі синхронні операції виконуються спочатку.В цьому випадку, console.log('Start') і console.log('End') виконуються послідовно.

//     Мікротаски: Проміси додаються в чергу мікротасків.Мікротаски виконуються після завершення всіх синхронних операцій.Тому Promise.resolve().then(() => { console.log('Promise 1'); }) і Promise.resolve().then(() => { console.log('Promise 2'); }) виконуються після синхронних операцій, але перед макротасками.

//         Макротаски: Таймери(в цьому випадку setTimeout) додаються в чергу макротасків.Макротаски виконуються після мікротасків.Тому setTimeout(() => { console.log('Timeout 1'); }, 0) виконається після всіх мікротасків, навіть якщо затримка становить 0 мілісекунд.setTimeout(() => { console.log('Timeout 2'); }, 100) виконається після Timeout 1, так як його затримка більша.








console.log('A');

setTimeout(() => {
    console.log('B');
}, 0);

Promise.resolve().then(() => {
    console.log('C');
}).then(() => {
    console.log('D');
});

console.log('E');

setTimeout(() => {
    console.log('F');
}, 0);

Promise.resolve().then(() => {
    console.log('G');
});

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