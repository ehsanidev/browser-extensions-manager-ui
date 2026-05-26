const toggleSwitch = document.querySelector(".theme-toggle");

toggleSwitch.addEventListener("click", handleThemeToggle);

window.onload = loadSavedTheme;

function handleThemeToggle() {
  const body = document.body;
  const lightStyle = document.getElementById("theme-style");
  const sunIcon = document.querySelector(".sun-icon");
  const moonIcon = document.querySelector(".moon-icon");

  if (body.classList.contains("dark-mode")) {
    body.classList.replace("dark-mode", "light-mode");
    lightStyle.disabled = false;
    localStorage.setItem("theme", "light");

    moonIcon.style.display = "flex";
    sunIcon.style.display = "none";
  } else {
    body.classList.replace("light-mode", "dark-mode");
    localStorage.setItem("theme", "dark");
    lightStyle.disabled = true;

    sunIcon.style.display = "flex";
    moonIcon.style.display = "none";
  }
}

function loadSavedTheme() {
  const savedTheme = localStorage.getItem("theme") || "dark";
  const lightStyle = document.getElementById("theme-style");

  document.body.classList.add(`${savedTheme}-mode`);
  lightStyle.disabled = savedTheme !== "light";
}