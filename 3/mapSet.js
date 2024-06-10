// Класс MAP

// Обʼєкти в масиви і навпаки
const obj = {
    'source': 'ukr.net',
    'text': 'Вам необхідно написати функцію 1 1 1 1',
    'date': '23.11.1989',
};

const entries = [
    ['source', 'ukr.net',],
    ['text', 'Вам необхідно написати функцію 1 1 1 1',],
    ['date', '23.11.1989',],
];

console.log(Object.entries(obj));
console.log(Object.fromEntries(entries));




// Маппінг
// OLD variables
let oldVar1 = 'Hello';
let oldVar2 = 'World';
let oldVar3 = '!';

// Define your mapping object
const mapToNewVar = {
    oldVar1: 'newVar1',
    oldVar2: 'newVar2',
    oldVar3: 'newVar3'
};



// Map old variables to new names
const newVar1 = mapToNewVar.oldVar1;
const newVar2 = mapToNewVar.oldVar2;
const newVar3 = mapToNewVar.oldVar3;

console.log(newVar1, newVar2, newVar3); // Output: Hello World !






// Map — колекція для зберігання даних будь-якого типу у вигляді пар [key, value] і запам'ятовує початковий порядок вставки ключів. Будь-яке значення (як об'єкти, так і примітивні значення) можна використовувати як ключ або значення.

const mapX = new Map([
    ['asdf', 'afafagf'],
    ['asdf2', 'afafagf'],
])

// відінності від обʼєкта
// - Відсутність неоголошених властивостей
// ---- За замовчуванням Map не містить жодних ключів, а містить лише те, що явно вказано.
// .ʼObject має прототип, тому він містить ключі за замовчуванням, які можуть здаватися вашими власними ключами.
// - Безпека
//-- нема прототипа, мап незалежний тип даних
// - Упорядкованість записів
//  ----жоден механізм не перебирає всі властивості об'єкта
// - Доступ до розміру
// --- розмір обʼєкта невідомий
// - Ітеруємий об'єкт
// ----Map є ітерабельним. У Map є вбудований метод forEach для ітерації. Подібний метод є в масивах. Однак у їхній роботі є невелика різниця.
// - Продуктивність
// як масив Map — краще працює в сценаріях, що передбачають часті додавання і видалення пар ключ-значення.

// Object — не оптимізовано для частого додавання та видалення пар ключ-значення.


// JavaScript's Map data type is quite versatile and can be used in various scenarios. Here are some data structures where the Map data type is particularly suitable:


// Hash Table:
// Map in JavaScript is implemented as a hash table, making it ideal for scenarios where you need fast key-value lookups. It provides O(1) time complexity for both insertion and retrieval operations.

// Cache:
// You can use a Map as a cache data structure where keys represent input values, and values represent corresponding output values. This is useful for caching the results of expensive computations or API calls.

// Memoization:
// In functional programming, memoization is a technique used to cache the results of function calls based on their input parameters. You can use a Map to store the previously computed results, which can significantly improve the performance of recursive or repetitive function calls.

// Routing Table:
// In web development, Map can be used to store routing information in a web application. Keys can represent URL paths, and values can represent corresponding handler functions or controller actions.

// State Management:
// Map can be used for managing application state, especially in complex applications where you need to store key-value pairs representing different aspects of the application's state.


// Set
// map.set(key, value);
const user = new Map();

user.set('name', 'Alice');
user.set('age', 30);

console.log(user); // Map { 'name' => 'Alice', 'age' => 30 }

// Get

const user2 = new Map();

user2.set('name', 'Alice');
user2.set('age', 30);

console.log(user2.get('name')); // 'Alice'
console.log(user2.get('age')); // 30
console.log(user2.get('country')); // undefined

// Has - обробка неісуючого значення

if (myMap.has('age')) {
    console.log(`Age: ${myMap.get('age')}`);
} else {
    console.log('Age not found');
}


// forEach

map.forEach((value, key, map) => {
    // Код для виконання з value, key та map
});

// Reverse Map:
// Write a function that takes a Map and returns a new Map where the keys and values are swapped.
function swapKeysAndValues(map) {
    const swappedMap = new Map();
    map.forEach((value, key) => {
        swappedMap.set(value, key);
    });
    return swappedMap;
}

