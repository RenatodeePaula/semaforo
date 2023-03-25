const body = document.querySelector('body');
const buttonAuto = document.querySelector('.auto');
const buttonVermelho = document.querySelector('.vermelho');
const buttonAmarelo = document.querySelector('.amarelo');
const buttonVerde = document.querySelector('.verde');
let stop = ''
buttonAuto.addEventListener('click', auto); 
buttonVermelho.addEventListener('click',verm);
buttonAmarelo.addEventListener('click', amar);
buttonVerde.addEventListener('click', verd);

function verm() {  
    clearInterval(stop)   
    body.style.background = "red";
}

function amar() {
    clearInterval(stop)         
    body.style.background = "yellow";
}

function verd() { 
    clearInterval(stop)   
    body.style.background = "green";
}

function auto(){
    clearInterval(stop)   
    stop = setInterval(() => {
    if (body.style.background == 'red') {
        body.style.background = 'yellow'               
    } else if (body.style.background == 'yellow'){
        body.style.background = 'green'   
    } else {
        body.style.background = 'red'   
    }  
  
}
, 550) 
} 







