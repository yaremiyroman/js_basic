// Статичні методи Number
// isFinite
// Статичний метод isFinite визначає, чи є передане значення скінченним числом — тобто перевіряє, що задане значення є числом, і це число не є Infinity, -Infinity або NaN.



Number.isFinite(Infinity); // false
Number.isFinite(NaN); // false
Number.isFinite(-Infinity); // false
Number.isFinite(0); // true
Number.isFinite(2e64); // true
Number.isFinite(undefined); // false
Number.isFinite(42); // true
Number.isFinite('42'); // false

// isInteger
// isInteger — це статичний метод об'єкту Number, який використовується для перевірки, чи є передане значення цілим числом. Він повертає true, в іншому випадку повертає false. Якщо значення є NaN або нескінченністю, повертає false.


Number.isInteger(0.1); // false
Number.isInteger(1); // true
Number.isInteger(-100000); // true
Number.isInteger(NaN); // false
Number.isInteger(0); // true
Number.isInteger('5'); // false
Number.isInteger({}); // false
Number.isInteger(3.14); // false




// isNaN
// isNaN — статичний метод, який використовується для перевірки, чи є передане значення NaN. Однак Number.isNaN() не перетворює значення на число перед перевіркою, що робить його більш точним і надійним способом перевірки NaN.


Number.isNaN(NaN); // true
Number.isNaN(42); // false
Number.isNaN('text'); // false (не перетворюється)
Number.isNaN(undefined); // false



// isSafeInteger


// isSafeInteger — це статичний метод, використовується для перевірки, чи є передане значення «безпечним цілим числом». Безпечні цілі числа — це цілі числа, які представлені в JavaScript без втрати точності. Це включає значення від -(2^53 - 1) до 2^53 - 1.


Number.isSafeInteger(42); // true
Number.isSafeInteger(3.14); // false
Number.isSafeInteger('42'); // false 



// parseInt
// parseInt — це статичний метод, використовується для перетворення рядка на ціле число на основі зазначеної системи числення . Вона аналізує переданий рядок і намагається отримати ціле значення з початку рядка. Якщо перетворення неможливе, функція поверне NaN.

// string — рядок, який потрібно перетворити на ціле число radix — пціональний параметр, що вказує систему обчислення для парсингу числа. Якщо не вказано, використовується десяткова система за замовчуванням


Number.parseInt('100px'); // 100
Number.parseInt('12.3'); // 12, тільки частина цілого числа
Number.parseInt('42'); // 42 (десятичная система)
Number.parseInt('1010', 2); // 10 (двоїчна система)
Number.parseInt('A', 16); // 10 (шістнадцяткова система)
Number.parseInt('hello'); // NaN 




// parseFloat
// parseFloat — це статичний метод, використовується для перетворення рядка в число з плаваючою точкою. Вона аналізує переданий рядок і намагається отримати числове значення з десятковою дробовиною з початку рядка. Якщо перетворення неможливе, функція поверне NaN.


Number.parseFloat('3.14'); // 3.14
Number.parseFloat('42'); // 42
Number.parseFloat('0.1'); // 0.1
Number.parseFloat('0.001'); // 0.001
Number.parseFloat('0'); // 0
Number.parseFloat('hello'); // NaN 




// Методи чисел
// toFixed
// toFixed — використовується для форматування числа з фіксованою кількістю десяткових знаків (заданих параметром) та повернення рядка з відформатованим числом.


42..toFixed(2); // 42.00
3.14..toFixed(0); // 3
0.1..toFixed(5); // 0.10000
123456..toFixed(2); // 123456.00


// toPrecision
// toPrecision — повертає рядок з числом з вказаною точність. Для чисел в нотації з фіксованою комою повертається число значущих цифр, що дорівнює значенню precision. Якщо значення precision не вказано або дорівнює undefined, викликається метод toString.

const num = 123.456789;

num.toPrecision(5); // 123.46
num.toPrecision(3); // 123
num.toPrecision(8); // 123.456789



// at та concat
// at
// at— використовується для отримання символу рядка за вказаним індексом. Він дозволяє отримати символ рядка на певній позиції без необхідності використовувати квадратні дужки або метод charAt().


const string = 'Hello, world!';
string.at(1); // "e"
string.at(7); // "w"
string.at(-1); // "!"
string.at(-6); // ' '
string.at(20); // undefined (індекс виходить за межі рядка)