// Example usage:
const originalMap = new Map([
    ['a', 1],
    ['b', 2],
    ['c', 3]
]);

const swappedMap = swapKeysAndValues(originalMap);
console.log(swappedMap); // Output: Map(3) { 1 => 'a', 2 => 'b', 3 => 'c' }




// Delete

const userr = new Map();

userr.set('name', 'Alice');
userr.set('age', 30);

console.log(userr.delete('name')); // true
console.log(userr.delete('country')); // false

console.log(userr); // Map { 'age' => 30 }




// Clear

const user55 = new Map();

user55.set('name', 'Alice');
user55.set('age', 30);

console.log(user55.size); // 2

user55.clear();

console.log(user55.size); // 0



// keys
// values
// entries

const myData = new Map();
myData.set('color', 'White');
myData.set('height', 300);

const keys = myData.keys();
const values = myData.values();
const myDataEntries = myData.entries();


// for (const key of keys) {
// for (const value of values) {
for (const [key, value] of myDataEntries) {
    console.log(`${key}: ${value}`);
}



// Destructuring

const myMap = new Map();
myMap.set('name', 'Alice');
myMap.set('age', 30);

const [[, name], [, age]] = myMap;
// console.log('name, age');
console.log(name, age);




// WeakMap ?////////////////////////////////////////////?////////////////////////////////////////////?////////////////////////////////////////////


// let key = {
//     name: 'John'
// };

// const weakMap = new WeakMap([[key, 1]]);

// key = null;
// console.log(weakMap.get(key)); // undefined







// SET від Array

// Унікальність значень. Set — зберігає тільки унікальні значення. Спроба додати значення, що дублюється, буде проігнорована. Array — може містити значення, що дублюються.
// Індекси. Set — не має індексів. Елементи в Set доступні тільки через методи has() і forEach(). Array — має індекси, за якими можна звертатися до елементів.
// Методи. Set — надає методи для додавання, видалення, перевірки наявності елементів і перебору. Array — надає ширший спектр методів для роботи з елементами, включно з додаванням, видаленням, пошуком, сортуванням і багато іншого.
// Застосування. Set — часто використовується для зберігання унікальних значень, фільтрації дублікатів і виконання операцій над множинами. Array — застосовується для зберігання впорядкованих колекцій значень, виконання безлічі операцій, включно з маніпуляціями, сортуванням, фільтрацією тощо.
// Використання пам'яті. Set — може використовувати менше пам'яті для зберігання унікальних значень, оскільки дубльовані значення не допускаються. Array — може використовувати більше пам'яті для зберігання значень, що дублюються.





// Set

// Deduplication:
// The most common use case for Set is removing duplicates from an array or a collection of values. By converting the array to a Set, you automatically eliminate duplicate elements.

// Membership Testing:
// Set is efficient for checking whether an element exists in a collection. This makes it suitable for scenarios where you need to quickly determine if a particular value is present.

// Intersection, Union, and Difference:
// Set can be used to perform set operations such as intersection, union, and difference. These operations are useful in scenarios like finding common elements between multiple sets or finding unique elements across sets.

// Filtering:
// You can use Set to filter out elements from an array that satisfy certain conditions. By converting the array to a set and then back to an array, you retain only the unique elements that meet your criteria.

// Tagging:
// Set can be used for tagging or categorizing items. Each set represents a category, and the elements within the set correspond to items belonging to that category. This is useful in scenarios like organizing data or implementing filters.

// Event Subscription:
// In event-driven programming, Set can be used to manage event subscriptions. Each set represents a set of event listeners, and adding or removing listeners becomes a simple operation.

// Dependency Management:
// Set can be used to track dependencies between modules or resources in an application. Each set represents a module or resource, and the elements within the set represent dependencies.

// Network Graphs:
// Although not as efficient as dedicated graph data structures, Set can be used to represent graphs in certain scenarios. Each set represents a node in the graph, and the elements within the set represent neighboring nodes.

// Data Validation:
// Set can be used for input validation by defining a set of valid values. This allows you to quickly validate whether an input value is within the allowed range or set of values.





const mySet = new Set();

// add
mySet.add('apple');
mySet.add('banana');
mySet.add('apple'); // Цей елемент не буде додано
mySet.add('apple').add('banana').add('cherry');
console.log(mySet); // Set { 'apple', 'banana' }

