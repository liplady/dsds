document.addEventListener('DOMContentLoaded', function() {
    // Кнопка "Вверх"
    const scrollTopBtn = document.querySelector('.scroll-top-btn');

    // Функция для отображения/скрытия кнопки
    function trackScroll() {
        const scrolled = window.pageYOffset;
        const coords = document.documentElement.clientHeight;

        if (scrolled > coords) {
            scrollTopBtn.style.display = 'block';
        } else {
            scrollTopBtn.style.display = 'none';
        }
    }

    // Функция для плавного возврата наверх страницы
    function backToTop() {
        if (window.pageYOffset > 0) {
            window.scrollTo({top: 0, behavior: 'smooth'});
        }
    }

    // Обработчики событий
    window.addEventListener('scroll', trackScroll);
    scrollTopBtn.addEventListener('click', backToTop);
});
