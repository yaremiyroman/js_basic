# Переписуємо функції на стрілкові функції та функціональні вирази. Функція отримує на вході 2 числа. Якщо числа парні - повертає добуток чисел, якщо непарні - їх суму, інакше - повернути непарне число.
-  6, 8   => 6 * 8
-  3, 5   => 3 + 5
-  3, 8   => 3

# Напишіть функцию main (a, b, cb) наступним чином:
- Якщо a та b не передані, вони дорівнюють за замовчюванням 2 та 3  відповідно.
- Якщо аргумент cb переданий і він є функцією, то він виконується після виклику функції sum(a, b), і як вхідне значення приймає результат роботи функції sum(a, b).
- Функція main повинна повертати результат функції аргументу cb, якщо він є, або результат функції sum(a, b)

# Напишіть фукнцію range(), що приймає наступні аргументи: початок діапазону, кінець діапазону та необовʼязковий крок. Функція повинна повертати масив, якій містить всі числа з діапазону враховуючи крок.

# Напишіть фукнцію createMatrix(), що приймає аргумент як розмір квадратної матриці та заповнює цю матрицю випадковими числами від 0 до 100.

# Реалізуйте функцію removeElement(arr, elem, newElem), яка шукає елементи elem в масиві arr та замінює їх на newElem.


const arr = [5, 7, 5, 8, 2, 4];
removeElement(arr, 5, 9);  ->   [9, 7, 9, 8, 2, 4]

for (map)
includes