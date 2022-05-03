<<<<<<< HEAD
let show = true;

const nav_menu = document.querySelector(".nav_menu")
const nav_toggle = document.querySelector(".nav_toggle")


nav_toggle.addEventListener("click", () => {

    document.body.style.overflow = show ? "hidden" : "initial"

    nav_menu.classList.toggle("on", show)
    show = !show;
})

document.querySelectorAll(".nav_toggle_link").forEach(function(link){
    link.addEventListener("click", ()=>{
        document.body.style.overflow = show ? "hidden" : "initial"

        nav_menu.classList.toggle("on", show)
        show = !show;
    })
=======
let show = true;

const nav_menu = document.querySelector(".nav_menu")
const nav_toggle = document.querySelector(".nav_toggle")


nav_toggle.addEventListener("click", () => {

    document.body.style.overflow = show ? "hidden" : "initial"

    nav_menu.classList.toggle("on", show)
    show = !show;
})

document.querySelectorAll(".nav_toggle_link").forEach(function(link){
    link.addEventListener("click", ()=>{
        document.body.style.overflow = show ? "hidden" : "initial"

        nav_menu.classList.toggle("on", show)
        show = !show;
    })
>>>>>>> 2d0c460c8e4c319daf1088e2e9a55e0dd8792049
})