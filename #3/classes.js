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



// Definition:
// MyClass constructors are part of the ES6 class syntax. They are special methods for creating and initializing an object created with a class

// Syntax:
// A class constructor is defined using the constructor keyword inside a class.
// The constructor method can take parameters and is used to set up the properties of the class.

// Using new Keyword:
// Similar to constructor functions, instances of a class are created using the new keyword.


// class Person {
//     constructor(name, age) {
//         this.name = name;
//         this.age = age;
//     }

//     greet() {
//         return `Hello, my name is ${this.name} and I am ${this.age} years old.`;
//     }
// }

// const person1 = new Person("Mohi", 25);
// console.log(person1.greet()); // "Hello, my name is Mohi and I am 25 years old."



// Key Differences:

// Pre-ES6 constructors are regular functions, while class constructors are specific methods within a class.
// Class constructors can access and utilize class features like inheritance through super keyword.
// Additional Points:

// Both types of constructors can receive arguments, which are used to initialize the object’s properties.
// Constructors can also be used with built-in objects like Array and Object.
// Examples:
// new Array(3) creates an array with 3 empty slots. [ <3 empty items> ]
// new Array('a', 'b', 'c') creates an array with elements 'a', 'b', and 'c'. ['a', 'b', 'c']
// Not all classes need an explicit constructor; a default constructor is provided if no custom one is defined.


// додамо довільну проперть
// class Tape {
//     constructor() {
//         this.cassette = "Nice Calm Music";
//     }
// }

// console.log(Tape.cassette); // undefined
// const tape = new Tape();
// console.log(tape.cassette); // "Nice Calm Music"


// Метод constructor не є обовʼязковим і у випадку його відсутності, він буде викликатися неявно для створення нового обʼєкту.

// class Tape {}

// const tape = new Tape(); // {}


// без конструктора можна ставити проперть

// class Tape {
//     setCassette() {
//         this.cassette = "Nice Calm Music";
//     }
// }

// const tape = new Tape();

// tape.setCassette();
// console.log(tape.cassette); // "Nice Calm Music"


















// Оголошення властивостей, методів, обчислювальні значення

// Віднедавна зʼявилася можливість оголошувати властивості поза межами конструктору. Це стає у нагоді, коли ми маємо якісь властивості із заздалегідь відомими значеннями, або коли вони ініціалізуються поза конструктором. 

class CarProps {
    model = 'New';

    setModel(model) {
        this.model = model;
    }
}

// Public Access Modifier: Public access is the default access modifier in JavaScript classes, which means that all properties and methods are accessible from outside the class, as well as from within the class. Public members can be accessed using the dot notation, like this:
class Car {
    constructor(make, model) {
        this.make = make;
        this.model = model;
    }
    start() {
        console.log("Starting the car...");
    }
}

let myCar = new Car("Toyota", "Corolla");
console.log(myCar.make); // "Toyota"
myCar.start(); // "Starting the car..."



// In July 2021, the last of the major browsers shipped private class members, bringing platform-protected private capabilities to the language. Private members are designated by prefixing them with # (pound) and can only be statically invoked directly against the host class. Here’s a version of the Person class that uses a couple of private fields:
// Private Access Modifier: Private access allows class members to be accessed only from within the class itself. This can be useful for hiding implementation details or sensitive information, and preventing unintended modification or access by external code. In JavaScript, private members are indicated by using a # prefix before the member name, like this:

class BankAccount {
    #balance = 0;
    #accountNumber;

    constructor(accountNumber) {
        this.#accountNumber = accountNumber;
    }

    deposit(amount) {
        this.#balance += amount;
    }

    withdraw(amount) {
        if (this.#balance >= amount) {
            this.#balance -= amount;
        } else {
            console.log("Insufficient balance!");
        }
    }

    getAccountNumber() {
        return this.#accountNumber;
    }
}

let myAccount = new BankAccount("123456");
console.log(myAccount.getAccountNumber()); // "123456"
myAccount.deposit(1000);
myAccount.withdraw(500);
// console.log(myAccount.#balance); // Error: SyntaxError: Private field '#balance' must be declared in an enclosing class





// Protected Access Modifier: Protected access allows class members to be accessed from within the class itself, as well as from within any subclass that inherits from the class. This can be useful for sharing common functionality or state between related classes, while still maintaining encapsulation and preventing external modification. In JavaScript, protected members are indicated by using a _ prefix before the member name, like this

