// Успадкування з прототипів

// Успадкування з прототипів є однією з основних концепцій об'єктно-орієнтованого програмування в JavaScript.
//  У JavaScript успадкування реалізується через механізм прототипів. Давайте розглянемо декілька ключових понять.
// Тобто ми хочемо повторно використовувати те, що ми маємо в user,
// але також додати ще власні методи і властивості.
// Інакше кажучи, просто хочемо збудувати новий об’єкт поверх того, що існує.

// const catParent = {
//     breed: "sphinx",
//     color: "red",
//     sayMeow: function() {
//       alert('sayMeow!');
//     }
// };

// const catChild = {
//     name: "Tom",
//     __proto__: catParent,
// };

// console.log("catChild > ", catChild);
// console.log("catChild.name > ", catChild.name);
// console.log("catChild.name > ", catChild.secondName);
// console.log("catChild.name > ", catChild.color);




// успадкування та Ланцюжок прототипів
// JavaScript використовує механізм успадкування через прототипи.
// Кожен об'єкт може мати прототип, і якщо властивість або метод не знаходиться у самому об'єкті,
//  JavaScript буде шукати його в його прототипі, і так далі, уздовж ланцюжка прототипів.

// const cat1 = {
//     legs: 4,
//     sayMeow: function() {
//         alert('sayMeow');
//     }
// };

// const catParent2 = {
//     secondName: 'sphinx',
//     color: 'red',
//     __proto__: cat1
// };

// const catChild3 = {
//     name: 'Tom',
//     __proto__: catParent2
// };

// console.log('catChild3 > ', catChild3);





// Використання Object.setPrototypeOf():

// var obj = {};
// var newProto = { newProperty: 'Hello!' };

// obj.__proto__ = newProto;

// console.log(obj.newProperty); // Виведе 'Hello!'



// var obj = {};
// var newProto = { newProperty: 'Hello!' };

// Object.setPrototypeOf(obj, newProto);

// console.log(obj.newProperty); // Виведе 'Hello!'




//-------------------------------------------------------


// const cat = {
//     legs: 4,
//     sayMeow: function () {
//         alert("sayMeow");
//     },
//     name: "Parent Name",
// };

// const catParent = {
//     secondName: 'sphinx',
//     color: 'red',

//     sayMeow: function() {
//         alert(`  My name is: ${this.name}   `)
//     },
//     __proto__: cat

// };

// const catChild1 = {
//     id: 1000,
//     __proto__: catParent
// };

// const catChild2 = {
//     id: 1001,
//     __proto__: catParent
// };

// const catChild3 = {
//     id: 1002,
//     __proto__: catParent
// };

// const catChild4 = {
//     id: 1006,
//     __proto__: catParent
// };




// console.log(catChild1.id);
// console.log(catChild3.id);
// console.log(catChild1.color);
// console.log(catChild2.color);
// console.log(catChild3.color);





// # Використання конструктора для створення об’єктів

// function Cat() {

//     const tempObj = {};

//     tempObj.color = 'red';
//     tempObj.secondName = 'sphinx';
//     tempObj.sayMeow = function() {
//         alert(`  Meow   `);
//     };

//     return tempObj;

// }

// function Cat() {
//     // const this = {};

//     this.color = 'red';
//     this.secondName = 'sphinx';
//     this.sayMeow = function() {
//         alert(`  Meow   `);
//     };

//     // return this;
// }

// function Cat() {
//     this.color = 'red';
//     this.secondName = 'sphinx';
//     this.sayMeow = function() {
//         alert(`  Meow   `);
//     };
// }

// const firstCat = new Cat();
// const firstCat2 = new Cat();
// const firstCat3 = new Cat();
// const firstCat4 = new Cat();
// const firstCat5 = new Cat();
// const firstCat6 = new Cat();
// const firstCat7 = new Cat();
// const firstCat8 = new Cat();
// const firstCat10 = new Cat();

// const firstCat9 = new Cat();
// firstCat9.hadDinner = true;

// console.log('firstCat8 > ', firstCat8);
// console.log('firstCat9 > ', firstCat9);







