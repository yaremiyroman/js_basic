// const numbers = [1, 2, 3, 4, 5];
// let sum = 0;

// numbers.forEach(number => {
//   sum += number;
// });

// console.log(sum); // 15



// const numbers = [1, 2, 3, 4, 5];
// const doubledNumbers = [];

// numbers.forEach(number => {
//   doubledNumbers.push(number * 2);
// });

// console.log(doubledNumbers); // [2, 4, 6, 8, 10]




// const numbers = [2, 4, 6, 8, 10];
// const allEven = numbers.every(number => number % 2 === 0);

// console.log(allEven); // true, що всі елементи масиву парні

// const grades = [68, 72, 55, 90, 82];
// const hasPassingGrade = grades.some(grade => grade >= 70);

// console.log(hasPassingGrade); // true, тому що є хоча б одна оцінка 70 і вище



// const numbers = [1, 2, 3, 4, 5];
// const squaredNumbers = numbers.map(number => number * number);

// console.log(squaredNumbers); // [1, 4, 9, 16, 25]




// const students = [
//     { name: 'Alice', score: 85 },
//     { name: 'Bob', score: 92 },
//     { name: 'Charlie', score: 78 },
//     { name: 'David', score: 60 }
//   ];

//   const passedStudents = students.filter(student => student.score >= 70);

//   console.log(passedStudents);










// ind() — повертає значення першого елементу в даному масиві, який задовольняє умові, визначеній у функції. Якщо жоден елемент не задовольняє умові, метод поверне undefined .


// const students = [
//   { name: 'Alice', score: 85 },
//   { name: 'Bob', score: 92 },
//   { name: 'Charlie', score: 78 }
// ];

// const highScoreStudent = students.find(student => student.score >= 90);

// console.log(highScoreStudent); //{name: 'Bob', score: 92}









// const inventory = [
//     { name: "apples", quantity: 2 },
//     { name: "bananas", quantity: 0 },
//     { name: "fish", quantity: 1 },
//     { name: "cherries", quantity: 5 },
// ];

// const found = inventory.findLast(item => item.quantity < 2);

// console.log((found)); // { name: 'fish', quantity: 1 }











// const students = [
//     { name: 'Alice', score: 85 },
//     { name: 'Bob', score: 92 },
//     { name: 'Charlie', score: 78 }
// ];

// const indexHighScoreStudent = students.findIndex(student => student.score >= 90);

// console.log(indexHighScoreStudent); // 1 індекс першого студента з оцінкою 90 і вище








// const array1 = [5, 12, 50, 130, 44];
// const isLargeNumber = (element) => element > 45;

// console.log(array1.findLastIndex(isLargeNumber)); //3




// //Розбиття та об'єднання рядків
// const text = 'Hello world';
// const characters = text.split('').flatMap(char => [char, '-']);

// characters.pop(); // Удаление последнего дополнительного "-"
// const newText = characters.join('');

// console.log(newText); // 'H-e-l-l-o- -w-o-r-l-d'






// Array.from() — використовується для створення нового масиву з об'єкта, що ітерується або подібного масиву. Цей метод дозволяє перетворити різноманітні дані, такі як рядки, NodeList, Map, Set і т.д., у масив.

// Array.from(iterable, mapFunction, thisValue)

// const str = 'hello';
// const array = Array.from(str);

// console.log(array); // ['h', 'e', 'l', 'l', 'o']




// const numbers = [1, 2, 3, 4];
// const squaredArray = Array.from(numbers, num => num * num);

// console.log(squaredArray); // [1, 4, 9, 16]



// const mySet = new Set([1, 2, 3]);
// const array = Array.from(mySet);

// console.log(array); // [1, 2, 3]








// const numbers = [1, 2, 3, 4, 5];
// const sum = numbers.reduce((accumulator, currentValue) => accumulator + currentValue, 0);

// console.log(sum); // 15\




// пошук максимального элемента
// const numbers = [10, 5, 8, 2, 15];
// const maxNumber = numbers.reduce((accumulator, currentValue) => Math.max(accumulator, currentValue));

// console.log(maxNumber); // 15









// const fruits = ['banana', 'apple', 'pear', 'orange'];

// fruits.sort();

// console.log(fruits); // ['apple', 'banana', 'orange', 'pear']








// const numbers = [10, 2, 7, 5, 1];

// numbers.sort(function(a, b) => a - b);

// console.log(numbers); // [1, 2, 5, 7, 10]





// toSorted() — схожий на метод sort(), але повертає новий масив (не змінює вихідний масив) з елементами, відсортованими за зростанням.

// const languages = ['Romanian', 'English', 'Deutsch'];
// const sorted = languages.toSorted();

// console.log(sorted); // => [ 'Deutsch', 'English', 'Romanian' ]
// console.log(languages); // => [ 'Romanian', 'English', 'Deutsch' ]




// const data = [
//     { type: 'food', name: 'Pizza' },
//     { type: 'drink', name: 'Coffee' },
//     { type: 'food', name: 'Hot Dog' }
//   ];
  
//   const result = Object.groupBy(data, item => item.type);
  
//   console.log(result); 








// [6, 3, 5, 4]
// [3, 6, 5, 4]
// [3, 5, 6, 4]
// [3, 5, 4, 6]


// [3, 5, 4, 6]

// [3, 4, 5, 6]


// const arr = [6, 5, 3, 9];

// function bubbleSort(arr) {
//     for (let j = 0; j < arr.length; j++) {

//         for (let i = 0; i < arr.length; i++) {
//             console.log(arr);
//             if (arr[i] > arr[i + 1]) {
//                 let temp = arr[i];
//                 arr[i] = arr[i + 1];
//                 arr[i + 1] = temp;
//             }
//         }

//         console.log('---------------');
//     }
// }

// bubbleSort(arr);