class Vehicle {
    _speed = 0;
    accelerate(amount) {
        this._speed += amount;
    }
    brake(amount) {
        this._speed -= amount;
        if (this._speed < 0) {
            this._speed = 0;
        }
    }
    get speed() {
        return this._speed;
    }
}

class Car2 extends Vehicle {
    #make;
    constructor(make) {
        super();
        this.#make = make;
    }
    get make() {
        return this.#make;
    }
    honk() {
        console.log("Beep beep!");
    }
}

let myCar2 = new Car2("Toyota");
console.log(myCar2.make); // "Toyota"
myCar2.accelerate(50);
console.log(myCar2.speed); // 50
myCar2.brake(20);
console.log(myCar2.speed); // 30
myCar2.honk();  // "Beep beep!"
console.log(myCar2._speed); // 30 (protected member)

// Обчислювані значення
const methodModel = 'sayModel';

class Car {
    constructor(model) {
        this.model = model;
    }

    [methodModel]() {
        console.log(this.model);
    }
}

const car = new Car('John');
console.log(car[methodModel]());













// Статичні властивості та методи
// Статичні властивості — це члени класу, які не прив'язані до екземплярів класу, а належать самому класу. Вони доступні лише на рівні класу, та не доступні його екземплярам і це означає, що їх можна використовувати без створення екземпляра. Для оголошення статичних членів класу використовується ключове слово static.
// Статичні методи так само не прив'язані до екземплярів класу, а належать самому класу. Навідміну від звичайних методів вони не потрапляють до прототипу. Статичні методи часто використовуються для створення допоміжних функцій програми.

class Person {
    age = 0; // public field syntax
    #firstName; // private field
    #lastName; // private field
    static typeName = "Person"; // public static field syntax
    static DEFAULT_AGE = 42; // public static field syntax
    // static #INFO = 42; // private static field syntax
    // _speed = 0; // protected field syntax
    // accessor age = 0; // public getter/setter with auto backing private field

    constructor(firstName, lastName, age = Person.DEFAULT_AGE) {
        this.firstName = firstName; // public field
        this.lastName = lastName; // public field
        this.#firstName = firstName; // private field
        this.#lastName = lastName; // private field
        this.age = age; // private field
    }

    // public getter
    get fullName() { return `${this.firstName} ${this.lastName}`; }

    get firstName() { return this.#firstName; }

    get lastName() { return this.#lastName; }

    get fullName() { return `${this.firstName}${this.lastName}`; }

    // public setter
    set fullName(value) {
        const parts = value.split(" ");
        this.firstName = parts[0];
        this.lastName = parts[1];
    }

    // public static getter
    static get typeName() {
        return "Person";
    }

    // public static setter
    static set typeName(name) {
        this.typeName = name;
    }

    // public method
    introduceYourselfTo(other) {
        const name = other.firstName ?? other;
        console.log(`Hello ${name}! My name is ${this.fullName}.`);
    }

    // public static method
    static fromJSON(json) {
        return new Person(json.firstName, json.lastName);
    }

    // private method
    #calcStatus(json) {
        return new Person(json.firstName, json.lastName);
    }

    // private static method
    static #calcStatus(json) {
        return new Person(json.firstName, json.lastName);
    }
}

const john = new Person("John", "Doe");
const jane = Person.fromJSON({ firstName: "Jane", lastName: "Doe" });
john.introduceYourselfTo(jane);
john.age;
john.age = 21;






















// Успадкування на класах, Доступ до успадкованих методів
// Успадкування — це механізм, який надає можливість створення нового класу на основі існуючого класу, при цьому новий клас отримує властивості та методи від батьківського класу. Властивість або метод, успадкований від батьківського класу, можна використовувати в новому класі, а також розширювати або змінювати за потребою. Успадкування в класах є однією з ключових концепцій об'єктно-орієнтованого програмування.

// В успадкуванні є дві важливі складові:

// Суперкласс (базовий / батьківський) — це клас, який визначає загальну структуру та функціональність, яку успадкують інші класи. Він є базовим класом для створення ієрархії класів.
// Субклас (нащадковий / дочірній) — це клас, який успадковує властивості та методи з базового класу та може додавати до них свої власні властивості та методи, або змінювати успадковані.














// Оператор instanceof. Duck typing























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




