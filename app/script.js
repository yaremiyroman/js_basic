const app = document.getElementById("app");
const tasksList = document.createElement("ul");
tasksList.id = "tasks-list";
app.append(tasksList);

function addTask(taskText) {
    if (!taskText) return;

    const taskElement = document.createElement("li");
    taskElement.innerHTML = `<span>${taskText}</span>`;
    taskElement.classList.add("task");

    const removeButton = document.createElement("button");
    removeButton.classList.add("remove-task");
    removeButton.innerHTML = "❌";
    removeButton.addEventListener("click", event =>
        event.target.closest(".task").remove()
    );

    taskElement.append(removeButton);

    tasksList.append(taskElement);
}

function removeTask() {
    const taskElement = document.createElement("li");
    taskElement.innerHTML = taskText;
    taskElement.classList.add("task");
    tasksList.append(taskElement);
}

function renderAddButton() {
    const addTaskButton = document.createElement("button");
    addTaskButton.innerHTML = "🔷";
    addTaskButton.id = "add-task";
    addTaskButton.addEventListener("click", () =>
        addTask(prompt("Enter task: "))
    );
    app.append(addTaskButton);
}

function render() {
    while (true) {
        const task = prompt("Enter task: ");
        if (task === null) break;

        addTask(task);
    }
}

function init() {
    render();
    renderAddButton();
}

init();
