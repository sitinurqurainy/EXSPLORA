const menuToggle = document.getElementById("menuToggle");
const mainNav = document.getElementById("mainNav");

menuToggle.addEventListener("click", () => {
  const isOpen = mainNav.classList.toggle("open");
  menuToggle.setAttribute("aria-expanded", String(isOpen));
  menuToggle.setAttribute("aria-label", isOpen ? "Tutup menu" : "Buka menu");
});

mainNav.querySelectorAll("a").forEach((link) => {
  link.addEventListener("click", () => {
    mainNav.classList.remove("open");
    menuToggle.setAttribute("aria-expanded", "false");
    menuToggle.setAttribute("aria-label", "Buka menu");
  });
});

const activitySearch = document.getElementById("activitySearch");
const activityCards = [...document.querySelectorAll(".activity-card")];
const emptyState = document.getElementById("emptyState");

activitySearch.addEventListener("input", () => {
  const query = activitySearch.value.trim().toLowerCase();
  let visibleCount = 0;

  activityCards.forEach((card) => {
    const searchableText = `${card.dataset.name} ${card.innerText}`.toLowerCase();
    const matches = searchableText.includes(query);
    card.hidden = !matches;
    if (matches) visibleCount++;
  });

  emptyState.hidden = visibleCount !== 0;
});

document.getElementById("year").textContent = new Date().getFullYear();
