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

// Map — колекція для зберігання даних будь-якого типу у вигляді пар [key, value] і запам'ятовує початковий порядок вставки ключів. Будь-яке значення (як об'єкти, так і примітивні значення) можна використовувати як ключ або значення.

const mapX = new Map([
    ['asdf', 'afafagf'],
    ['asdf2', 'afafagf'],
])

// - Відсутність неоголошених властивостей
// - Безпека
// - Упорядкованість записів
// - Доступ до розміру
// - Ітеруємий об'єкт
// - Продуктивність


// JavaScript's Map data type is quite versatile and can be used in various scenarios. Here are some data structures where the Map data type is particularly suitable:


// Hash Table:
// Map in JavaScript is implemented as a hash table, making it ideal for scenarios where you need fast key-value lookups. It provides O(1) time complexity for both insertion and retrieval operations.

// Cache:
// You can use a Map as a cache data structure where keys represent input values, and values represent corresponding output values. This is useful for caching the results of expensive computations or API calls.

// Memoization:
// In functional programming, memoization is a technique used to cache the results of function calls based on their input parameters. You can use a Map to store the previously computed results, which can significantly improve the performance of recursive or repetitive function calls.

// Event Emitters:
// Map can be used to implement event emitters where keys represent event names, and values represent arrays of event listeners. This allows efficient registration, removal, and triggering of event handlers.

// Routing Table:
// In web development, Map can be used to store routing information in a web application. Keys can represent URL paths, and values can represent corresponding handler functions or controller actions.

// Graphs:
// While not as efficient as specialized graph data structures, you can use Map to represent graphs in JavaScript. Keys can represent nodes, and values can represent adjacency lists or maps containing neighbor nodes and their edge weights.

// LRU Cache:
// You can implement an LRU (Least Recently Used) cache using a combination of Map and a doubly linked list. The Map stores key-value pairs, and the doubly linked list maintains the order of recently accessed items, allowing efficient eviction of the least recently used items.

// State Management:
// Map can be used for managing application state, especially in complex applications where you need to store key-value pairs representing different aspects of the application's state.

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
console.log('name, age');
console.log(name, age);




// WeakMap ?////////////////////////////////////////////?////////////////////////////////////////////?////////////////////////////////////////////




// SET від Array

// Унікальність значень. Set — зберігає тільки унікальні значення. Спроба додати значення, що дублюється, буде проігнорована. Array — може містити значення, що дублюються.
// Індекси. Set — не має індексів. Елементи в Set доступні тільки через методи has() і forEach(). Array — має індекси, за якими можна звертатися до елементів.
// Методи. Set — надає методи для додавання, видалення, перевірки наявності елементів і перебору. Array — надає ширший спектр методів для роботи з елементами, включно з додаванням, видаленням, пошуком, сортуванням і багато іншого.
// Застосування. Set — часто використовується для зберігання унікальних значень, фільтрації дублікатів і виконання операцій над множинами. Array — застосовується для зберігання впорядкованих колекцій значень, виконання безлічі операцій, включно з маніпуляціями, сортуванням, фільтрацією тощо.
// Використання пам'яті. Set — може використовувати менше пам'яті для зберігання унікальних значень, оскільки дубльовані значення не допускаються. Array — може використовувати більше пам'яті для зберігання значень, що дублюються.




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



// SymmetricDifference
const setA11 = new Set([1, 2, 3]);
const setB11 = new Set([3, 4, 5]);

// Створюємо нову множину, що містить елементи, присутні тільки в одній із множин
const symmetricDifferenceSet = new Set(
    [...setA11].filter(x => !setB11.has(x)).concat([...setB11].filter(x => !setA11.has(x)))
);

console.log(symmetricDifferenceSet); // Set { 1, 2, 4, 5 }






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



// Word Frequency Counter:
// Create a function that takes in an array of words and returns a Map object where the keys are unique words and the values are the frequencies of those words in the array.
// Merge Maps:



// Reverse Map:
// Write a function that takes a Map and returns a new Map where the keys and values are swapped.



// Remove Duplicates:
// Write a function that takes an array as input and returns a Set containing only the unique elements of the array.



// Вам необхідно написати функцію, яка приймає на вхід масив об'єктів, де кожен об'єкт описує сповіщення та має поля 'source' / text / date. Вам необхідно перетворити цей масив на об'єкт, де ключем буде джерело сповіщення, а значенням - масив сповіщень із цього джерела.

