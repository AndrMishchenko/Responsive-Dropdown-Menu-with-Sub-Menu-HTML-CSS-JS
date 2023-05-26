let btn = document.querySelector('.menuToggle');

let header = document.querySelector('header');
btn.onclick = function(){
    header.classList.toggle('active')
}
