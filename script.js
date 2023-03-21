const body = document.querySelector('body');
const buttonAuto = document.querySelector('.auto');
const buttonVermelho = document.querySelector('.vermelho');
const buttonAmarelo = document.querySelector('.amarelo');
const buttonVerde = document.querySelector('.verde');

buttonAuto.addEventListener('click', auto);
 
buttonVermelho.addEventListener('click',verm);
buttonAmarelo.addEventListener('click', amar);
buttonVerde.addEventListener('click', verd);

function verm() {
    clearInterval(interval)
    body.style.background = "red";
}

function amar() {
    clearInterval(interval)
    body.style.background = "yellow";
}

function verd() {
    clearInterval(interval)
    body.style.background = "green";
}

function auto() {
    let interval = setInterval(funcMudandoCor, 560);

    function funcMudandoCor(){
        if (body.style.background == 'red') {
            body.style.background = 'yellow'    
           
        } else if (body.style.background == 'yellow'){
            body.style.background = 'green'    

        } else {
            body.style.background = 'red'    
        }   
    }
    
}