const data = [
    {
        'source': 'ukr.net',
        'text': 'Вам необхідно написати функцію 1 1 1 1',
        'date': '23.11.1989',
    },
    {
        'source': 'google.com',
        'text': 'Кожен об\'єкт описує сповіщення та має поля 1 1 1 1',
        'date': '01.01.2022',
    },
    {
        'source': 'unian.ua',
        'text': 'Вам необхідно перетворити цей масив на об\'єкт 1 1 1 1',
        'date': '05.12.2024',
    },
    {
        'source': 'ukr.net',
        'text': 'Вам необхідно написати функцію 1 2 2 2 2 ',
        'date': '23.11.1889',
    },
    {
        'source': 'google.com',
        'text': 'Кожен об\'єкт описує сповіщення та має поля 2 2 2 2 ',
        'date': '01.12.2002',
    },
    {
        'source': 'unian.ua',
        'text': 'Вам необхідно перетворити цей масив на об\'єкт 2 2 2 2 ',
        'date': '05.12.2024',
    },
    {
        'source': 'ukr.net',
        'text': 'Вам необхідно написати функцію 21555',
        'date': '23.11.1989',
    },
    {
        'source': 'google.com',
        'text': 'Кожен об\'єкт описує сповіщення та має поля1555',
        'date': '01.42.2002',
    },
    {
        'source': 'unian.ua',
        'text': 'Вам необхідно перетворити цей масив на об\'єкт1555',
        'date': '05.12.2024',
    },
    {
        'source': 'ukr.net',
        'text': 'Вам необхідно написати функцію 332',
        'date': '23.11.1989',
    },
    {
        'source': 'google.com',
        'text': 'Кожен об\'єкт описує сповіщення та має поля32',
        'date': '01.01.2002',
    },
    {
        'source': 'unian.ua',
        'text': 'Вам необхідно перетворити цей масив на об\'єкт32',
        'date': '05.12.2024',
    },
    {
        'source': 'ukr.net',
        'text': 'Вам необхідно написати функцію 43',
        'date': '23.11.1989',
    },
    {
        'source': 'google.com',
        'text': 'Кожен об\'єкт описує сповіщення та має поля3',
        'date': '01.01.2002',
    },
    {
        'source': 'unian.ua',
        'text': 'Вам необхідно перетворити цей масив на об\'єкт3',
        'date': '05.12.2024',
    },
];

// 1st
// const msgsCollection = new Map();

// const mapMessagesToSource = msgs =>
//     Object.groupBy(msgs, (msg, i) => {
//         msgsCollection.set(msg.source + i, msg);
//         return msg.source;
//     });

// console.log(mapMessagesToSource(data));

// for (let message of msgsCollection.values()) {
//     console.log(message);
// }


// With iterator

const mapMessagesToSource = msgs => {
    const groupedMessages = Object.groupBy(msgs, (msg, i) => {
        return msg.source;
    });

    return groupedMessages[Symbol.iterator] = function () {
        let index = 0;
        const keys = Object.keys(this);

        return {
            next: () => {
                if (index < keys.length) {
                    return { value: keys[index++], done: false };
                } else {
                    return { done: true };
                }
            },
        };
    };
}

// Call
const groups = mapMessagesToSource(msgs);

for (let group of groups) {
    console.log(groups[group]);
}




// Memo
// Встановіть обмеження на розмір кеша у вигляді числа N. Якщо це значення перевищено, то вам необхідно перезаписати перше значення, потім друге і так далі.
// Додайте перевірку, щоб прибрати дублікати результатів із кешу
const multiple = (a, b) => +a * +b;

function memo(fn, N) {
    let cache = new Map();
    let counter = 0;

    return function (...args) {
        const newKey = args.join('-');

        if (cache.has(newKey)) {
            console.log("CACHED", cache);
            return cache.get(newKey);
        }

        if (cache.size === N) {
            console.log("cache.size === N", cache.size, ' = ', N);
            const entries = [...cache.entries()];
            const keys = [...cache.keys()];
            const cacheItemIndex = entries.findIndex(entry => entry.includes(keys[counter]));

            if (++counter === N) {
                counter = 0;
            }

            if (!!entries[cacheItemIndex]) {
                entries[cacheItemIndex][0] = newKey;
                cache = new Map(entries);
                cache.set(newKey, fn(...args));
                console.log("cacheItemIndex");
                return cache.get(newKey);
            }
        }

        console.log("SET");
        cache.set(newKey, fn(...args));

        return cache.get(newKey);
    }
}

const memoMultiplication = memo(multiple, 3);


