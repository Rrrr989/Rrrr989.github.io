const btn = document.querySelector(".btn-header");
const nav = document.querySelector(".nav");

btn.addEventListener("click", ()=>{
    nav.classList.toggle("menu-open");
});