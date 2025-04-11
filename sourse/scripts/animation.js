document.addEventListener("DOMContentLoaded", function () {
    const animatedElements = document.querySelectorAll(".hidden");

    function revealOnScroll() {
        animatedElements.forEach((el) => {
            const elementTop = el.getBoundingClientRect().top;
            const windowHeight = window.innerHeight;

            if (elementTop < windowHeight - 50) {
                el.classList.add("visible");
            }
        });
    }

    window.addEventListener("scroll", revealOnScroll);
    revealOnScroll(); // Запускаем проверку сразу, чтобы показать элементы в зоне видимости
});

