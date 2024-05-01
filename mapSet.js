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



// Set
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

