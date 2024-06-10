// Статичні методи Object

// Object.preventExtensions — це метод у JavaScript, який забороняє додавання нових властивостей до об'єкта. Однак, цей метод не впливає на змінення або видалення вже існуючих властивостей. Використання Object.preventExtensions може бути корисним, коли ви хочете захистити об'єкт від будь-яких подальших змін структури, забезпечуючи його сталість у певний момент часу.

let obj = {
    name: "John",
    age: 30
};

// Забороняємо додавання нових властивостей до об'єкта
Object.preventExtensions(obj);

obj.name = "Jane"; // Змінити існуючу властивість можна
obj.age = 25; // Також можна змінити іншу існуючу властивість

obj.address = "123 Main St"; // Додавання нової властивості викличе помилку в строгому режимі або буде проігноровано в нестрогому режимі

console.log(obj); // { name: "Jane", age: 25 }


// Щоб перевірити, чи об'єкт перебуває в стані, коли йому заборонено додавання нових властивостей, можна використовувати метод Object.isExtensible:

console.log(Object.isExtensible(obj)); // false









// Object.preventExtensions та Object.seal обидва забороняють додавання нових властивостей до об'єкта, але між ними є суттєві відмінності.

// Object.preventExtensions(obj): Не забороняє видалення існуючих властивостей. Ви все ще можете видаляти властивості за допомогою оператора delete.
// Object.seal(obj): Додатково забороняє видалення існуючих властивостей. Всі існуючі властивості стають "запечатаними" (sealed).

// Змінення існуючих властивостей:

// Object.preventExtensions(obj): Дозволяє змінювати існуючі властивості, включаючи зміну значення та атрибутів властивості (наприклад, writable або configurable).
// Object.seal(obj): Дозволяє змінювати значення існуючих властивостей, але робить всі властивості об'єкта "неконфігурованими" (non-configurable). Це означає, що ви не можете змінювати атрибути властивостей (наприклад, ви не можете змінити їх з writable на non-writable).



let obj2 = { name: "John" };
Object.seal(obj2);

obj2.name = "Jane"; // Змінювати існуючі властивості можна
delete obj2.name;   // Видалення властивостей заборонено (ігнорується або викликає помилку в строгому режимі)

obj2.age = 30;      // Додавання нових властивостей заборонено (ігнорується або викликає помилку в строгому режимі)

console.log(obj2);  // { name: "Jane" }

console.log(Object.isExtensible(obj1)); // false
console.log(Object.isSealed(obj1));     // false

console.log(Object.isExtensible(obj2)); // false
console.log(Object.isSealed(obj2));     // true




// Object.freeze — це метод у JavaScript, який робить об'єкт повністю незмінним. Це означає, що після виклику цього методу на об'єкті ви не зможете:

// Додавати нові властивості.
// Видаляти існуючі властивості.
// Змінювати значення існуючих властивостей.
// Змінювати атрибути властивостей (наприклад, writable, configurable).


let obj = {
    name: "John",
    age: 30
};

// Заморожуємо об'єкт
Object.freeze(obj);

obj.name = "Jane"; // Змінювати значення властивостей не можна (ігнорується або викликає помилку в строгому режимі)
delete obj.age;    // Видаляти властивості не можна (ігнорується або викликає помилку в строгому режимі)
obj.address = "123 Main St"; // Додавати нові властивості не можна (ігнорується або викликає помилку в строгому режимі)

console.log(obj); // { name: "John", age: 30 }


// Для перевірки, чи об'єкт заморожений, можна використовувати метод Object.isFrozen:
console.log(Object.isFrozen(obj)); // true

// Object.freeze автоматично викликає Object.preventExtensions і Object.seal, але додатково робить всі властивості об'єкта незмінними (non-writable).

// Заморожування об'єкта є "глибоким" для властивостей першого рівня, але не для вкладених об'єктів. Це означає, що якщо об'єкт має властивості, значення яких є іншими об'єктами, то ці вкладені об'єкти залишаються змінними. Для глибокого заморожування потрібно рекурсивно заморожувати всі вкладені об'єкти.












// Дескриптори властивостей
// У JavaScript є можливість впливати на поведінку властивостей обʼєктів, для цього існутюь дескриптори властивостей. Дескриптор властивості (property descriptor) — це об'єкт, який визначає поведінку властивостей об'єкта при операціях читання, запису та видаленні. Цей обʼєкт містить в собі наступні властивості:

// value — значення властивості
// writable — бульове значення, яке вказує на те, чи можна змінювати значення властивості
// enumerable — бульове значення, яке вказує, чи можна перераховувати властивість
// configurable — бульове значення, яке вказує, чи можна змінювати конфігурацію властивості та видаляти її`




// Метод Object.getOwnPropertyDescriptor у JavaScript використовується для отримання дескриптора властивості конкретного об'єкта. Цей метод повертає об'єкт, який описує атрибути заданої властивості (наприклад, значення властивості, можливість її змінення тощо).

let person = {
    name: 'John',
    age: 30
};

let descriptor = Object.getOwnPropertyDescriptor(person, 'name');
console.log(descriptor);
/*
{
  value: 'John',
  writable: true,
  enumerable: true,
  configurable: true
}
*/

let ageDescriptor = Object.getOwnPropertyDescriptor(person, 'age');
console.log(ageDescriptor);
/*
{
  value: 30,
  writable: true,
  enumerable: true,
  configurable: true
}
*/


