// "use strict" - це директива в JavaScript, яка дозволяє використовувати строгий режим. Строгий режим змінює деякі з основних аспектів мови, щоб зменшити кількість можливих помилок та зробити код безпечнішим і оптимізованим.

// // Не дозволяє використовувати необ'явлені змінні:
// "use strict";
// x = 3.14; // Викине помилку, оскільки змінна x не була оголошена


// // Забороняє дублювання імен параметрів функції
// "use strict";
// function sum(a, a, c) { // Викине помилку, оскільки параметр a повторюється
//     return a + a + c;
// }


// // Забороняє видаляти змінні, об'єкти та функції:
// "use strict";
// let x = 3.14;
// delete x; // Викине помилку, оскільки не можна видаляти змінні та функції

// // Забороняє привласнення значення властивостям тільки для читання
// "use strict";
// const obj = {};
// Object.defineProperty(obj, "x", { value: 42, writable: false });
// obj.x = 9; // Викине помилку, оскільки x є властивістю тільки для читання

// // Забороняє використання ключових слів eval та arguments як імена змінних
// "use strict";
// let eval = 10; // Викине помилку
// let arguments = 20; // Викине помилку









// Визначення класу

// A class is a type of object template.
// The class statement initiates a JavaScript class.
// Properties and methods are assigned in the constructor() method.
// The constructor() method is called each time a class object is initialized.
// Notes
// The syntax in a class must be written in "strict mode".


class MyClass {
    prop = value;
    constructor() { }
    method() { }
    get something() { }
    set something(value) { }
}


// const catParent = {
//     breed: 'sphinx51',
//     color: 'red',
//     name: 'erased',
//     sayMeow: function() {
//         alert('meow');
//     }
// };

// const catChild = {
// name: 'Tom',
//     __proto__: catParent,
// };

// console.log('catParent > ', catParent.name);
// console.log('catChild > ', catChild.breed);



class CatClass {
    constructor(color, breed) {
        this.breed = breed;
        this.color = color;
        this.name = null;
    }

    sayMeow() {
        console.log('Meow');
    }
}

const cat = new CatClass('black', 'sphinx');

// console.log('cat > ', cat);
// console.log('typeof CatClass > ', typeof CatClass);
// console.log('cat.color > ', cat.color);
// console.log('cat.secondName > ', cat.secondName);
// console.log('cat.eyes > ', cat.eyes);

// cat2.sayMeow();


class CatChildClass extends CatClass {
    constructor(color, breed, name) {
        super(color, breed);
        this.name = name;
    }
}

const catChild3 = new CatChildClass('123', '1231313', 'Tom');








// Class Declaration та Class Expression

// Function Declaration
// function name() {}

// Function Expression
// const name = function() {}


// Class Declaration
// class CatClass {
//     constructor(catColor, catSecondName) {
//         this.color = catColor;
//         this.secondName = catSecondName;
//         this.eyes = 2;
//     }

//     sayMeow() {
//         console.log(' Meow ');
//     }
// }


// // Class Expression
// const CatClass2 = class {
//     constructor(catColor, catSecondName) {
//         this.color = catColor;
//         this.secondName = catSecondName;
//         this.eyes = 2;
//     }

//     sayMeow() {
//         console.log(' Meow ');
//     }
// }



// let MyClass = null;

// if (weather === 'good') {
//     MyClass = class {
//         // DOG
//     }
// } else {
//     MyClass = class {
//         // CAT
//     }
// }






// Екземпляр класу. Метод сonstructor

// Екземпляр класу — це об'єкт, який створений на основі визначеного класу. Клас визначає структуру та поведінку об'єктів, а екземпляр класу є конкретним представником цього класу, який має доступ до властивостей та методів, визначених у класі. Іншими словами, екземпляр класу є конкретним втіленням класу, який може містити свої власні значення і мати доступ до методів, визначених у класі. Екземпляри створюються за допомогою оператора new.

