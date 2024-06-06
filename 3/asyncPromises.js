// Проміси (Promises) у JavaScript є потужним інструментом для роботи з асинхронними операціями. Вони дозволяють зручно управляти асинхронним кодом, уникати "callback hell" і покращувати читабельність коду.
// Проміс - це обʼєкт


let promise = new Promise(function (resolve, reject) {
    // executor
});

// Функція передана в new Promise називається виконавцем. Коли створюється new Promise вона виконується автоматично. В ній знаходиться код “виробник” котрий зрештою поверне результат.

// аргументи resolve і reject – це колбеки які надає нам сам JavaScript. Наш код – тільки всередині виконавця.

// функція-виконавець завершить свою роботу, неважливо – зараз чи пізніше, вона повинна викликати один з цих колбеків:

// resolve(value) – якщо код успішно виконався, з результатом value.

let promise2 = new Promise(function (resolve, reject) {
    // функція-виробник викликається автоматично, при виклику new Promise

    // через 1 секундну повідомляється що задача виконання з результатом "завершено"
    setTimeout(() => resolve("завершено"), 1000);
});

promise2.then(result => console.log('res >', result));




// В об’єкта promise, що повертається конструктором new Promise є внутрішні властивості:

// state (стан) — спочатку "pending" (очікування), в результаті виконання функції він може змінюватися на: "fulfilled" коли викликається метод resolve і на "rejected" коли reject.
// result (результат) — спочатку undefined, далі змінюється на value коли викликається метод resolve(value) або error коли reject(error).

// Властивості state and result – внутрішні властивості об’єкта Promise, тому ми не маємо до них прямого доступу. 

console.log('promise2 > ', promise2);



// reject(error) – якщо виникла помилка, error – об’єкт помилки.

let promise3 = new Promise(function (resolve, reject) {
    // через 1 секунду повідомляється що задача виконана з помилкою
    setTimeout(() => reject(new Error("Ооооой!")), 1000);
});

promise3.catch(err => console.log(err));



// функція-виконавець виконує задачу (щось, що як правило потребує часу), потім викликається один з методів resolve чи reject, в залежності від успішності виконання коду. Які своєю чергою змінюють стан об’єкта який повертає конструктор new Promise.





// моментальний виклик resolve
let promise6 = new Promise(function (resolve, reject) {
    // задача що не потребує часу
    resolve(123); // моментально видасть результат: 123
});






// Споживачі: then, catch



// Функції споживачі можуть зареєструватись (підписатись) за допомогою методів .then та .catch.

promise.then(
    function (result) { /* обробляє успішне виконання */ },
    function (error) { /* обробляє помилку */ }
);


// Перший аргумент метода .then – функція що викликається коли проміс успішно виконується, тобто переходить зі стану "pending" в "resolved" і отримує результат.

// Другим аргументом метод .then приймає функцію, що викликається коли проміс переходить в стан "rejected" і отримує помилку.


let promise66 = new Promise(function (resolve, reject) {
    setTimeout(() => resolve("завершено!"), 1000);
    // setTimeout(() => reject(new Error("Ооооой!")), 1000);
});

// метод resolve запустить першу функцію передану в .then
promise66.then(
    result => console.log(result), // виведе "завершено!" через 1 секунду
    error => console.log(error) // не запуститься
);

// Якщо ми зацікавлені тільки в успішному виконанні задачі, тоді в .then можна передати тільки одну функцію:

let promise77 = new Promise(resolve => {
    setTimeout(() => resolve("завершено!"), 1000);
    // setTimeout(() => reject(new Error("Ооооой!")), 1000);
});

promise77.then((res) => console.log(res)); // виведе "завершено!" через 1 секун
promise77.catch((err) => console.log(err));
promise77.finally(() => console.log("Проміс завершений"));

// Обробник finally не приймає аргументів. В finally ми не знаємо як був завершений проміс, успішно чи ні. І це нормально, тому що зазвичай наше завдання заключаєтсья в тому щоб виконати “загальні” процедури доопрацювання.
// обробник finally не має аргументів, а результат промісу обробляється наступним обробником.
// Обробник finally пропускає результат чи помилку до наступних обробників.


promise11
    .finally(() => console.log("Проміс завершений"))
    .then((res) => console.log(res))
    .catch((err) => console.log(err));



// Ланцюжок
let promise11 = new Promise(resolve => {
    setTimeout(() => resolve("завершено!"), 1000);
});


