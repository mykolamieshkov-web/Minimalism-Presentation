// JavaScript код для счетчика скроллов и обновления номера слайда

// Функция для добавления нуля перед однозначными числами
function addLeadingZero(number) {
   return number < 10 ? '0' + number : number;
}

// Функция для обновления номера слайда и текста в контейнере
function updateSlideNumber() {
   const slideNumber = Math.ceil(wrapper.scrollTop / window.innerHeight) + 1;
   counterContainer.textContent = addLeadingZero(slideNumber);
}

// Инициализация контейнера и контейнера для счетчика
const wrapper = document.querySelector('.wrapper');
const counterContainer = document.querySelector('.counter-container');

// Обработчик события прокрутки контейнера
function handleScroll() {
   updateSlideNumber();
}

// Обработчик события клика на контейнер (для сброса счетчика)
counterContainer.addEventListener('click', function() {
   resetAndRenderCounter();
   updateSlideNumber();
});

// Обработчик события прокрутки контейнера
wrapper.addEventListener('scroll', handleScroll);

// Вызываем обновление номера слайда при загрузке страницы
updateSlideNumber();
