// Вбудовані класи

// 'sdf23'.toUpperCase();






// # Успадкування з прототипів

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

// catParent.breed = ' new    ';
// console.log('catParent > ', catParent.name);
// console.log('catChild > ', catChild.breed);









// # Ланцюжок прототипів

// const cat = {
//     legs: 5,
//     sayMeow: function() {
//         alert('meow');
//     }
// };

// const catParent = {
//     breed: 'sphinx',
//     color: 'red',
//     name: 'Father',
//     __proto__: cat,
// };

// const catChild = {
//     name: 'Child-cat',
//     __proto__: catParent,
// };







// Механізм [[Get]]
// Механізм [[Set]]
// Shadowing





// hasOwnProperty
// Метод hasOwnProperty — це вбудований метод об'єктів, який дозволяє перевірити, чи містить об'єкт власну (не успадковану) властивість із заданим ім'ям.
for (const key in cat) {
    if (person.hasOwnProperty(key)) {
        console.log('this is a property of the cat - ', `${key} : `, cat[key]);
    } else {
        console.log('this is the prototype property - ', `${key} :`, cat[key]);
    }
}



// hasOwn
console.log(Object.hasOwn(cat, 'name'));






// Object.getOwnPropertyNames
// Метод Object.getOwnPropertyNames() — повертає масив з іменами всіх власних (не успадкованих) перерахованих властивостей об'єкта. 
console.log(Object.getOwnPropertyNames(cat));




// Object.getOwnPropertySymbols
// який дозволяє отримати масив всіх власних символьних (не успадкованих) властивостей об'єкта.

const symbolA = Symbol('Prototype symbol');
const symbolB = Symbol('Own symbol');

const user = {
    [symbolA]: 'Prototype symbol',
    login() {
        return true;
    }
}

const person = {
    [symbolB]: 'Own symbol',
    name: 'John',
    age: 42,
    __proto__: user
};

console.log(Object.getOwnPropertyNames(user)); // ['login']
console.log(Object.getOwnPropertyNames(person)); // ['name', 'age']

console.log(Object.getOwnPropertySymbols(user)); // [Symbol(Prototype symbol)]
console.log(Object.getOwnPropertySymbols(person)); // [Symbol(Own symbol)]






// Object.getPrototypeOf
// повертає прототип (тобто внутрішню властивість [[Prototype]]) зазначеного об'єкта
console.log(Object.getPrototypeOf(cat)); // catFather


// isPrototypeOf
console.log(catFather.isPrototypeOf(cat)); // true


// Object.setPrototypeOf
Object.setPrototypeOf(cat, catFather);





// Object.create(prototype, propertiesObject)


const catParent = {
    breed: 'sphinx',
    color: 'red',
    name: 'Father',
    __proto__: cat,
};

const cat123 = Object.create(
    catParent,
    {
        name: 'Tom',
    }
);












// # Використання конструктора для створення об’єктів

const cat2434 = {
    breed: 'sphinx',
    color: 'red',
    name: 'Father',
};

console.log(getCat());


function getCat() {
    const cat = {};

    cat.breed = 'sphinx';
    cat.color = 'red';
    cat.name = 'Father';

    return cat;
}



function GetCat() {
    const $this = {};
    // this[[Prototype]] = GetCat.prototype

    $this.breed = 'sphinx';
    $this.color = 'red';
    $this.name = 'Father';

    return $this;
}

// При виклику функції з new, відбуваються такі неочевидні дії, як:

// Створюється новий майже порожній об’єкт, який присвоюється в this
// [[Prototype]] цього обʼєкту отримує посилання на User.prototype
// Виконується тіло функції, яке зазвичай модифікує this та додає до нього нові властивості
// Повертає this як результат виконання

function GetCat() {
    this.breed = 'sphinx';
    this.color = 'red';
    this.name = 'Father';
}

// const cat = new GetCat();
// const cat2434 = new GetCat();
// const cat3 = new GetCat();

// console.log('cat > ', cat);
// console.log('cat2434 > ', cat2434);
// console.log('cat3 > ', cat3);








// Розширення прототипу через new Function

function User(name) {
    this.name = name;

    this.sayHi = function () {
        return `My name: ${this.name}`
    };
}

const john = new User('John');
john.sayHi(); // My name: John





function User2(name) {
    this.name = name;
}

User2.prototype.sayHi = function () {
    return `My name: ${this.name}`
};

const john2 = new User2('John');
john2.sayHi(); // My name: John




// Також можливо розширення вбудованих прототипів. Наприклад, якщо додати спосіб до String.prototype, він стає доступним для всіх рядків.


String.prototype.show = function () {
    console.log(this);
};

const str = "Hello";

str.show(); // Hello!




