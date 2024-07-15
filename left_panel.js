 // Логика для левой панели
const panelButton = document.getElementById('panel-button');
const modal = document.getElementById('modal');
const modalIframe = document.getElementById('modal-iframe');
  var span8 = document.getElementsByClassName("close9")[0];
let isModalOpen = false; // Переменная для отслеживания состояния модального окна

panelButton.addEventListener('click', () => {
  if (isModalOpen) {
    closeModal();
  } else {
    openModal();
  }
});

modal.addEventListener('click', closeModal);

modalIframe.addEventListener('click', (event) => {
  event.stopPropagation();
});

function openModal() {
  modal.style.display = 'flex';
  modalIframe.src = 'https://rpfozzy.github.io/Totem/'; // Замените на URL сайта, который вы хотите отображать
  isModalOpen = true; // Установить состояние модального окна на открыто
  document.body.classList.add('neon-background'); // Добавить неоновый фон
}

function closeModal() {
  modal.style.display = 'none'; // Закрыть модальное окно
  isModalOpen = false; // Установить состояние модального окна на закрыто
  document.body.classList.remove('neon-background'); // Убрать неоновый фон
}