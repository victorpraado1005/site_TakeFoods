let show = true;

const nav_menu = document.querySelector(".nav_menu")
const nav_toggle = document.querySelector(".nav_toggle")

nav_toggle.addEventListener("click", () => {

    document.body.style.overflow = show ? "hidden" : "initial"

    nav_menu.classList.toggle("on", show)
    show = !show;
})