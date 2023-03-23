const body = document.querySelector('body');
const buttonAuto = document.querySelector('.auto');
const buttonVermelho = document.querySelector('.vermelho');
const buttonAmarelo = document.querySelector('.amarelo');
const buttonVerde = document.querySelector('.verde');

// buttonAuto.addEventListener('click', gutu); 
buttonVermelho.addEventListener('click',verm);
buttonAmarelo.addEventListener('click', amar);
buttonVerde.addEventListener('click', verd);

function verm(a) {  
    clearInterval(a)
    body.style.background = "red";
}

function amar() {    
    body.style.background = "yellow";
}

function verd() {    
    body.style.background = "green";
}

function gutu(){
    setInterval(() => {
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