// Розширення конструкторів для отримання аргументів
// function Cat(catColor, catSecondName) {
//     this.color = catColor;
//     this.secondName = catSecondName;
//     this.sayMeow = function () {
//         alert(`  Meow   `);
//     };
// }

// const firstCat9 = new Cat('black', 'best');
// const firstCat7 = new Cat('red', 'super');
// const firstCat777 = new Cat('orange', 'good');

// const newDate = new Date();




// Перевірка конструктора об’єкта за допомогою instanceof

// console.log(  firstCat7 instanceof    Cat   );
// console.log(  newDate instanceof    Cat   );
// console.log(  newDate instanceof    Date   );

// function Cat(catColor, catSecondName) {
//     this.color = catColor;
//     this.secondName = catSecondName;
//     this.sayMeow = function () {
//         alert(`  Meow   `);
//     };
// }

// const firstCat777 = new Cat('orange', 'good');






// Власні властивості
// const hasSecondName = firstCat777.hasOwnProperty('secondName');
// const hasAnotherProp = firstCat777.hasOwnProperty('anotherProp');

// console.log('hasSecondName > ', hasSecondName);
// console.log('hasAnotherProp > ', hasAnotherProp);




// // Властивості прототипу
// function Cat(catColor, catSecondName) {
//     this.color = catColor;
//     this.secondName = catSecondName;
//     // this.eyes = 2;
// }

// const firstCat777 = new Cat('orange', 'good');
// const firstCat6 = new Cat('black', 'fine');
// const firstCat3 = new Cat('red', 'best');



// Cat.prototype.sayMeow = function() {
//     alert(' Meow ');
// };

// firstCat777.sayMeow();

// console.log('firstCat777 > ', firstCat777);
// console.log('firstCat6 > ', firstCat6);
// console.log('firstCat3 > ', firstCat3);

// Cat.prototype.ears = 2;

// firstCat777.ears = 5;

// console.log('firstCat3.ears > ', firstCat777.ears);
// console.log('firstCat3.ears > ', firstCat3.ears);
// console.log('firstCat3.ears > ', firstCat6.ears);

// console.log('firstCat777 > ', firstCat777);




// Ітерація через усі властивості for..in

// const cat = {
//     legs: 4,
//     sayMeow: function () {
//         alert("sayMeow");
//     },
//     name: "Parent Name",
// };

// const catChild = {
//     secondName: 'sphinx',
//     color: 'red',

//     sayMeow: function() {
//         alert(`  My name is: ${this.name}   `)
//     },
//     __proto__: cat

// };


// for (let key in catChild) {
//     if (catChild.hasOwnProperty(key)) {
//       console.log(key + ': ' + catChild[key]);
//     }
//   }






// Написати функцію ConstructCity, що буде приймати в себе властивості міста (властивості на ваш розсуд) та створювати екземпляри ConstructCity. Функція має бути функцією-конструктором.



// 1 option
// function MakeBuilding(name, floors, apartments, street) {
//     this.floorsCount = floors;
//     this.apartmentsCount = apartments;
//     this.street = street;
//     this.name = name;
// }

// const firstBuilding = new MakeBuilding('JK Gefest', 22, 300, "Soborna");
// const firstBuilding2 = new MakeBuilding('JK Gefest', 22, 300, "Soborna");
// const firstBuilding3 = new MakeBuilding('JK Gefest', 22, 300, "Soborna");

// console.log('firstBuilding > ', firstBuilding);











// В ES6 введено локальні блокові області видимості для змінних, оголошених за допомогою let та const.
// Default параметри для функцій. ES6 дозволяє встановлювати значення за замовчуванням для параметрів функцій.
// Шаблонні рядки. ES6 дозволяє використовувати шаблонні рядки для вбудовування виразів в рядки
// Деструктуризація
// [1,2,3].concat([2,3]); (5) [1, 2, 3, 2, 3] [...[1,2,3], ...[2,3]]
// () => {}
// В ES6 введено ключові слова class для визначення класів та extends для наслідування класів.



// use strict