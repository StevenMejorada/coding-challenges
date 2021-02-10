const toggle= document.getElementById("toggle");
const open= document.getElementById("open");
const close= document.getElementById("close");
const modal= document.getElementById("modal");
const body = document.querySelector("body");


// Event listeners
toggle.addEventListener("click",()=>{
  body.classList.toggle("show-nav");
  console.log(body);
})

open.addEventListener("click",()=>{
  modal.classList.add("show-modal");
})

close.addEventListener("click", e=>{
  modal.classList.remove("show-modal");
})

window.addEventListener("click", e=>{
  if(e.target==modal){
    modal.classList.remove("show-modal");
  }
})