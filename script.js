hamburger = document.getElementById("hamburger");
hamburger_dropdown = document.getElementById("hamburger-dropdown-id");
dropdown_exit = document.getElementById("dropdown-exit-id");
to_swap = document.getElementById("to-swap");

hamburger.addEventListener("click", ()=>{
    hamburger.classList.toggle("hamburger-active");
    hamburger_dropdown.classList.toggle("active");
});

window.onresize = ()=>{
    if(window.innerWidth > 1000){
        hamburger_dropdown.classList.remove("active");
        hamburger.classList.remove("hamburger-active");
    }
}

dropdown_exit.addEventListener("click", ()=>{
    hamburger.classList.remove("hamburger-active");
    hamburger_dropdown.classList.remove("active");
})