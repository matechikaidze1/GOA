document.addEventListener("DOMContentLoaded", () => {
    const cards = Array.from(document.querySelectorAll(".card"));
    const filterBtn = document.getElementById("filterBtn");
    const sortAsc = document.getElementById("sortAsc");
    const sortDesc = document.getElementById("sortDesc");
    const sortRandom = document.getElementById("sortRandom");
  
    const getAverageRating = () => {
      const ratings = cards.map(card => parseFloat(card.dataset.rating));
      return ratings.reduce((acc, rating) => acc + rating, 0) / ratings.length;
    };
  
    filterBtn.addEventListener("click", () => {
      const averageRating = getAverageRating();
      cards.forEach(card => {
        const rating = parseFloat(card.dataset.rating);
        card.classList.toggle("hidden", rating < averageRating);
      });
    });
  
    const sortCards = (compareFn) => {
      const container = document.getElementById("cardContainer");
      const sortedCards = [...cards].sort(compareFn);
      container.innerHTML = "";
      sortedCards.forEach(card => container.appendChild(card));
    };
  
    sortAsc.addEventListener("click", () => {
      sortCards((a, b) => parseFloat(a.dataset.rating) - parseFloat(b.dataset.rating));
    });
  
    sortDesc.addEventListener("click", () => {
      sortCards((a, b) => parseFloat(b.dataset.rating) - parseFloat(a.dataset.rating));
    });
  
    sortRandom.addEventListener("click", () => {
      sortCards(() => Math.random() - 0.5);
    });
  });
  