const descriptors = Object.getOwnPropertyDescriptors(person);
console.log(descriptors);
// {
//   name: {
//     value: 'John',
//     writable: true,
//     enumerable: true,
//     configurable: true
//   },
//   age: {
//     value: 42,
//     writable: true,
//     enumerable: true,
//     configurable: true
//   }
// }





// Метод Object.defineProperty() використовується для додавання або зміни властивості об'єкта з використанням явного визначення дескриптора властивості. 


const person2 = {};

Object.defineProperty(person2, 'name', {
    value: 'John',
    writable: false,
    enumerable: true,
    configurable: false,
});

console.log(person2.name); // John
person2.name = 'Joe'; // Помилка, оскільки writable встановлений у false

for (let key in person2) {
    console.log(key); // name
}

delete person2.name; // Помилка, оскільки configurable встановлений у false



// Object.defineProperties(person, {
//     name: {
//         value: 'John',
//         writable: false,
//         enumerable: true,
//         configurable: false,
//     },
//     age: {
//         value: 42,
//         writable: true,
//         enumerable: false,
//         configurable: true,
//     },
// });

// console.log(person.name); // John
// person.name = 'Joe'; // Помилка, оскільки writable встановлений у false

// for (let key in person) {
//     console.log(key); // name
// }

// delete person.name; // Помилка, оскільки configurable встановлений у false

// console.log(person.age); // 42
// person.age = 100; // Успішно, тому що writable встановлений у true








// writable
// Властивість writable в дескрипторі визначає, чи може бути змінено значення властивості. Якщо writable має значення true, властивість можна перезаписати, тобто значення можна змінити. Якщо writable має значення false, то властивість є незмінною, та її значення не можна змінити після ініціалізації.


// enumerable
// Властивість enumerable у дескрипторі властивості визначає, чи буде властивість переліченою при ітерації через об'єкт у циклі for...in або при виклику методу Object.keys(). Якщо enumerable має значення true, властивість буде перерахованою, інакше вона буде прихованою і не відображатиметься при ітерації.


// configurable
// Властивість configurable у дескрипторі властивості визначає, чи може бути змінений дескриптор цієї властивості пізніше за допомогою методу Object.defineProperty(). Якщо configurable має значення true, то властивість та його дескриптор можуть бути змінені або видалені після його визначення. Якщо configurable має значення false, то властивість та її дескриптор стають незмінними після визначення.


// Розглянути дефолтні дескриптори
const person3 = {
    age: 42,
    name: 'John',
};

Object.defineProperty(person3, 'age', {
    configurable: false,
});

delete person3.age; // Помилка, не можна видалити властивість

Object.defineProperty(person3, 'age', {
    value: 100,
}); // Помилка, не можна змінити











// Гетери й сетери для управління доступом до об’єкта

// class CatClass {
//     constructor(catColor, catSecondName) {
//         this.color = catColor;
//         this.secondName = catSecondName;
//         this.eyes = 2;
//     }

//     sayMeow() {
//         console.log(' Meow ');
//     }

//     get eyesGetSet() {
//         console.log('Getter started > ');
//         return this.eyes - 1;
//     }

//     set eyesGetSet(eyesNumber) {
//         console.log('Setter started > ');
//         this.eyes = eyesNumber * 3;
//         console.log('Setter finished > ');
//     }
// }

// const cat3 = new CatClass('red', 'red');

// console.log('cat3.eyes > ', cat3.eyes);

// cat3.eyes = 1000;
// console.log('cat3.eyes > ', cat3.eyes);

// const getterResult = cat3.eyesGetSet;

// console.log('getterResult > ', getterResult);

// cat3.eyesGetSet = 5;

// cat3.eyesGetSet = 7;
// cat3.eyesGetSet = 30;
// cat3.eyesGetSet = 30;
// cat3.eyesGetSet = 30;
// cat3.eyesGetSet = 30;
// cat3.eyesGetSet = 30;
// cat3.eyesGetSet = 30;

// const getterResult2 = cat3.eyesGetSet;
// console.log('getterResult2 > ', getterResult2);

// cat3.sayMeow();




class Person {
    #firstName;
    #lastName;

    //Геттер для отримання повного імені
    get fullName() {
        return `${this.#firstName} ${this.#lastName}`;
    }

    // Сеттер для встановлення повного імені
    set fullName(newFullName) {
        const parts = newFullName.split(' ');
        this.#firstName = parts[0];
        this.#lastName = parts[1];
    }
}

const person4 = new Person();

person4.fullName = 'Jane Smith';
console.log(person4.fullName); // "Jane Smith"









// Створення копій spread, assign та structuredClone

// Створення об'єкта, який потрібно скопіювати
const originalObject = { name: 'John', age: 42 };

// Створення копії об'єкта з використанням оператора spread
const copyObject = { ...originalObject };


// У оператора spread є деякі обмеження:

// Він створює лише поверхневі копії. Якщо об'єкт або масив містить вкладені об'єкти, вони залишаться посиланнями на оригінал.
// Працює тільки для об'єктів, що ітеруються, таких як масиви і об'єкти.




// Створення об'єкта, який потрібно скопіювати
const originalObject2 = { name: 'Alex', age: 30 };
const originalObject21 = { city: 'Odesa', isAdmin: true };

// Створення копії об'єкта за допомогою Object.assign()
const copyObject3 = Object.assign({}, originalObject2, originalObject21);





const originalObject5 = {
    name: 'John',
    age: 30,
    address: {
        street: '123 Main St',
        city: 'New York'
    }
};

// Клонуємо об'єкт з використанням structuredClone()
const clonedObject = structuredClone(originalObject5);

// Тепер clonedObject - це глибока копія originalObject5
console.log(clonedObject);




