function renderListItem(task) {
    const listElement = document.getElementById("list");
    const taskElement = document.createElement("li");
    taskElement.innerHTML = `<span>${task}</span>`;
    listElement.appendChild(taskElement);

    const deleteButton = document.createElement("button");
    deleteButton.innerHTML = "❌";
    taskElement.append(deleteButton);

    deleteButton.addEventListener("click", event => {
        event.target.closest("li").remove();
    });
}

function init() {
    const appElement = document.getElementById("app");
    let tasks = [];

    const listElement = document.createElement("ul");
    listElement.id = "list";
    appElement.append(listElement);

    if (localStorage.getItem("tasks")) {
        tasks = localStorage.getItem("tasks").split(",");
    } else {
        while (true) {
            const task = prompt("Enter your task: ");
            if (task === null) break;
            if (!!task) {
                tasks.push(task);
            }
        }

        localStorage.setItem("tasks", tasks);
    }

    tasks.forEach(task => {
        renderListItem(task);
    });

    const addButton = document.createElement("button");
    addButton.innerHTML = "✚";
    appElement.append(addButton);

    addButton.addEventListener("click", () => {
        const task = prompt("Enter your task: ");
        console.log('task > ', task);
        const tasks = localStorage.getItem("tasks").split(",");
        tasks.push(task);
        localStorage.setItem("tasks", tasks);
        renderListItem(task);
    });
}

init();
