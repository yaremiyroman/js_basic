

// Гетери й сетери для управління доступом до об’єкта

// class CatClass {
//     constructor(catColor, catSecondName) {
//         this.color = catColor;
//         this.secondName = catSecondName;
//         this.eyes = 2;
//     }

//     sayMeow() {
//         console.log(' Meow ');
//     }

//     get eyesGetSet() {
//         console.log('Getter started > ');
//         return this.eyes - 1;
//     }

//     set eyesGetSet(eyesNumber) {
//         console.log('Setter started > ');
//         this.eyes = eyesNumber * 3;
//         console.log('Setter finished > ');
//     }
// }

// const cat3 = new CatClass('red', 'red');

// console.log('cat3.eyes > ', cat3.eyes);

// cat3.eyes = 1000;
// console.log('cat3.eyes > ', cat3.eyes);

// const getterResult = cat3.eyesGetSet;

// console.log('getterResult > ', getterResult);

// cat3.eyesGetSet = 5;

// cat3.eyesGetSet = 7;
// cat3.eyesGetSet = 30;
// cat3.eyesGetSet = 30;
// cat3.eyesGetSet = 30;
// cat3.eyesGetSet = 30;
// cat3.eyesGetSet = 30;
// cat3.eyesGetSet = 30;

// const getterResult2 = cat3.eyesGetSet;
// console.log('getterResult2 > ', getterResult2);

// cat3.sayMeow();
