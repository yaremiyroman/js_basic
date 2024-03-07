// window

// У JavaScript глобальний об'єкт називається window, коли код виконується в браузері.
// Глобальний об'єкт представляє собою вікно браузера і надає доступ до різних властивостей та методів,
//  таких як document, console, setTimeout та інші.

// Наприклад, ви можете використовувати window для доступу до глобальних змінних:

var globalVariable = "Це глобальна змінна";

// // Можна звертатися до глобальної змінної через об'єкт window
console.log(window.globalVariable); // Виведе "Це глобальна змінна"

// Також window надає доступ до інших функцій та об'єктів, наприклад, до setTimeout:
// Глобальна функція setTimeout
window.setTimeout(function () {
    console.log("Пройшло 1 секунда");
}, 1000);

// Однак варто відзначити, що використання window є необов'язковим, 
// і ви можете звертатися до глобальних об'єктів та функцій безпосередньо. 
// У більшості випадків window використовується, коли код виконується в браузерному середовищі.
//  Якщо ви, наприклад, використовуєте JavaScript в іншому середовищі, 
//  такому як Node.js, то глобальним об'єктом буде global.








// document
// У JavaScript, коли код виконується в браузері,
//  глобальний об'єкт document представляє собою HTML-документ та надає доступ до DOM 
//  (Document Object Model) - структури та інформації, яка представляє веб-сторінку. 
//  За допомогою об'єкта document можна взаємодіяти з вмістом сторінки,
//   змінювати його та отримувати інформацію.






// # Вибірка з DOM
// getElementById

const myElement = document.getElementById('goalID');
myElement.style.backgroundColor = 'red';
console.log('myElement > ', myElement);



//getElementsByClassName
// Метод getElementsByClassName є іншим методом об'єкта document в JavaScript,
// і він використовується для отримання колекції елементів за їхніми класами.

const myYellowElements = document.getElementsByClassName('yellow');
console.log('myYellowElements > ', myYellowElements);

// for of
// for...of: Використовується для ітерації по значеннях перебираємих об'єктів, 
// таких як масиви, рядки, Map, Set і т. д.
// for...of: Забезпечує ітерацію в порядку значень в колекції.
// for...of: Зручно використовувати, коли потрібно працювати з конкретним значенням в колекції.
for (let element of myYellowElements) {
    element.style.backgroundColor = 'green';
}



// getElementsByTagName

const allDivs = document.getElementsByTagName('div');
console.log('allDivs > ', allDivs);
for (let element of allDivs) {
    element.style.backgroundColor = 'purple';
}



// querySelector
// querySelectorAll
const allDivs2 = document.querySelectorAll('div.yellow');
console.log('allDivs2 > ', allDivs2);

const divYellow = document.querySelector('div.yellow');
console.log('divYellow > ', divYellow);

const div44 = document.querySelector('#div44');
console.log('div44 > ', div44);

const div44All = document.querySelectorAll('#div44');
console.log('div44All > ', div44All);









// # Навігація по DOM

//children
const div3 = document.getElementById('div3');
console.log('div3 > ', div3);

div3.style.backgroundColor = 'red';

const div3Children = div3.children;
console.log('div3Children > ', div3Children);



const div3FirstChild = div3.firstElementChild;
console.log('div3FirstChild > ', div3FirstChild);



const div3LastChild = div3.lastElementChild;
console.log('div3LastChild > ', div3LastChild);



const div3Next = div3.nextElementSibling;
console.log('div3Next > ', div3Next);



const div3Prev = div3.previousElementSibling;
console.log('div3Prev > ', div3Prev);



const div3Parent = div3.parentElement;
console.log('div3Parent > ', div3Parent);

// В JavaScript метод closest
//  використовується для пошуку найближчого батьківського елемента, який відповідає заданому селектору. 
var closestParent = document.getElementById('child').closest('#parent');





// # Операції з DOM контентом

// Властивість innerHTML у JavaScript надає зручний спосіб отримання 
// або встановлення HTML-вмісту елемента DOM. Ця властивість містить рядок,
//  який представляє HTML-вміст всередині елемента, включаючи всі його дочірні елементи.
const newDiv = document.getElementById('goalID');
console.log('newDiv > ', newDiv);
console.log('newDiv.innerHTML > ', newDiv.innerHTML);

newDiv.innerHTML = 'New cool DIV content';
console.log('newDiv.innerHTML > ', newDiv.innerHTML);



// В JavaScript властивість textContent є одним із способів отримання
//  або встановлення текстового вмісту елементу DOM. 
var textContentValue = myElement.textContent;
// console.log('newDiv.textContent > ', newDiv.textContent);





const newDiv = document.createElement('div');
const outer = document.getElementById('outer');
const inner = document.getElementById('inner');

newDiv.innerHTML = 'Some new content';
console.log('newDiv > ', newDiv);

document.body.prepend(newDiv);
outer.prepend(newDiv);
inner.append(newDiv);

inner.before(newDiv);
inner.after(newDiv);

// remove
const inner2 = document.getElementById('inner');
inner2.remove();




// Метод contains у DOM (Document Object Model) в JavaScript 
// використовується для перевірки того, чи є певний елемент дочірнім 
// елементом іншого елемента. Він повертає true, якщо елемент є дочірнім,
//  і false, якщо він не є.



// Припустимо, що у вас є два елементи з ідентифікаторами 'parent' та 'child'
var parentElement = document.getElementById('parent');
var childElement = document.getElementById('child');

