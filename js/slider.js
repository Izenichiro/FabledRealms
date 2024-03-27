const slides = document.querySelectorAll('.slide');
const prevButton = document.querySelector('.prev-button');
const nextButton = document.querySelector('.next-button');

let currentSlide = 0;

function showSlide(index) {
  slides.forEach((slide) => {
    slide.style.display = 'none';
  });

  slides[index].style.display = 'block';
}

function showNextSlide() {
  currentSlide++;
  if (currentSlide >= slides.length) {
    currentSlide = 0;
  }
  showSlide(currentSlide);
}

function showPrevSlide() {
  currentSlide--;
  if (currentSlide < 0) {
    currentSlide = slides.length - 1;
  }
  showSlide(currentSlide);
}

showSlide(currentSlide);
setInterval(showNextSlide, 10000); //скорость переключения

prevButton.addEventListener('click', showPrevSlide);
nextButton.addEventListener('click', showNextSlide);
