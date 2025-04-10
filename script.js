// Mostrar nombre Glowfast7 al iniciar y luego mostrar la página
window.addEventListener("load", () => {
  document.body.classList.remove("preload");
  document.body.classList.add("loaded");
});

// Filtrar productos por categoría
function filterProducts(category) {
  const allCards = document.querySelectorAll(".product");
  allCards.forEach(card => {
    if (category === "todo" || card.dataset.category === category) {
      card.style.display = "block";
    } else {
      card.style.display = "none";
    }
  });
}

// Botones de categoría
document.addEventListener("DOMContentLoaded", () => {
  const categoryButtons = document.querySelectorAll(".category-btn");
  categoryButtons.forEach(btn => {
    btn.addEventListener("click", (e) => {
      e.preventDefault();
      const category = btn.getAttribute("data-category");
      filterProducts(category);
    });
  });
});

