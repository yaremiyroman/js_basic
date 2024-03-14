// const myInput = document.getElementById('my-input');
// // console.log('myInput > ', myInput);

// myInput.addEventListener('focus', function(event) {
//     // console.log('focus > ');
//     event.target.style.background = 'green';
// });

// myInput.addEventListener('blur', function() {
//     // console.log('blur > ');
//     event.target.style.background = 'transparent';
// });

// // myInput.addEventListener('input', function(event) {
//     // console.log('input > ', event.target.value);
//     // const currentValue = event.target.value;
//     // if (currentValue.length > 5) {
//     //     event.target.value = event.target.value.slice(0, 4);
//     // }
// // });

// myInput.addEventListener('change', function(event) {
//     // console.log('change > ', event.target.value);
// });

// const myForm = document.getElementById('my-form');
// console.log('myForm > ', myForm);

// myForm.addEventListener('submit', function(event) {
//     console.log('submit > ', event.target['text-field'].value);

//     const myData = new FormData(event.target);

//     for (let keyValue of myData) {
//         console.log('keyValue > ', keyValue);
//     }

//     event.preventDefault();
// });

// myForm.addEventListener('submit', function(event) {
//     console.log('submit > ', event.target['text-field'].value);
//     console.log('submit > ', event.target['text-field-2'].value);

//     const text1 = event.target['text-field'].value;
//     const text2 = event.target['text-field-2'].value;

//     if (text1.length === 0 || text2.length === 0) {
//         console.log('Текст порожній');
//         event.preventDefault();
//     }
// });

// window.setTimeout(
//     function() {
//         alert ('!');
//     },
//     5000
// );

// window.setInterval(
//     function() {
//         console.log('Interval');
//     },
//     1000
// );

// window.setTimeout(
//     function() {
//         open('https://www.google.com');
//     },
//     5000
// );

// CRUD
// create
// read
// update
// delete

// window.localStorage.setItem('testStorage', 'value');

// localStorage.setItem('testStorage2', 'value2');

// // console.log('value > ', value);

// // if (!localStorage.getItem('testStorageError')) {
//     //     console.log('ERROR');
//     // }

// let value = null;

// if (value = localStorage.getItem('testStorage2')) {
//     console.log('value > ', value);
// }

// localStorage.removeItem('testStorage2');

// localStorage.clear();

// // const value2 = localStorage.getItem('testStorageError');
// // console.log('value2 > ', value2);

// localStorage.setItem('testStorage', 'value');
// localStorage.setItem('numberStorage', 444);

// const myNumber = localStorage.getItem('numberStorage');
// console.log('myNumber > ', +myNumber);

// const myTestArray = ['some record', 'another record', 'third record'];
// console.log('myTestArray > ', myTestArray);

// localStorage.setItem('arrayStorage', myTestArray);

// const readMyArray = localStorage.getItem('arrayStorage');
// console.log('readMyArray > ', readMyArray.split(','));

// const myTestArray = ['some record', 'another record', 'third record'];
// console.log('myTestArray > ', myTestArray);

// const testString = '123123';
// const testNumber = 123123;

// localStorage.setItem('arrayStorage', JSON.stringify(testNumber));

// const readMyArray = JSON.parse(localStorage.getItem('arrayStorage'));
// console.log('readMyArray > ', readMyArray);

// function showUserName(userName) {
//     alert('user name: ' + userName);
// }

// let stateName = null;

// if (localStorage.getItem('userName')) {
//     stateName = localStorage.getItem('userName');
// }

// function getData() {
//     return data; // ['asfsdf', 'asdfsaf']
// }

// function makeLi(dataArray) {

//     for () {
//         <div>dataArray[i]</div>
//     }
//     // <li></li>
// }

// if (stateName !== null) {
//     showUserName(stateName);
// } else {
//     localStorage.setItem('userName', prompt('Say your user name: '));
//     showUserName(localStorage.getItem('userName'));
// }



const storageName = 'tasks';

function collectTasks() {
    const tasks = [];

    while (true) {
        const task = prompt("Введіть ваш таск");
        if (task === null) break;
        tasks.push(task);
    }

    console.log('tasks > ', tasks);

    localStorage.setItem(storageName, JSON.stringify(tasks));

    return tasks;
}

function handleAddTask(list) {
    const task = prompt("Введіть ваш таск");
    addListItem(task, list);
}

function addListItem(task, listContainer) {
    const listItem = document.createElement("li");
    listItem.textContent = task;

    const removeButton = document.createElement("button");
    removeButton.textContent = '❌';
    removeButton.addEventListener('click', function(event) {
        console.log(event.target);
        event.target.closest("li").remove();
    });

    listItem.append(removeButton);
    listContainer.append(listItem);
}

function render(tasks) {
    const list = document.createElement("ul");
    // list.id = 'task-list';

    tasks.forEach(task => {
        addListItem(task, list);
    });

    document.body.prepend(list);

    const addButton = document.createElement('button');
    addButton.textContent = '+';
    addButton.id = 'add-button';

    document.body.append(addButton);

    addButton.addEventListener('click', function() {
        return handleAddTask(list);
    });

    // addButton.addEventListener('click', () => handleAddTask(list));
}

function init() {
    if (localStorage.getItem(storageName)) {
        const storageData = JSON.parse(localStorage.getItem(storageName));
        render(storageData);
    } else {
        render(collectTasks());
    }
}

init();
