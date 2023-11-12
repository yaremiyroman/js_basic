const app = document.getElementById("app");
const locationContainer = document.getElementById("location");
const tasksList = document.createElement("ul");
tasksList.id = "tasks-list";
app.append(tasksList);

function getGeolocation() {
    navigator.geolocation.getCurrentPosition(renderMapsLink);
}

function renderMapsLink(position) {
    if (!position || !position.coords) return;

    const mapsLink = document.createElement("a");
    mapsLink.innerHTML = `My Location`;
    mapsLink.target = `_blank`;
    mapsLink.href = `https://www.google.com/maps/@${position?.coords?.latitude},${position?.coords?.longitude}`;
    mapsLink.id = "my-location";
    locationContainer.append(mapsLink);
}

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
    getGeolocation();
    render();
    renderAddButton();
}

init();
