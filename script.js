document.addEventListener("DOMContentLoaded", () => {
    const body = document.body;
    const slides = document.querySelectorAll(".content-container");
    let currentSlideIndex = 0;
    let isScrolling = false;

    window.addEventListener("wheel", (event) => {
        event.preventDefault();
        if (isScrolling) return;
        if (event.deltaY > 0) {
            if (currentSlideIndex < slides.length - 1) currentSlideIndex++;
        } else {
            if (currentSlideIndex > 0) currentSlideIndex--;
        }

        isScrolling = true;
        slides[currentSlideIndex].scrollIntoView({
            behavior: "smooth",
            block: "start"
        });
        setTimeout(() => {
            isScrolling = false;
        }, 800);
    }, { passive: false });
});
