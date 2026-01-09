let menu = document.querySelector('#menu-icon');
let navbar = document.querySelector('.navbar');



function addClass(){
    menu.classList.toggle('bx-x');
    navbar.classList.toggle('active')
}

menu.addEventListener('click', addClass)