// Рекурсія

// 4! = 1 * 2 * 3 * 4;

// -n! = error
// 0! = 1;
// 1! = 1;

// function factorial(n) {

//     if (n < 0) {
//         console.log('Negative number!!!');
//         return;
//     }

//     if (n === 0) {
//         return 1;
//     }

//     if (n === 1) {
//         return 1;
//     }

//     let fact = 1;

//     for (let i = 1; i <= n; i++) {
//         fact *= i;
//     }

//     return fact;
// }

// console.log('factorial > ', factorial(4));


// function factorialRecursive(n) {

// }




// 5! = 5 * 4 * 3 * 2 * 1;

// factorialRecursive(5) = 5 * factorialRecursive(4)

// factorialRecursive(5) = 5 * 4 * factorialRecursive(3)

// factorialRecursive(5) = 5 * 4 * 3 * factorialRecursive(2);

// factorialRecursive(5) = 5 * 4 * 3 * 2 * 1;


// function factorialRecursive(n) {

//     if (n < 0) {
//         console.log('Negative number!!!');
//         return;
//     }

//     if (n === 0) {
//         return 1;
//     }

//     if (n === 1) {
//         return 1;
//     }

//     return n * factorialRecursive(n - 1);
// }




// const factorialRecursive = n => n < 0 ? console.log('Negative number!!!') :
//     (!n || n === 1) ? 1 : n * factorialRecursive(n - 1);




// console.log('factorialRecursive > ', factorialRecursive(5));




// {
//     a: {
//         b: {
//             c: {
//                 d: {
//                     ...
//                 }
//             }
//         }
//     }
// }








// Елементи перевіряються послідовно з початку до кінця, поки не буде знайдений шуканий елемент.

function linearSearch(arr, target) {
    for (let i = 0; i < arr.length; i++) {
        if (arr[i] === target) {
            return i; // Повертає індекс, на якому знайдено шуканий елемент
        }
    }
    return -1; // Повертає -1, якщо шуканий елемент не знайдено
}

// Приклад використання:
const myArray = [4, 2, 7, 1, 9, 5];
const targetElement7 = 7;

const result5 = linearSearch(myArray, targetElement7);

if (result5 !== -1) {
    console.log(`Елемент ${targetElement7} знайдений на позиції ${result5}.`);
} else {
    console.log(`Елемент ${targetElement7} не знайдений у масиві.`);
}




// Бінарний пошук - це швидкий алгоритм пошуку для впорядкованих масивів, 
// який шукає певний елемент за допомогою поділу масиву на половини та порівняння елемента з серединою масиву. 
// Якщо елемент, який ми шукаємо, менший за середній елемент,
//  пошук продовжується в лівій половині, інакше в правій половині.




function binarySearch(arr, target) {
    let left = 0;
    let right = arr.length - 1;

    while (left <= right) {
        const mid = Math.floor((left + right) / 2);
        console.log(mid);
        if (arr[mid] === target) {
            return mid; // Знайдено шуканий елемент, повертаємо його індекс
        } else if (arr[mid] < target) {
            left = mid + 1; // Шуканий елемент знаходиться в правій половині
        } else {
            right = mid - 1; // Шуканий елемент знаходиться в лівій половині
        }
    }

    return -1; // Якщо елемент не знайдено
}

// Приклад використання
const sortedArray = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
const targetElement = 8;

const result = binarySearch(sortedArray, targetElement);

if (result !== -1) {
    console.log(`Елемент ${targetElement} знайдено на позиції ${result}.`);
} else {
    console.log(`Елемент ${targetElement} не знайдено.`);
}





function binarySearchRecursive(arr, target, left = 0, right = arr.length - 1) {
    if (left <= right) {
        const mid = Math.floor((left + right) / 2);
        console.log(mid);
        if (arr[mid] === target) {
            return mid; // Знайдено шуканий елемент, повертаємо його індекс
        } else if (arr[mid] < target) {
            return binarySearchRecursive(arr, target, mid + 1, right); // Шуканий елемент знаходиться в правій половині
        } else {
            return binarySearchRecursive(arr, target, left, mid - 1); // Шуканий елемент знаходиться в лівій половині
        }
    }

    return -1; // Якщо елемент не знайдено
}









// console.log(arr.sort());


// console.log([-5, 8, 3, -10, 8, 4, 3, 10, 5, 0]);
// console.log([-5, 3, 8, -10, 8, 4, 3, 10, 5, 0]);
// console.log([-5, 3, -10, 8, 8, 4, 3, 10, 5, 0]);
// console.log([-5, 3, -10, 8, 4, 8, 3, 10, 5, 0]);
// console.log([-5, 3, -10, 8, 4, 3, 8, 10, 5, 0]);
// console.log([-5, 3, -10, 8, 4, 3, 8, 5, 10, 0]);
// console.log([-5, 3, -10, 8, 4, 3, 8, 5,  0, 10]);



// [6, 3, 5, 4]
// [3, 6, 5, 4]
// [3, 5, 6, 4]
// [3, 5, 4, 6]



const arr = [-5, 8, 3, -10, 5, 0];

// console.log('arr    > ', arr);

function bubbleSort(arr) {

    for (let j = 0; j < arr.length; j++) {


        for (let i = 0; i < arr.length; i++) {

            if (arr[i] > arr[i + 1]) {
                let temp = arr[i];
                arr[i] = arr[i + 1];
                arr[i + 1] = temp;
            }

        }


    }

    return arr;
}


const result1 = bubbleSort(arr);

console.log('result1 > ', result1);









// kebabCase: Перетворіть рядок в шашличний регістр. У шашличному регістрі всі-слова-в-нижньому-регістрі-та-розділені-рискою.

// - spinalCase("This Is Spinal Tap") має повертати рядок this-is-spinal-tap.


function kebabCase(str) {
    console.log('str > ', str);

    const lowerCaseStr = str.toLowerCase();

    console.log('lowerCaseStr > ', lowerCaseStr);

    const splittedStr = lowerCaseStr.split(" ");

    console.log('splittedStr > ', splittedStr);

    const joinedStr = splittedStr.join("-");

    console.log('joinedStr > ', joinedStr);
}



function kebabCase(str) {
    const lowerCaseStr = str.toLowerCase();
    const splittedStr = lowerCaseStr.split(" ");
    const joinedStr = splittedStr.join("-");

    return joinedStr;
}




function kebabCase(str) {
    const lowerCaseStr = str.toLowerCase().split(" ").join("-");

    return lowerCaseStr;
}


const kebabCase = str => str.toLowerCase().split(" ").join("-");





const result3 = kebabCase("This Is Spinal Tap");
console.log('result3 > ', result3);

//           "this-is-spinal-tap"


// This
// Is
// Spinal
// Tap

