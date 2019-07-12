
// menu

const menuHam = document.querySelector("#menu-ham")
const menuMobile = document.querySelector("#menu")

const menuSlader = () =>{

  menuMobile.classList.toggle('menu-slader')
}

menuHam.addEventListener('click', menuSlader)

// Acordeón de preguntas

var acc = document.getElementsByClassName("accordion");
var i;

for (i = 0; i < acc.length; i++) {
  acc[i].addEventListener("click", function() {
    this.classList.toggle("active");
    var panel = this.nextElementSibling;
    if (panel.style.maxHeight){
      panel.style.maxHeight = null;
    } else {
      panel.style.maxHeight = panel.scrollHeight + "px";
    } 
  });
}