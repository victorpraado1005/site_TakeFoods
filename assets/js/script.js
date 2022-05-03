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
        if(getComputedStyle(nav_toggle).display !== "none"){
            document.body.style.overflow = show ? "hidden" : "initial"

            nav_menu.classList.toggle("on", show)
            show = !show;
        }
    })
})