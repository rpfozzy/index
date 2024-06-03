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