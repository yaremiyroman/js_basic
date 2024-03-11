// element.addEventListener(event, handler, [options]);

// const rect = document.getElementById("rect");

// const onRectangleClick = () => {
//     alert("123");
// };

// rect.addEventListener("click", onRectangleClick);
// rect.removeEventListener("click", onRectangleClick);




// rect.addEventListener("dblclick", () => {
//     alert("dblclick");
// });

// -   mouseenter
// -   mouseleave
// -   mousemove

// rect.addEventListener("mouseenter", () => {
//     console.log("mouse enter");
// });

// rect.addEventListener("mouseleave", () => {
//     console.log("mouse LEAVE");
// });

// rect.addEventListener("mousemove", () => {
//     console.log('mousemove > ');
// });

// -   mousedown (event.button)
// -   mouseup

// rect.addEventListener("mousedown", event => {
//     console.log("mousedown", event.button);
// });






// -   scroll
// -   keydown (event.key)
// -   keyup
// -   load

// window.addEventListener("scroll", event => {
//     // console.log("scroll", event);
//     const offsetTop = window.pageYOffset;
//     console.log("offsetTop > ", offsetTop);
// });

// window.addEventListener("keydown", event => {
//     console.log("key > ", event.key);
//     console.log("code > ", event.code);
// });

// window.addEventListener("keydown", event => {
//     console.log("DOWN > ", event.code);
// });

// window.addEventListener("keyup", event => {
//     console.log("UP > ", event.code);
// });

// window.addEventListener("keypress", event => {
//     console.log("PRESS > ", event.code);
// });

// window.addEventListener("load", () => {
//     alert('LOAD DONE!');
// });







// const outer = document.getElementById("outer");
// const inner = document.getElementById("inner");

// outer.addEventListener("click", event => {
//     console.log("outer > ");
// });

// inner.addEventListener("click", event => {
//     console.log("inner > ");
// }, true);

// rect.addEventListener("click", event => {
//     // event.stopPropagation();
//     event.preventDefault();
//     console.log("rect > ");
// });






// -   add
// -   remove
// -   toggle
// -   contains

// rect.classList.add("class1");
// rect.classList.add("class2");
// rect.classList.add("class3");

// rect.classList.remove("class2");

// rect.classList.toggle("ImagineClass");
// rect.classList.toggle("ImagineClass");
// rect.classList.toggle("ImagineClass");

// const hasClass = rect.classList.contains("class3");
// console.log("hasClass > ", hasClass);

// rect.addEventListener("click", event => {
//     console.log("rect > ", event.target);
//     // event.target.classList.add('active');
//     event.target.classList.toggle('active');
// });









// # Зміна колірів

// -   створіть блок на сторінці, який змінює свій колір кожен раз, коли користувач
// наводить вказівник миші на нього
// -   cтворіть декілька кнопок, кожна з яких додає новий блок з певним коліром

//  Math.floor(Math.random() * 16777215).toString(16);

// rect.addEventListener("mouseenter", event => {
//     event.target.style.backgroundColor = '#' + Math.floor(Math.random() * 16777215).toString(16);
// });

// const btn1 = document.getElementById("btn1");

// const paint = (event, color) => {
//     const newRect = document.createElement('div');
//     newRect.classList.add('new-block');
//     newRect.style.backgroundColor = color;
//     rect.after(newRect);
// }

// btn1.addEventListener('click', (event) => paint(event, 'red'));
// btn2.addEventListener('click', (event) => paint(event, 'blue'));
// btn3.addEventListener('click', (event) => paint(event, 'violet'));






// # Створіть візуалізацю стека
// const table = document.getElementById("table");
// const addElement = document.getElementById("add-element");
// const removeElement = document.getElementById("remove-element");

// const handleElementAdding = () => {
//     const newElem = document.createElement("div");
//     newElem.classList.add("stack-element");
//     newElem.style.backgroundColor =
//         "#" + Math.floor(Math.random() * 16777215).toString(16);
//     document.body.prepend(newElem);
// };

// const handleElementRemoving = () => {
//     document.body.firstChild.remove();
// };

// addElement.addEventListener("click", handleElementAdding);
// removeElement.addEventListener("click", handleElementRemoving);









// # Згенеруйте сторінку блога з блог-превью


// const blogContent = [
//     {
//         title: 'Some title',
//         body: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Ut repellendus debitis fuga dolorum, quod praesentium, nesciunt magni explicabo beatae eveniet dolore vel. Sed ipsa repellat sit, facilis dicta quae itaque?',
//         image: 'https://www.wallpapermania.eu/images/lthumbs/2012-04/2466_Various-types-of-pebbles.jpg',
//         author: 'Peter'
//     },
//     {
//         title: 'Some title 2',
//         body: 'Ipsum dolor sit amet consectetur adipisicing elit. Ut repellendus debitis fuga dolorum, quod praesentium, nesciunt magni explicabo beatae eveniet dolore vel. Sed ipsa repellat sit, facilis dicta quae itaque?',
//         image: 'https://www.wallpapermania.eu/images/lthumbs/2012-04/2466_Various-types-of-pebbles.jpg',
//         author: 'John'
//     },
//     {
//         title: 'Some title 3',
//         body: 'Sit amet consectetur adipisicing elit. Ut repellendus debitis fuga dolorum, quod praesentium, nesciunt magni explicabo beatae eveniet dolore vel. Sed ipsa repellat sit, facilis dicta quae itaque?',
//         image: 'https://www.wallpapermania.eu/images/lthumbs/2012-04/2466_Various-types-of-pebbles.jpg',
//         author: 'Trump'
//     },
// ];

// const blogTitle = document.createElement('h1');
// blogTitle.innerHTML = blogContent[0].title;

// const blogImage = document.createElement('img');
// blogImage.src = blogContent[0].image;

// const blogBody = document.createElement('p');
// blogBody.innerHTML = blogContent[0].body;

// const blogAuthor = document.createElement('span');
// blogAuthor.innerHTML = blogContent[0].author;

// const blogWrapper = document.createElement('article');
// blogWrapper.append(blogTitle);
// blogWrapper.append(blogImage);
// blogWrapper.append(blogBody);
// blogWrapper.append(blogAuthor);
// blogWrapper.style.width = '75%';
// document.body.append(blogWrapper);


// document.body.style.display = 'flex';

// console.log(blogContent);

// const previewsWrapper = document.createElement('aside');


// blogContent.forEach(item => {
//     const itemWrapper = document.createElement('div');
//     const itemTitle = document.createElement('h2');
//     itemTitle.innerHTML = item.title;
//     const itemImg = document.createElement('img');
//     itemImg.src = item.image;
//     itemImg.style.width = '125px';
//     itemWrapper.append(itemImg);
//     itemWrapper.append(itemTitle);

//     previewsWrapper.append(itemWrapper);
// });
// previewsWrapper.style.width = '25%';
// document.body.append(previewsWrapper);






// const tasks = [];

// while (true) {
//     const task = prompt('Enter task:');

//     if (task === null) break;

//     tasks.push(task);
// }

// console.log('tasks > ', tasks);

