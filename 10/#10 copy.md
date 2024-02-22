Порівняння об'єктів в JavaScript може бути не таким простим, як порівняння примітивних типів даних (наприклад, чисел чи рядків). 






В JavaScript для копіювання та злиття об'єктів можна використовувати різні підходи. Зазначу, що копіювання об'єктів у JavaScript може бути глибоким або поверхневим, залежно від того, чи копіюються тільки посилання на об'єкти чи їхні значення.



Поверхневе копіювання:



Використання Spread оператора (ES6+):

const originalObject = { key: 'value', nested: { nestedKey: 'nestedValue' } };
const shallowCopy = { ...originalObject };

Цей метод створить новий об'єкт, копіюючи властивості першого об'єкта. Проте, якщо об'єкт має вкладені об'єкти, вони будуть посилатися на ті ж самі об'єкти в пам'яті.


const obj1 = { a: 1, b: 2 };
const obj2 = { b: 3, c: 4 };

const mergedObject = { ...obj1, ...obj2 };






Використання Object.assign() (ES5+):

const originalObject = { key: 'value', nested: { nestedKey: 'nestedValue' } };
const shallowCopy = Object.assign({}, originalObject);


Цей метод також створює поверхневу копію об'єкта. Вкладені об'єкти будуть посилатися на ті ж самі об'єкти в пам'яті.


const obj1 = { a: 1, b: 2 };
const obj2 = { b: 3, c: 4 };

const mergedObject = Object.assign({}, obj1, obj2);








Глибоке копіювання:
Для глибокого копіювання можна скористатися бібліотеками, такими як Lodash або використовувати рекурсивний підхід для копіювання вкладених об'єктів. Однак важливо враховувати можливість виникнення циклічних посилань в об'єктах, що може призвести до безкінечної рекурсії.









JavaScript мова має велику кількість вбудованих методів для роботи з об'єктами. Документація. Ось кілька основних методів, які можна використовувати для операцій з об'єктами:





Object.keys(obj) / Object.values(obj) / Object.entries(obj):

Object.keys() повертає масив зі всіма властивостями об'єкта.
Object.values() повертає масив зі всіма значеннями властивостей об'єкта.
Object.entries() повертає масив масивів, де кожен підмасив містить пару ключ-значення об'єкта.

const myObject = { a: 1, b: 2, c: 3 };

console.log(Object.keys(myObject));    // ['a', 'b', 'c']
console.log(Object.values(myObject));  // [1, 2, 3]
console.log(Object.entries(myObject)); // [['a', 1], ['b', 2], ['c', 3]]





Object.assign() копіює властивості з одного або більше об'єктів в цільовий об'єкт.

const obj1 = { a: 1, b: 2 };
const obj2 = { b: 3, c: 4 };

const mergedObject = Object.assign({}, obj1, obj2);
// mergedObject = { a: 1, b: 3, c: 4 }





hasOwnProperty() перевіряє, чи має об'єкт вказану властивість. Відзначте, що цей метод не перевіряє властивості у ланцюгах прототипів.

const myObject = { a: 1, b: 2 };

console.log(myObject.hasOwnProperty('a')); // true
console.log(myObject.hasOwnProperty('c')); // false







Object.keys(obj).length:Використовується для отримання кількості властивостей в об'єкті.

const myObject = { a: 1, b: 2, c: 3 };

console.log(Object.keys(myObject).length); // 3














Ключове слово this в JavaScript вказує на поточний об'єкт, коли воно використовується всередині методу об'єкта. Залежно від контексту виклику, значення this може відрізнятися. Ось кілька основних сценаріїв використання this в об'єктах:

Коли this використовується всередині методу об'єкта, воно вказує на сам об'єкт, в якому цей метод викликано.


const myObject = {
  property: "Hello",
  myMethod: function() {
    console.log(this.property);
  }
};

myObject.myMethod(); // "Hello"





# Створіть об’єкт ladder, що дозволяє підійматися вгору-вниз

// // Створіть об’єкт ladder, що дозволяє підійматися вгору-вниз

// const ladder = {
//     step: 0,
//     goUpstairs: function() {
//         this.step++;
//     },
//     goDownstairs: function() {
//         this.step--;
//     },
//     showCurrentStep: function() {
//         console.log('step >', this.step);
//     }
// };

// ladder.showCurrentStep();
// ladder.goUpstairs();
// ladder.goUpstairs();
// ladder.goUpstairs();
// ladder.showCurrentStep();
// ladder.goDownstairs();
// ladder.goDownstairs();
// ladder.goDownstairs();
// ladder.goDownstairs();
// ladder.goDownstairs();
// ladder.goDownstairs();
// ladder.goDownstairs();
// ladder.showCurrentStep();