promise11
    .then((res) => {
        console.log('res 1 >', res);

        // return new Promise((resolve, reject) => { // (*)
        //     setTimeout(() => resolve(result * 2), 1000);
        // });

        return res;
    })
    .then((res) => {
        console.log('res 2 >', res);

        // return new Promise((resolve, reject) => { // (*)
        //     setTimeout(() => resolve(result * 2), 1000);
        // });

        return res;
    })
    .then((res) => {
        console.log('res 3 >', res);

        // return new Promise((resolve, reject) => { // (*)
        //     setTimeout(() => resolve(result * 2), 1000);
        // });

        return res;
    })
    .catch((err) => console.log(err));






////// асинхронна підгрузка

function iFrameLoaded(msg = null) {
    console.log(`%c${msg}`);
    console.log('iframe LOADED ');
}

function loadIFrame(src, callback) {
    let iframe = document.createElement('iframe');
    iframe.src = src;

    iframe.onload = () => callback();
    iframe.onerror = () => callback(new Error(`Помилка завантаження скрипту для ${src}`));

    document.body.append(iframe);
}

loadIFrame('https://lms.ithillel.ua/', iFrameLoaded);



////// асинхронна підгрузка з промісом

function loadIFrame(src) {
    return new Promise(function (resolve, reject) {
        let iframe = document.createElement('iframe');
        iframe.src = src;

        iframe.onload = () => resolve('IFrame loaded');
        iframe.onerror = () => reject(new Error(`Помилка завантаження скрипту для ${src}`));

        document.body.append(iframe);
    });
}

let iFramePromise = loadIFrame("https://ithillel.ua/");

iFramePromise.then(
    result => console.log(result),
    error => console.log(`Помилка: ${error.message}`)
);

iFramePromise.then(result => console.log(result, ' 2'));












// Promise.all приймає ітеративний об’єкт (зазвичай масив промісів) і повертає новий проміс.

// Новий проміс завершиться тоді, коли всі перераховані проміси завершаться, а його результатом стане масив їхніх результатів.

const promises = [
    new Promise(resolve => setTimeout(() => resolve(1), 3000)),
    new Promise(resolve => setTimeout(() => resolve(2), 2000)),
    new Promise(resolve => setTimeout(() => resolve(3), 1000))
];

Promise.all(promises).then((res) => console.log('res > ', res));

// порядок елементів масиву такий самий, як у вихідних промісах. Навіть якщо для завершення першого проміса потрібно буде найбільше часу, його результат все одно буде першим в масиві.

// Якщо будь - який з промісів завершується з помилкою, то проміс, що поверне Promise.all, негайно завершиться з цією ж помилкою.

const promises5 = [
    new Promise(resolve => setTimeout(() => resolve(1), 3000)),
    new Promise(resolve => setTimeout(() => reject(new Error("ERRRRR")), 2000)),
    new Promise(resolve => setTimeout(() => resolve(3), 1000))
];

Promise.all(promises5).then((res) => console.log('res > ', res));







let urls = [
    'https://api.github.com/users/iliakan',
    'https://api.github.com/users/remy',
    'https://api.github.com/users/jeresig'
];

// перетворює кожну URL-адресу в проміс, що повертається fetch
let requests = urls.map(url => fetch(url));

// Promise.all буде очікувати виконання всіх промісів
Promise.all(requests)
    .then(responses => responses.forEach(
        response => console.log(`${response.url}: ${response.status}`)
    ));







// Promise.all повністю завершується з помилкою, якщо завершується з помилкою будь - який проміс.
// Promise.allSettled просто чекає, коли всі проміси завершаться, незалежно від результату. В отриманому масиві буде:

// {status:"fulfilled", value:result} для успішних відповідей,
// {status:"rejected", reason:error} для помилок.



// let urls = [
//     'https://api.github.com/users/iliakan',
//     'https://api.github.coasdfm/users/remy',
//     'https://api.github.com/users/jeresig'
// ];

// // перетворює кожну URL-адресу в проміс, що повертається fetch
// let requests = urls.map(url => fetch(url).then(res => res.json()));

// // Promise.all буде очікувати виконання всіх промісів
// Promise.allSettled(requests)
//     .then(responses => { // (*)
//         responses.forEach((result, num) => {
//             if (result.status == "fulfilled") {
//                 // console.log(result.value);
//                 console.log(result.value);
//                 console.log(result.value.body);
//                 console.log(`${urls[num]}: ${result.value.body}`);
//                 console.log(`${urls[num]}: ${result.status}`);
//             }
//             if (result.status == "rejected") {
//                 console.log(`${urls[num]}: ${result.status}`);
//             }
//         });
//     });






