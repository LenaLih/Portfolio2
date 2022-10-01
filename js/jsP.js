//burger
const bMenu = document.querySelector(".menu__b");
if (bMenu) {
   const bodyMenu = document.querySelector(".menu__body");
   bMenu.addEventListener("click", function name(e) {
      document.body.classList.toggle("_lock");
      bMenu.classList.toggle("_active");
      bodyMenu.classList.toggle("_active");
   })
}