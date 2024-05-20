// # Corner cases

// factorial
// 4! = 1 * 2 * 3 * 4

// Знайти факторіaл від довільного number
function factorialFor(n) {
    if (typeof n !== 'number') {
        return alert('Не число!');
    }

    if (n < 0 || n > 20) {
        return alert('З таким числов факторіл не обчислюється');
    }

    if (n === 0 || n === 1) {
        return 1;
    }

    let fact = 1;

    for (let i = 1; i <= n; i++) {
        fact *= i;
    }

    return fact;
}

// const result = factorialFor(1);
// console.log('result > ', result );


// Визначення рекурсії.
// Рекурсія - це метод програмування, коли функція викликає сама себе безпосередньо або через інші функції. Рекурсія використовується для вирішення проблеми шляхом розбиття її на підпроблеми аналогічного типу, які легше розв'язати.

// Обчислення Факторіалу за Допомогою Циклу while
function factorialWhile(n) {
    if (n < 0) {
        return undefined; // Факторіал не визначений для від'ємних чисел
    }
    let result = 1;

    while (n > 0) {
        result *= n;
        n--;
    }

    return result;
}

console.log(factorialWhile(5)); // Виведе 120
console.log(factorialWhile(0)); // Виведе 1
console.log(factorialWhile(-1)); // Виведе undefined


// Рекурсивні алгоритми можуть бути простішими для розуміння і написання, ніж їх ітеративні аналоги.
// factorialRecursive(4) = 4 * factorialRecursive(3)
// factorialRecursive(3) = 4 * 3 * factorialRecursive(2)
// factorialRecursive(2) = 4 * 3 * 2 * factorialRecursive(1)

// factorialRecursive(2) = factorialRecursive(4) * factorialRecursive(3) * factorialRecursive(2) * factorialRecursive(1)


// Базова структура рекурсивної функції
function factorialRecursive(n) {
    // Базовий випадок.
    if (n === 0) {
        return 1;
    }

    // Рекурсивний випадок.
    return n * factorialRecursive(n - 1);
}
// скоротити в стрілкову функцію




// нескінченна рекурсія
function countdown(i) {
    console.log(i)
    countdown(i - 1)
}

countdown(5);

// термінальна гілка тут
function countdown(i) {
    console.log(i)
    if (i <= 0) return;
    countdown(i - 1)
}

countdown(5);



// Приклад 4: Хвостова рекурсія для факторіалу
// Хвостова рекурсія — це спеціальний вид рекурсії, за якого рекурсивний виклик є останньою операцією в тілі функції. Це означає, що після завершення рекурсивного виклику немає додаткових операцій, які потрібно виконати. Компілятори та інтерпретатори можуть оптимізувати хвостову рекурсію, перетворюючи її на ітеративний цикл. Це дає змогу уникнути переповнення стека, що може бути проблемою у випадку звичайної рекурсії. Давайте перепишемо нашу функцію на рішення з хвостовою рекурсією.
function factorialTailRecursive(n, acc = 1) {
    if (n === 0) {
        return acc;
    }

    return factorialTailRecursive(n - 1, n * acc);
}


const factorialTCO = (x, acc = 1) => x === 1 ? acc : factorialTCO(x - 1, x * acc);





// Пошук максимального елемента в масиві.

function findMax(arr) {
    if (arr.length === 1) {
        return arr[0];
    }

    const subMax = findMax(arr.slice(1));
    return arr[0] > subMax ? arr[0] : subMax;
}





// QuickSort


function quickSort(arr) {
    if (arr.length <= 1) {
        return arr;
    }

    const pivot = arr[Math.floor(arr.length / 2)]; // Обираємо опорний елемент
    const left = [];
    const right = [];

    for (let i = 0; i < arr.length; i++) {
        if (arr[i] < pivot) {
            left.push(arr[i]);
        } else if (arr[i] > pivot) {
            right.push(arr[i]);
        }
    }

    return [...quickSort(left), pivot, ...quickSort(right)];
}

// Приклад використання:
const arr = [5, 3, 7, 2, 9, 1, 8, 4];
const sortedArr = quickSort(arr);
console.log(sortedArr); // Виведе відсортований масив: [1, 2, 3, 4, 5, 7, 8, 9]


// Базовий випадок: Якщо масив містить один елемент або жодного, то він вже відсортований, тому функція повертає масив без змін.
// Вибір опорного елемента (pivot): Обирається елемент у середині масиву.
// Розподіл елементів: Масив розбивається на два підмасиви: один з елементами, які менше опорного, і один з елементами, які більше опорного.
// Рекурсивне сортування підмасивів: Обидва підмасиви рекурсивно сортуються викликом функції quickSort.
// Об'єднання підмасивів з опорним елементом: Після сортування підмасивів вони об'єднуються разом з опорним елементом у відсортований масив.