// Метод constructor — це спеціальний метод, який використовується для ініціалізації об'єктів, створених за допомогою класу. Він виконується автоматично під час створення нового екземпляра класу за допомогою оператора new. Конструктор визначає початкові значення властивостей об'єкта. Саме тут відбувається ініціалізація нашого нового обʼєкту та привʼязка this, а також є доступ до аргументів, які будуть передані під час створення нового екземпляра класу.










// Оголошення властивостей, методів, обчислювальні значення





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










// Статичні властивості та методи


// Успадкування на класах, Доступ до успадкованих методів
// Оператор instanceof. Duck typing



































// Використайте ключове слово class та напишіть constructor, щоб створити клас Vegetable. 

// Клас Vegetable дозволяє створити об’єкт-овоч із властивістю name, що передається до constructor.

// const carrot = new Vegetable('carrot');
// console.log(carrot.name); // Повинно показувати 'carrot'


// class Vegetable {
//     constructor(name) {
//         this.name = name;
//     }
// }

// const potato = new Vegetable('potato');
// console.log('potato > ', potato);

// const carrot = new Vegetable('carrot');
// console.log('carrot > ', carrot);

// const onion = new Vegetable('onion');
// console.log('onion > ', onion);



//  Використайте ключове слово class, щоб створити клас Thermostat.
// constructor приймає температуру в градусах Фаренгейта.
// У класі створіть getter, щоб отримати температуру в градусах Цельсія,
//  та setter, що приймає температуру в градусах Цельсія.
// - C = 5/9 * (F - 32)
// - F = C * 9.0 / 5 + 32
// const thermos = new Thermostat(76); // Налаштування у шкалі Фаренгейта
// let temp = thermos.temperature; // 24.44 градусів за Цельсієм
// thermos.temperature = 26;
// temp = thermos.temperature; // 26 градусів за Цельсієм


// class Thermostat {
//     constructor(F) {
//         this.F = F;
//     }

//     static newProperty = 'I am new';

//     static PI = 3.141592653589793;

//     // coolMethod() {
//     //     console.log('this.newProperty > ', this.newProperty);
//     // }

//     get temp() {
//         return Math.floor((this.F - 32) * (5 / 9));
//     }

//     set temp(C) {
//         this.F = (C * 9/5) + 32;
//     }
// }

// const thermos = new Thermostat(90);

// console.log(thermos.F);

// const celsius = thermos.temp;
// console.log('celsius > ', celsius);

// thermos.temp = 100;
// console.log(thermos.F);

// 
// thermos.coolMethod();

// thermos.newProperty = 'XYXXX';

// thermos.coolMethod();

// console.log('thermos.newProperty > ', thermos.newProperty);
// console.log('thermos.PI > ', thermos.PI);

// console.log('Thermostat.newProperty > ', Thermostat.newProperty);
// console.log('Thermostat.PI > ', Thermostat.PI);







// Write a JavaScript program that creates a class called 'Shape' 
// with a method to calculate the area.
// Create two subclasses, 'Circle' and 'Triangle',
// that inherit from the 'Shape' class and override the area calculation method. Create an instance of the 'Circle' class and calculate its area. Similarly, do the same for the 'Triangle' class.



class Shape {
    area() { }
}


class Circle extends Shape {
    constructor(radius) {
        super();
        this.radius = radius;
    }

    area() {
        return Math.floor(Math.PI * Math.pow(this.radius, 2));
    }
}

class Triangle extends Shape {
    constructor(a, b) {
        super();
        this.a = a;
        this.b = b;
    }

    area() {
        return (this.a * this.b) / 2;
    }
}


const circle1 = new Circle(44);
const circle1Area = circle1.area();
console.log('circle1Area > ', circle1Area);


const triangle2 = new Triangle(34, 25);
const triangle2Area = triangle2.area();
console.log('triangle2Area > ', triangle2Area);
