const menu = document.querySelector(".menu-hamburguer");
const botao = document.querySelector(".hamburger");

botao.addEventListener("click", function() {
    if (menu.style.display == '' || menu.style.display == 'none') {
        menu.style.display = 'block'
    } else {
        menu.style.display = 'none'
    }
});