// Перевірка, чи елемент 'child' є дочірнім для елемента 'parent'
var isChild = parentElement.contains(childElement);

// Виведення результату
console.log(isChild); // Виведе true або false в залежності від того, чи 'child' є дочірнім 'parent'











// # Створення елемента
// - Використовуючи JavaScript, створіть новий HTML-елемент (наприклад, <p>).
// - Встановіть текстовий вміст на "Новий елемент створений!".
// - Додайте створений елемент до кінця <body>.

{
    /* <div></div> */
}
{
    /* <p></p> */
}

// const paragraph = document.createElement('p');
// paragraph.innerHTML = 'Новий елемент створений!';
// document.body.append(paragraph);
// console.log(paragraph);







// # Додавання атрибутів
// - Створіть новий HTML-елемент (наприклад, <a>).
// - Встановіть текстовий вміст на "Нове посилання".
// - Встановіть атрибут id цього елемента на myNewLink.
// - Встановіть атрибут href цього елемента на https://www.example.com/.
// - Додайте створений елемент до кінця <body>.

{
    /* <a href="www.google.com" id="linkID" class="link-class">Link Content Title</a> */
}

// const newLink = document.createElement('a');
// newLink.innerHTML = 'Нове посилання';
// newLink.id = 'myNewLink';
// newLink.href = 'https://www.example.com/';
// document.body.append(newLink);
// // console.log(newLink);









// # Додавання елемента
// - Створити порожній <div> з унікальним id.
// На сторінку !
// - Використовуючи JavaScript, знайдіть цей елемент за його id і додайте до нього новий елемент (наприклад, <p>Новий елемент доданий!</p>).

// const emptyDiv = document.createElement('div');
// // emptyDiv.innerHTML = 'Unique DIV';
// emptyDiv.id = 'uniqueID';
// document.body.append(emptyDiv);

// const paragraph = document.createElement('p');
// paragraph.innerHTML = 'Новий елемент доданий!';
// emptyDiv.append(paragraph);

// console.log(emptyDiv);







// # Зміна стилів
// - Створіть HTML-елемент (наприклад <div>) з унікальним id.
// - Використовуючи JavaScript, знайдіть цей елемент за його id та змініть його стилі, наприклад, встановіть колір фону на зелений (background-color: green) та шрифту на червоний (color: red).

// const newDiv = document.createElement('div');
// newDiv.id = 'uniqueId';
// newDiv.innerHTML = 'Some Content';
// document.body.append(newDiv);

// const uniqueId = document.getElementById('uniqueId');
// uniqueId.style.color = 'green';
// uniqueId.style.backgroundColor = 'red';

// console.log(uniqueId);
// newDiv.append(paragraph);









// # Згенеруйте сторінку блога з блог-превью

const blogContent = [
    {
        title: 'Some title',
        body: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Ut repellendus debitis fuga dolorum, quod praesentium, nesciunt magni explicabo beatae eveniet dolore vel. Sed ipsa repellat sit, facilis dicta quae itaque?',
        image: 'https://www.wallpapermania.eu/images/lthumbs/2012-04/2466_Various-types-of-pebbles.jpg',
        author: 'Peter'
    },
    {
        title: 'Some title 2',
        body: 'Ipsum dolor sit amet consectetur adipisicing elit. Ut repellendus debitis fuga dolorum, quod praesentium, nesciunt magni explicabo beatae eveniet dolore vel. Sed ipsa repellat sit, facilis dicta quae itaque?',
        image: 'https://www.wallpapermania.eu/images/lthumbs/2012-04/2466_Various-types-of-pebbles.jpg',
        author: 'John'
    },
    {
        title: 'Some title 3',
        body: 'Sit amet consectetur adipisicing elit. Ut repellendus debitis fuga dolorum, quod praesentium, nesciunt magni explicabo beatae eveniet dolore vel. Sed ipsa repellat sit, facilis dicta quae itaque?',
        image: 'https://www.wallpapermania.eu/images/lthumbs/2012-04/2466_Various-types-of-pebbles.jpg',
        author: 'Trump'
    },
];

const blogTitle = document.createElement('h1');
blogTitle.innerHTML = blogContent[0].title;

const blogImage = document.createElement('img');
blogImage.src = blogContent[0].image;

const blogBody = document.createElement('p');
blogBody.innerHTML = blogContent[0].body;

const blogAuthor = document.createElement('span');
blogAuthor.innerHTML = blogContent[0].author;

const blogWrapper = document.createElement('article');
blogWrapper.append(blogTitle);
blogWrapper.append(blogImage);
blogWrapper.append(blogBody);
blogWrapper.append(blogAuthor);
blogWrapper.style.width = '75%';
document.body.append(blogWrapper);

document.body.style.display = 'flex';

console.log(blogContent);

const previewsWrapper = document.createElement('aside');

blogContent.forEach(item => {
    const itemWrapper = document.createElement('div');
    const itemTitle = document.createElement('h2');
    itemTitle.innerHTML = item.title;
    const itemImg = document.createElement('img');
    itemImg.src = item.image;
    itemImg.style.width = '125px';
    itemWrapper.append(itemImg);
    itemWrapper.append(itemTitle);

    previewsWrapper.append(itemWrapper);
});
previewsWrapper.style.width = '25%';
document.body.append(previewsWrapper);











const tasks = [];

while (true) {
    const task = prompt('Enter task:');

    if (task === null) break;

    tasks.push(task);
}

console.log('tasks > ', tasks);
