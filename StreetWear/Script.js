$('.navTrigger').click(function () {
    $(this).toggleClass('active');
    console.log("Clicked menu");
    $("#mainListDiv").toggleClass("show_list");
    $("#mainListDiv").fadeIn();

});


//Não mexer!!!!!!!


const carousel = document.querySelector('.carousel');
const cards = document.querySelectorAll('.card');
const cardWidth = cards[0].offsetWidth;
const prevButton = document.querySelector('.prev-btn');
const nextButton = document.querySelector('.next-btn');

let currentPosition = 0;

prevButton.addEventListener('click', () => {
  if (currentPosition > 0) {
    currentPosition--;
    updateCarousel();
  }
});

nextButton.addEventListener('click', () => {
  if (currentPosition < cards.length - 1) {
    currentPosition++;
    updateCarousel();
  }
});

function updateCarousel() {
  const translateXValue = -currentPosition * cardWidth;
  carousel.style.transform = `translateX(${translateXValue}px)`;
}

// Inicializar o carrossel
updateCarousel();