// Promise.race
// Подібний до Promise.all, але чекає лише на перший виконаний проміс та отримує його результат (або помилку).


Promise.race([
    new Promise((resolve, reject) => setTimeout(() => resolve(1), 1000)),
    new Promise((resolve, reject) => setTimeout(() => reject(new Error("Упс!")), 2000)),
    new Promise((resolve, reject) => setTimeout(() => resolve(3), 3000))
]).then(alert); // 1



//   Схожий на Promise.race, але чекає лише на перший успішно виконаний проміс і отримує його результат. Якщо ж всі надані проміси завершуються з помилкою, то повертається проміс, що завершується з помилкою за допомогою AggregateError – спеціального об’єкта помилки, який зберігає всі помилки промісів у своїй властивості errors.

Promise.any([
    new Promise((resolve, reject) => setTimeout(() => reject(new Error("Упс!")), 1000)),
    new Promise((resolve, reject) => setTimeout(() => resolve(1), 2000)),
    new Promise((resolve, reject) => setTimeout(() => resolve(3), 3000))
]).then(alert); // 1



// Цей метод використовують, коли потрібно побудувати асинхронний ланцюжок і ми маємо початковий результат.


// Promise
// 	.resolve(42)
// 	.then(result => {
// 	  console.log(result); // Виведе: 42
// 	});


// Promise
// 	.reject("Something went wrong")
// 	.catch(error => {
// 	  console.error(error); // Виведе: Something went wrong
// 	});







// Асинхронні функції

async function f() {
    return 1;
}

// Слово async перед функцією означає одну просту річ: функція завжди повертає проміс.

f().then(alert); // 1



// теж саме, що

async function f() {
    return Promise.resolve(1);
}

f().then(alert);




// Ключове слово await змушує JavaScript чекати, поки проміс не виконається, та повертає його результат.

async function f() {

    let promise = new Promise((resolve, reject) => {
        setTimeout(() => resolve("готово!"), 1000)
    });

    let result = await promise; // чекатиме, поки проміс не виконається (*)

    alert(result); // "готово!"
}

f();

// Це просто більш елегантний синтаксис отримання результату проміса, ніж promise.then










// fetch('https://jsonplaceholder.typicode.com/todos/1')
//       .then(response => response.json())
//       .then(json => console.log(json))


// зробимо простий проміс
// функція, що повертає проміс з затримкою

function delay(ms) {
    return new Promise(resolve => setTimeout(() => resolve(), ms));
}

const url = 'https://jsonplaceholder.typicode.com/todos';


// зробимо інший проміс, щоб був лацнюжок

function fetchToDoS() {
    // delay(2000).then(() => {
    //     fetch(url).then(response => {
    //         return response.json();
    //     });
    // });

    delay(2000)
        .then(() => {
            return fetch(url);
        })
        .then(response => {
            return response.json();
        });;
}


fetchToDoS().then(data => {
    console.log('data > ', data);
})





async function fetchAsyncTodos() {
    // try {
    await delay(2000); // чекаємо поки зарезолавиться
    const response = await fetch(url); // чекаємо поки зарезолавиться
    const data = await response.json();
    console.log('data > ', data);
    // } catch (e) { 
    //     console.error(e);
    // }
}

fetchAsyncTodos();








////// асинхронна підгрузка з промісом

function loadIFrame(src) {
    return new Promise(function (resolve, reject) {
        let iframe = document.createElement('iframe');
        iframe.src = src;

        iframe.onload = () => resolve('IFrame loaded');

        iframe.onerror = () => reject(new Error(`Помилка завантаження скрипту для ${src}`));

        document.body.append(iframe);
    });
}

// let iFramePromise5 = loadIFrame("https://ithillel.ua/");

// iFramePromise5.then(
//     result => console.log(result),
//     error => console.log(`Помилка: ${error.message}`)
// );

// iFramePromise5.then(result => console.log(result, ' 2'));


async function loadIFrames() {
    await loadIFrame("https://ithillel.ua/");
    await loadIFrame("https://ithillel.ua/");
    await loadIFrame("https://ithillel.ua/");
    await loadIFrame("https://ithillel.ua/");
    await loadIFrame("https://ithillel.ua/");
}

loadIFrames();