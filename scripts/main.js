document.addEventListener("DOMContentLoaded", function () {
  const allBtn = document.querySelector(".filter-all");
  const activeBtn = document.querySelector(".filter-active");
  const inactiveBtn = document.querySelector(".filter-inactive");
  const buttons = document.querySelectorAll(".filter-buttons .btn");
  const activeCards = document.querySelectorAll(".active-card");
  const inactiveCards = document.querySelectorAll(".inactive-card");
  const toggleBtns = document.querySelectorAll(".toggle-label");
  const allCards = document.querySelectorAll(".card");
  const removeBtn = document.querySelectorAll(".remove-btn");

  setupFilterButtons(buttons);

  setupRemoveButtons(removeBtn);

  setupCardFilters(allBtn, activeBtn, inactiveBtn, activeCards, inactiveCards, allCards);

  setupToggleButtons(toggleBtns);
});

function setupFilterButtons(buttons) {
  buttons.forEach(function (button) {
    button.addEventListener("click", function () {
      buttons.forEach(function (btn) {
        btn.classList.remove("active-tab");
      });
      this.classList.add("active-tab");
    });
  });
}

function setupRemoveButtons(removeBtn) {
  removeBtn.forEach(function (btn) {
    btn.addEventListener("click", function () {
      const card = btn.closest(".card");
      if (card) card.remove();
    });
  });
}

function setupCardFilters(allBtn, activeBtn, inactiveBtn, activeCards, inactiveCards, allCards) {
  function showAllCards() {
    activeCards.forEach(card => card.style.display = "block");
    inactiveCards.forEach(card => card.style.display = "block");
  }

  function filterCards(className) {
    allCards.forEach(function (card) {
      card.style.display = card.classList.contains(className) ? "block" : "none";
    });
  }

  allBtn.addEventListener("click", showAllCards);
  activeBtn.addEventListener("click", function () { filterCards("active-card"); });
  inactiveBtn.addEventListener("click", function () { filterCards("inactive-card"); });
}

function setupToggleButtons(toggleBtns) {
  toggleBtns.forEach(function (btn) {
    btn.addEventListener("click", function () {
      const card = btn.closest(".card");
      if (!card) return;

      if (btn.classList.contains("on")) {
        btn.classList.replace("on", "off");
        card.classList.replace("active-card", "inactive-card");
      } else {
        btn.classList.replace("off", "on");
        card.classList.replace("inactive-card", "active-card");
      }
    });
  });
}