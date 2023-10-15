const navToggle = document.querySelector('.nav-toggle');
const nav = document.querySelector('.mobile-nav');
const navBar = document.querySelector('.nav-container')



navToggle.addEventListener('click', () => {
    nav.classList.toggle('nav--visible');
})

document.onclick = function(e){
    if(!navBar.contains(e.target)){
        nav.classList.remove('nav--visible');
    }
}