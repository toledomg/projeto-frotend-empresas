export function showMenu() {
  const menu = document.querySelector("#menu");
  const nav = document.querySelector(".menu__login");

  menu.addEventListener("click", (event) => {
    if (nav.style.display == "block") {
      nav.style.display = "none";
      menu.innerHTML = "menu";
    } else {
      nav.style.display = "block";
      menu.innerHTML = "close";
    }
  });
}
