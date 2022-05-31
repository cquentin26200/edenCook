const activeMenuBurger = document.querySelector(".activeMenuBurger");
const span = document.querySelectorAll("span");
const menuBurger = document.querySelector(".menuBurgerHeader");


activeMenuBurger.addEventListener("click", () => {
  for (let spans of span) {
    if (spans.classList.contains("before")) {
      spans.classList.toggle("rotateBefore");
    } else if (spans.classList.contains("after")) {
      spans.classList.toggle("rotateAfter");
    } else {
      spans.classList.toggle("rotateMiddle");
    }
  }
  menuBurger.classList.toggle("menuBurgerShow");
})