// has
console.log(mySet.has('apple')); // true


// forEach
// mySet.forEach(function(value, key, set) 
let mySet2 = new Set([1, 2, 3, 4]);

mySet2.forEach(function (value) {
    console.log(value);
});


// Remove Duplicates:
// Write a function that takes an array as input and returns a Set containing only the unique elements of the array.
const numbers = [1, 2, 3, 3, 4, 5, 5];
const uniqueNumbers = [...new Set(numbers)];
console.log(uniqueNumbers); // Виведе: [1, 2, 3, 4, 5]





// delete
console.log(mySet.delete('apple')); // Output: true
console.log(mySet.delete('cherry')); // Output: false

console.log(mySet); // Output: Set { 'banana' }


// clear
// size
const mySet3 = new Set();

mySet3.add('apple');
mySet3.add('banana');

console.log(mySet3.size); // 2

mySet3.clear();

console.log(mySet3.size); // 0




// keys(); => value
// values(); => value
// set.entries(); => [value, value] 
const mySet5 = new Set();

mySet5.add('apple');
mySet5.add('banana');
mySet5.add('cherry');

const keys3 = mySet5.keys();

const values3 = mySet5.values();

for (const key of keys3) {
    console.log('key > ', key);
}

for (const val of values3) {
    console.log('val > ', val);
}





// Union
const setA = new Set([1, 2, 3]);
const setB = new Set([3, 4, 5]);

// Створюємо нове безліч, поєднуючи setA і setB
const unionSet = new Set([...setA, ...setB]);

console.log(unionSet); // Set { 1, 2, 3, 4, 5 }


// Intersection

const setAa = new Set([1, 2, 3]);
const setBb = new Set([3, 4, 5]);

// Створюємо нову множину, що містить елементи, присутні і в setAa, і в setBb
const intersectionSet = new Set([...setAa].filter(x => setBb.has(x)));

console.log(intersectionSet); // Set { 3 }



// Difference

Помилка
const setA1 = new Set([1, 2, 3]);
const setB4 = new Set([3, 4, 5]);

// Створюємо нову множину, що містить елементи з setA1, які відсутні в setB4
const differenceSet = new Set([...setA1].filter(x => !setB4.has(x)));

console.log(differenceSet); // Set { 1, 2 }



// // SymmetricDifference
// const setA11 = new Set([1, 2, 3]);
// const setB11 = new Set([3, 4, 5]);

// // Створюємо нову множину, що містить елементи, присутні тільки в одній із множин
// const symmetricDifferenceSet = new Set(
//     [...setA11].filter(x => !setB11.has(x)).concat([...setB11].filter(x => !setA11.has(x)))
// );

// console.log(symmetricDifferenceSet); // Set { 1, 2, 4, 5 }






// Destructuring

const mySet123 = new Set([1, 2, 3, 4]);

// Використовуємо деструктурувальне присвоювання для вилучення значень із Set
const [firstValue, secondValue, ...rest] = mySet123;

console.log(firstValue); //  1
console.log(secondValue);// 2
console.log(rest); //  [3, 4]







// WeakSet ?////////////////////////////////////////////?////////////////////////////////////////////?////////////////////////////////////////////










// Вбудовані ітеровані об'єкти
const array = [1, 2, 3, 4];

for (const item of array) {
    console.log(item);
}


const str = "Hello";

for (const char of str) {
    console.log(char);
}


const map = new Map();
map.set('a', 1);
map.set('b', 2);

for (const [key, value] of map) {
    console.log(key, value);
}



const set = new Set([1, 2, 3, 2, 1]);

for (const value of set) {
    console.log(value);
}














const myIterable = {
    items: [1, 2, 3, 4],
    [Symbol.iterator]() {
        let index = 0;

        return {
            next: () => {
                if (index < this.items.length) {
                    return { value: this.items[index++], done: false };
                } else {
                    return { done: true };
                }
            },
        };
    },
};

for (const item of myIterable) {
    console.log(item);
}









const naturalRowIterator = {
    [Symbol.iterator]: () => ({
        _current: 0,
        next() { return {
            value: ++this._current,
            done: this._current > 3,
       }},
   }),
}

for (num of naturalRowIterator) {
    console.log(num);
}
// Вывод: 1, 2, 3




// Ітерація по всім властивостям обʼєкта
