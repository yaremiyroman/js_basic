// Вам необхідно написати додаток Todo list, використовуючи синтаксис класів. У списку нотаток повинні бути методи для додавання нової нотатки, видалення, редагування та отримання повної інформації про нотатку, а так само отримання списку всіх нотаток. Крім цього, у користувача має бути можливість позначити замітку, як виконану, і отримання інформації про те, скільки всього нотаток у списку і скільки залишилося невиконань. Нотатки не повинні бути порожніми.

// Вам необхідно розширити можливості вашого списку і додати методи для пошуку замітки на ім'я, а також методи для сортування нотаток за статусом (спочатку виконані і навпаки).

// Вам необхідно додати кожній нотатці дату її створення і редагування, а також розширити можливості пошуку і сортування, включивши в них можливість роботи з датою.

class Todo {
    constructor(task) {
        this.task = task;
        this.status = false;
    }
}

class TodoList {
    constructor(taskList) {
        this._taskList = taskList;
    }

    get taskList() {
        this._taskList.forEach(({ task, status }, i) => {
            console.log(`%c#${i + 1}: ${task}`, `color: ${!status ? 'red' : 'green'}`);
        });

        return this._taskList.map(({ task, status }, i) => ({
            index: i + 1,
            text: task,
            status
        }));
    }

    set taskList(taskList) {
        this._taskList = taskList;
    }

    addTask(task) {
        this.taskList = [...this._taskList, task];
    }

    deleteTask(index) {
        if (index >= 0 && index < this._taskList.length) {
            this.taskList = this._taskList.slice(0, index).concat(this._taskList.slice(index + 1));
        }
    }

    setTaskDone(index) {
        if (index >= 0 && index < this._taskList.length) {
            this._taskList[index].status = true;
        }
    }
}


const todos = [];

while (true) {
    const todoText = prompt('Enter task:');

    if (todoText === null) break;

    const newTask = new Todo(todoText);
    todos.push(newTask);
}

const APP = new TodoList(todos);

APP.taskList