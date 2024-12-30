const slides = document.querySelector('.slides');
const slide = document.querySelectorAll('.slide');
const prev = document.querySelector('.prev');
const next = document.querySelector('.next');

let index = 0;

function showSlide(n) {
  if (n >= slide.length) index = 0;
  if (n < 0) index = slide.length - 1;

  slides.style.transform = `translateX(${-index * 100}%)`;
}

next.addEventListener('click', () => {
  index++;
  showSlide(index);
});

prev.addEventListener('click', () => {
  index--;
  showSlide(index);
});

setInterval(() => {
  index++;
  showSlide(index);
}, 5000);
