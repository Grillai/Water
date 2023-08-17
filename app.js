const hamburger = document.querySelector(".hamburger");
const navLinks = document.querySelector(".nav-links");

hamburger.addEventListener("click", () => {
    navLinks.classList.toggle("active");
});



const images = document.querySelectorAll('.carousel-image');
  const secondImages = document.querySelectorAll('.second-carousel-image');
  const secondCarouselText = document.querySelector('.second-carousel-text');
  const dots = document.querySelectorAll('.dot');
  let currentImageIndex = 0;

  const texts = [
    "Lasciati ispirare dall'oceano,  resta idratato con stile.",
    "Sali in cima, con la nostra borraccia smart.",
    "Caldo estremo, idratazione intelligente."
  ];

  function showImage(index) {
    images.forEach(image => image.style.display = 'none');
    secondImages.forEach(image => image.style.display = 'none');
    
    images[index].style.display = 'block';
    secondImages[index].style.display = 'block';
    currentImageIndex = index;
    
    secondCarouselText.textContent = texts[index];  // Aggiunge il testo al secondo carosello

    dots.forEach((dot, dotIndex) => {
      if (dotIndex === index) {
        dot.style.backgroundColor = 'black';
      } else {
        dot.style.backgroundColor = 'LightGray';
      }
    });
  }

  dots.forEach((dot, index) => {
    dot.addEventListener('click', () => {
      showImage(index);
    });
  });

  showImage(currentImageIndex);