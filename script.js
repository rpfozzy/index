// Функция для определения поддержки темной темы в браузере
function isDarkModePreferred() {
    return window.matchMedia && window.matchMedia('(prefers-color-scheme: dark)').matches;
}

// Функция для установки темы
function setTheme() {
    if (isDarkModePreferred()) {
        document.body.classList.add('dark-theme');
    } else {
        document.body.classList.add('light-theme');
    }
}

// Вызываем функцию при загрузке страницы
setTheme();

}

document.addEventListener('DOMContentLoaded', (event) => {
    // Загрузка сохраненных данных из localStorage
    loadTodos();
});

function addTodo() {
    const todoInput = document.getElementById('todoInput');
    const todoList = document.getElementById('todoList');
    
    // Создание нового элемента списка
    const li = document.createElement('li');
    li.textContent = todoInput.value;
    todoList.appendChild(li);
    
    // Сохранение списка дел
    saveTodos();

    // Очистка поля ввода
    todoInput.value = '';
}

function saveTodos() {
    const todoList = document.getElementById('todoList');
    const todos = [];
    
    // Получение всех дел из списка
    for (let i = 0; i < todoList.children.length; i++) {
        todos.push(todoList.children[i].textContent);
    }
    
    // Сохранение дел в localStorage
    localStorage.setItem('todos', JSON.stringify(todos));
}

function loadTodos() {
    const todoList = document.getElementById('todoList');
    const todos = JSON.parse(localStorage.getItem('todos'));
    
    if (todos) {
        // Очистка текущего списка
        todoList.innerHTML = '';
        
        // Добавление дел в список
        for (const todo of todos) {
            const li = document.createElement('li');
            li.textContent = todo;
            todoList.appendChild(li);
        }
    }
}