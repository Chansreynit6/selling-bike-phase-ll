const slider = document.querySelector('.slider');
const cards = document.querySelectorAll('.card');

let currentIndex = 0;
const cardWidth = cards[0].offsetWidth;

function slideNext() {
  currentIndex = (currentIndex + 1) % cards.length;
  updateSliderPosition();
}

function slidePrevious() {
  currentIndex = (currentIndex - 1 + cards.length) % cards.length;
  updateSliderPosition();
}

function updateSliderPosition() {
  const offset = -currentIndex * cardWidth;
  slider.style.transform = translateX(${offset});
}
document.querySelector('.next-btn').addEventListener('click', slideNext);
document.querySelector('.prev-btn').addEventListener('click', slidePrevious);