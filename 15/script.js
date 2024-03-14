// В JavaScript, подія focus спрацьовує, коли елемент стає активним,
// тобто коли користувач переходить до цього елемента, наприклад,
// клікаючи на нього або переходячи до нього за допомогою клавіатури
// (наприклад, використовуючи клавішу табуляції).

{/* <input type="text" id="myInput" placeholder="Введіть текст">  */}

var inputElement = document.getElementById('myInput');

inputElement.addEventListener("focus", function (event) {
    // event.target.value = 'Щось Там';
    // console.log('Значення введеного тексту змінилося:', event.target.value);
    console.log("Елемент отримав фокус!");
});

// В JavaScript подія blur спрацьовує, коли фокус з елемента забирається,
// тобто коли користувач переходить з даного елемента на інший, як правило,
// клікнувши або використовуючи клавішу табуляції для переходу
// до наступного елемента.

var inputElement = document.getElementById('myInput');

// Додаємо обробник події blur
inputElement.addEventListener('blur', function(event) {
    // console.log('Значення введеного тексту змінилося:', event.target.value);
  console.log('Фокус втрачено з елемента вводу!');
});

// подія input спрацьовує, коли значення введеного користувачем
// тексту в елемент форми змінюється. Ця подія корисна, коли вам
// потрібно відслідковувати миттєві зміни у полі вводу, наприклад,
// для валідації введеного користувачем тексту або негайного
// відображення результатів пошуку.

{/* <input type="text" id="myInput" placeholder="Введіть текст"></input> */}
var inputElement = document.getElementById('myInput');

// Додаємо обробник події input
inputElement.addEventListener('input', function(event) {
  console.log('Значення введеного тексту змінилося:', event.target.value);
});


// подія change спрацьовує, коли значення елемента форми змінюється і втрачає фокус.
// Ця подія часто використовується для відстеження змін в елементах форми,
// таких як поля вводу, вибір зі списку, прапорці, тощо.


inputElement.addEventListener('change', function(event) {
    console.log('Значення введеного тексту змінилося:', event.target.value);
});


// Подія submit в JavaScript спрацьовує, коли форма відправляється, зазвичай після
// натискання кнопки "Submit" або виклику методу submit() на об'єкті форми. Ця
// подія дозволяє вам виконати дії перед тим, як дані форми будуть надіслані на
// сервер або взяти після їх надсилання.


{/* <form id="myForm">
  <input type="text" name="username" placeholder="Введіть ім'я користувача">
  <input type="password" name="password" placeholder="Введіть пароль">
  <button type="submit">Увійти</button>
</form> */}

// var formElement = document.getElementById('myForm');

// // Додаємо обробник події submit
// formElement.addEventListener('submit', function(event) {
//     event.preventDefault(); // Зупиняємо стандартну дію надсилання форми

//     // Отримуємо дані форми
//     var formData = new FormData(event.target);

//     // Виводимо дані у консоль
//     for (var pair of formData.entries()) {
//         console.log(pair[0] + ': ' + pair[1]);
//     }
// });



// Валідація форми

// const testForm = document.getElementById("testForm");

// testForm.addEventListener("submit", event => {
//     const input1 = event.target["text-input"].value;
//     const input2 = event.target["text-input2"].value;
//     const input3 = event.target["text-input3"].value;

//     if (input1.length === 0 || input2.length === 0 || input3.length === 0) {
//         console.log('ЯКЕСЬ ПОЛЕ ПУСТЕ!!!!!!');
//         event.preventDefault();
//     }
// });







// Об'єктна модель браузера (BOM) в JavaScript - це набір об'єктів, 
// які надають доступ до властивостей та методів браузера, 
// необхідних для взаємодії з веб-сторінкою та її оточенням.
//  Ось деякі основні об'єкти та їх властивості/методи, які зазвичай використовуються:


// window.innerWidth та window.innerHeight: Розміри внутрішньої частини вікна браузера.

