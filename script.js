// Получаем ссылки на элементы навигации
const navLinks = document.querySelectorAll('nav a');
// Получаем элементы блоков с работами и информацией обо мне
const worksBlock = document.querySelector('#works');
const aboutBlock = document.querySelector('#about');

// Назначаем события наведения на элементы навигации
navLinks.forEach(function(navLink) {
  navLink.addEventListener('mouseenter', function() {
    // Увеличиваем размер текста элемента навигации

});

});

// Назначаем событие клика на ссылку "Работы"
const worksLink = document.querySelector('nav a[href="#works"]');
worksLink.addEventListener('click', function(event) {
// Отменяем стандартное поведение ссылки
event.preventDefault();
// Плавно прокручиваем страницу к блоку с работами
worksBlock.scrollIntoView({ behavior: 'smooth' });
});

// Назначаем событие клика на ссылку "Обо мне"
const aboutLink = document.querySelector('nav a[href="#about"]');
aboutLink.addEventListener('click', function(event) {
// Отменяем стандартное поведение ссылки
event.preventDefault();
// Плавно прокручиваем страницу к блоку с информацией обо мне
aboutBlock.scrollIntoView({ behavior: 'smooth' });
});

