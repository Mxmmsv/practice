/*
	Дан список задач
	const tasks = ['Задача 1'];
	Сделать функции:
	- Добавление задачи в конец
	- Удаление задачи по названию
	- Перенос задачи в начало списка по названию 
	Всегда меняем исходный массив

    DRY
    DO NOT REPEAT YOURSELF
*/

let tasks = ['Задача 1'];
let newTask = prompt('Введите название вашей задачи. Например, Задача 2');
let removeTask = prompt('Введите название вашей задачи, которую необходимо удалить. Например, Задача 3');
let moveTask = prompt('Введите название вашей задачи, которую необходимо перенести в начало. Например, Задача 4');


function addTaskToEnd (tasks, newTask) {
	tasks.push(newTask);
}

function removeTaskFromArray(tasks, removeTask) {
    let index = tasks.indexOf(removeTask);
    if (index !== -1) {
        tasks.splice(index, 1);
        console.log("Задача удалена успешно.");
    } else {
        console.log("Задача не найдена.");
    }
}

function moveTaskToStart(tasks, moveTask) {
    let index = tasks.indexOf(moveTask);
    if (index !== -1) {
        tasks.splice(index, 1);
        tasks.unshift(moveTask);
        console.log("Задача перемещена успешно.");
    } else {
        console.log("Задача не найдена.");
    }
}

console.log("Исходный массив задач:", tasks);

if (newTask !== null) {
    addTaskToEnd(tasks, newTask);
    console.log("Массив задач после добавления:", tasks);
}

if (removeTask !== null) {
    removeTaskFromArray(tasks, removeTask);
    console.log("Массив задач после удаления:", tasks);
}

if (moveTask !== null) {
    moveTaskToStart(tasks, moveTask);
    console.log("Массив задач после перемещения:", tasks);
}