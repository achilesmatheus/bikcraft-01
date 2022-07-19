const btnDarkModeToggle = document.querySelector(".btn-dark-light");
const htmlTag = document.documentElement;

const themeModes = ["Claro", "Escuro"];

function handleToggle(event) {
  const btnToggle = event.currentTarget;
  const isThemeLight = btnToggle.dataset.theme === "Claro";
  btnToggle.classList.toggle("dark");
  htmlTag.classList.toggle("dark");

  // "+" Convert boolean to number
  btnToggle.dataset.theme = themeModes[+isThemeLight];
}

btnDarkModeToggle.addEventListener("click", handleToggle);