// concat
// concat — використовується для об'єднання двох або більше рядків в один новий рядок. Він не змінює вихідні рядки, а повертає новий рядок, що містить об'єднання вказаних рядків.


// string.concat(str1, str2, ..., strN)
const str1 = 'Hello,';
const str2 = ' world!';
const combined = str1.concat(str2);
console.log(combined); // Hello, world!

const greeting = 'Hello';
const name = 'Alice';
const message = greeting.concat(', ', name, '!');
console.log(message); // Hello, Alice!




// startsWith та endsWith
// startsWith
// startsWith — використовується для перевірки, чи починається рядок із зазначеного підрядка. Він повертає true, якщо рядок починається із зазначеного підрядка, і false, якщо ні.


// string.startsWith(searchString[, position])
const string2 = 'Hello, world!';

string2.startsWith('Hello'); // true
string2.startsWith('world'); // false
string2.startsWith('world', 7); // true (починаючи з позиції 7)



string.endsWith('world!'); // true
string.endsWith('Hello'); // false
string.endsWith('Hello', 5); // true (перевірка на останніх 5 символах)




// indexOf
// indexOf — використовується для пошуку першого входження підрядка у рядку. Він повертає індекс першого символу знайденого підрядка, або -1, якщо підрядок не знайдено.


// padStart та padEnd
// padStart
// padStart — використовується для додавання заданої кількості символів (зазвичай пробілів) на початок рядка до досягнення вказаної довжини. Цей метод створює новий рядок, який містить вихідний рядок, доповнений символами до заданої довжини. 

// const string44 = '42';
// const paddedString = string44.padStart(5, '0');
// console.log(paddedString); // 00042

// const message2 = 'Hello';
// const paddedMessage = message2.padStart(10, '*');
// console.log(paddedMessage); // "***Hello"

// const number = '12345';
// const formattedNumber = number.padStart(10, '0');
// console.log(formattedNumber); // 0000012345







// padEnd
// padEnd — працює аналогічно методу padStart, але додає символи до кінця рядка до досягнення зазначеної довжини.



// const string = '42';
// const paddedString = string.padEnd(5, '0');
// console.log(paddedString); // "42000"

// const message = 'Hello';
// const paddedMessage = message.padEnd(10, '*');
// console.log(paddedMessage); // Hello*****

// const number = '12345';
// const formattedNumber = number.padEnd(10, '0');
// console.log(formattedNumber); // 1234500000



// repeat
// repeat — використовується для створення нового рядка, що складається з повторюваних зазначену кількість разів підрядків.



const star = '*';
const repeatedStar = star.repeat(5);
console.log(repeatedStar); // *****

const word = 'hello';
const repeatedWord = word.repeat(3);
console.log(repeatedWord); // hellohellohello



// replace
// replace — використовується для заміни підрядка в рядку на інший підрядок. Він повертає новий рядок, в якому всі входження зазначеного підрядка були замінені на новий підрядок.


const string = 'Hello, world!';
const replacedString = string.replace('world', 'universe');
console.log(replacedString); // Hello, universe!

const message = 'Hello, John!';
const name = 'John';
const replacedMessage = message.replace(name, 'Alice');
console.log(replacedMessage); // Hello, Alice!



// replaceAll
// replaceAll — працює аналогічно методу replace, але замінює всі входження зазначеного підрядка або регулярного вираження на новий підрядок.

const string = 'Hello, John! John is here.';
const replacedString = string.replaceAll('John', 'Alice');
console.log(replacedString); // Hello, Alice! Alice is here.

const text = '1 + 2 = 3';
const mathExpression = text.replaceAll('+', '-');
console.log(mathExpression); // 1 - 2 = 3



// slice — використовується для вилучення підрядка з рядка. Він повертає новий рядок, що складається із символів, починаючи з вказаного індексу та до вказаного індексу (але не включно). Початковий рядок залишається незмінним.

const string = 'Hello, world!';
const slicedString = string.slice(7, 12);
console.log(slicedString); // world

const message = 'Hello, John!';
const name = message.slice(7);
console.log(name); // John!

const numbers = '123456789';
const subString = numbers.slice(2, 5);
console.log(subString); // 345


Якщо endIndex не вказано, slice витягує підрядок до кінця рядка. Якщо beginIndex і endIndex негативні, вони вважаються відліком з кінця рядка.




























