document.addEventListener("DOMContentLoaded", () => {
    const body = document.body;
    const slides = document.querySelectorAll(".content-container");
    let currentSlideIndex = 0;
    let isScrolling = false;

    window.addEventListener("wheel", (event) => {
        // Блокируем стандартный резкий прыжок браузера
        event.preventDefault();

        // Если анимация уже идет, игнорируем повторные скроллы
        if (isScrolling) return;

        // Определяем направление движения мыши
        if (event.deltaY > 0) {
            // Скролл вниз
            if (currentSlideIndex < slides.length - 1) currentSlideIndex++;
        } else {
            // Скролл вверх
            if (currentSlideIndex > 0) currentSlideIndex--;
        }

        isScrolling = true;

        // Плавно катим к нужному слайду
        slides[currentSlideIndex].scrollIntoView({
            behavior: "smooth",
            block: "start"
        });

        // Таймаут, чтобы дать анимации завершиться перед следующим скроллом
        setTimeout(() => {
            isScrolling = false;
        }, 800); // 800мс — время плавного хода
    }, { passive: false }); // passive: false обязателен для блокировки дефолтного скролла
});
