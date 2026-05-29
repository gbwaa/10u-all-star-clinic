(function () {
  function shuffle(items) {
    for (let index = items.length - 1; index > 0; index -= 1) {
      const swapIndex = Math.floor(Math.random() * (index + 1));
      [items[index], items[swapIndex]] = [items[swapIndex], items[index]];
    }

    return items;
  }

  function hasComingSoonBio(card) {
    return card.textContent.toLowerCase().includes("bio coming soon");
  }

  function randomizeStaffCards() {
    const staffGrid = document.querySelector("[data-randomize-staff]");

    if (!staffGrid) {
      return;
    }

    const staffCards = Array.from(staffGrid.querySelectorAll(".staff-card"));
    const completedBios = staffCards.filter((card) => !hasComingSoonBio(card));
    const comingSoonBios = staffCards.filter(hasComingSoonBio);

    [...shuffle(completedBios), ...shuffle(comingSoonBios)].forEach((card) => {
      staffGrid.appendChild(card);
    });
  }

  randomizeStaffCards();
})();
