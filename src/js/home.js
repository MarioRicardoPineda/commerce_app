
// menu

const menuHam = document.querySelector("#menu-ham")
const menuMobile = document.querySelector("#menu")

const menuSlader = () =>{

  menuMobile.classList.toggle('menu-slader')
}

menuHam.addEventListener('click', menuSlader)

// Acordeón de preguntas

let answer = Array.prototype.slice.apply(document.querySelectorAll(".question"))


for (let i in answer) {

  answer[i].addEventListener("click", () =>{

    var panel = this.nextElementSibling;
    
    if (panel.classList.contains('ans')) {
      panel.classList.remove('ans')
    } else {
      panel.classList.add('ans')
    }
  });
}
