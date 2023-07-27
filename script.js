// Updated JavaScript

window.onload = function () {
    const cards = document.querySelectorAll(".card");
  
    cards.forEach((card, index) => {
      // Add the slide-in-left class to cards at even index, and slide-in-right class to cards at odd index
      card.classList.add(index % 2 === 0 ? "slide-in-left" : "slide-in-right");
    });
  };
  