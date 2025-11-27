document.addEventListener('DOMContentLoaded', function () {
        const slides = document.querySelectorAll('.reviews-slider .slide');
        const prevBtn = document.querySelector('.slider-prev');
        const nextBtn = document.querySelector('.slider-next');
        let currentSlide = 0;
        showSlide(currentSlide);
        nextBtn.addEventListener('click', function () {
            currentSlide++;
            if (currentSlide >= slides.length) {
                currentSlide = 0;
            }
            showSlide(currentSlide);
        });
        prevBtn.addEventListener('click', function () {
            currentSlide--;
            if (currentSlide < 0) {
                currentSlide = slides.length - 1;
            }
            showSlide(currentSlide);
        });
        function showSlide(index) {
            slides.forEach(function (slide, i) {
                slide.classList.toggle('active', i === index);
            });
        }
    });