// В об'єкті Window веб-браузера є дві властивості, які дозволяють отримати значення
//  зсуву прокрутки сторінки по горизонталі та вертикалі відповідно. Ці властивості 
//  називаються pageXOffset для горизонтального зсуву і pageYOffset для вертикального.
var horizontalScrollOffset = window.pageXOffset;
var verticalScrollOffset = window.pageYOffset;

console.log('Горизонтальний зсув прокрутки:', horizontalScrollOffset);
console.log('Вертикальний зсув прокрутки:', verticalScrollOffset);


// window.setTimeout()/ window.setInterval()

// console.log('1');

// window.setTimeout(
//     () => { console.log(3); },
//     20
// )

// console.log('2');

// window.setInterval(
//     () => { console.log('Interval'); },
//     1000
// )

// -   alert, confirm, prompt, open

// alert('123');

// open('https://www.google.com');

// window.setTimeout(() => {
//     open("https://www.google.com");
// }, 5000);



// Об'єкт window.document в JavaScript представляє DOM (Document Object Model) сторінки,
// яка відкрита в поточному вікні браузера. Цей об'єкт дає доступ до всіх елементів
// і властивостей, які складають HTML-структуру сторінки.







// Об'єкт window.localStorage в JavaScript надає доступ до локального сховища (Local Storage)
// браузера, яке дозволяє зберігати дані у вигляді пар ключ-значення. Ці дані зберігаються
//  між сеансами браузера і доступні для використання наступним разом, коли користувач
//  відкриває ту ж саму сторінку.

// Локальне сховище - це зручний механізм для збереження налаштувань, стану сесії,
// даних користувача та іншої інформації, яка повинна зберігатися між відвідуваннями сторінки.


// Збереження значення в локальному сховищі
localStorage.setItem('username', 'John');

// Отримання значення з локального сховища:
var username = localStorage.getItem('username');
console.log(username); // Виведе 'John'

// Видалення значення з локального сховища:
localStorage.removeItem('username');

// Очистка всього локального сховища:
localStorage.clear();


// Дані в локальному сховищі зберігаються у вигляді рядків.
// Якщо ви зберігаєте нестрокові дані, вам може знадобитися
// привести їх до потрібного типу даних після отримання. Наприклад,
// використовуючи JSON.parse() для розбору JSON-рядка, якщо ви зберігали об'єкти або масиви.

// JSON.stringify(['asdfasf', 'sadfggsahsahsah', 'dsfhdfsjdfgjf'])
// JSON.parse('["asdfasf","sadfggsahsahsah","dsfhdfsjdfgjf"]')



// Так, localStorage може бути використаний для зберігання стану додатка між сеансами
// браузера. Це особливо корисно, коли вам потрібно зберегти налаштування користувача,
//  його останні дії або будь-які інші дані, які вам потрібно зберегти між відвідуваннями сторінки.

// Одним з популярних способів використання localStorage для зберігання стану
//  - це зберігання об'єктів JavaScript в JSON-форматі. Ви можете просто
//  серіалізувати об'єкт у JSON-рядок, щоб зберегти його в localStorage, і
//  потім десеріалізувати його, коли вам потрібно отримати стан назад.

// Ось приклад, як це можна зробити:


// Зберігаємо стан додатка
function saveState(state) {
    localStorage.setItem('appState', JSON.stringify(state));
}

// Отримуємо стан додатка
function getState() {
    var stateString = localStorage.getItem('appState');
    if (stateString) {
        return JSON.parse(stateString);
    } else {
        return false
    }
}

// Приклад використання:
var appState = {
    username: 'John',
    preferences: {
        theme: 'dark',
        language: 'en'
    }
};

// Збереження стану додатка
saveState(appState);

// Отримання стану додатка
var retrievedState = getState();
console.log(retrievedState); // Виведе об'єкт appState збережений в localStorage

