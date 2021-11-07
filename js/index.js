//js para o botão 
const btnMobile = window.document.getElementById('btn-mobile');

function toggleMenu(event) {
    if (event.type === 'touchstart') event.preventDefault()
    const nav = window.document.getElementById('nav');
    nav.classList.toggle('active');
}

btnMobile.addEventListener('click', toggleMenu);
btnMobile.addEventListener('touchstart', toggleMenu);


// Contador para algo - ver de que
var counter = 1;

setInterval(function(){
    window.document.getElementById('radio' + counter).checked = true;
    counter++;
    if(counter > 4){
        counter = 1; 
    }
}, 5000);


// js para o accordion
const accordion = window.document.getElementsByClassName('contentBx');

for (i = 0; i<accordion.length; i++){
    accordion[i].addEventListener('click', function(){
        this.classList.toggle('active')
    });
}