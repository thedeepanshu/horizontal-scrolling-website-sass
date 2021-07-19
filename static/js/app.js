const hamburgers = document.querySelectorAll("#hamburger");
const dropdownMenu = document.querySelector("#dropdown_menu");

hamburgers.forEach((hamburger) => {
  hamburger.addEventListener("click", toggleFunction);
});

dropdownMenu.addEventListener("click", toggleFunction);

function toggleFunction() {
  dropdownMenu.classList.toggle("active");
}
