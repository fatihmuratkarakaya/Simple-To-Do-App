const taskInput = document.getElementById('taskInput');
const addTaskBtn = document.getElementById('addTaskBtn');
const taskList = document.getElementById('taskList');
addTaskBtn.addEventListener('click', addTask);
function addTask() {
    const taskText = taskInput.value.trim();

    if (taskText !== '') {
        const taskItem = document.createElement('li');
        taskItem.textContent = taskText;

        taskList.appendChild(taskItem);
        taskInput.value = '';
    }
}
