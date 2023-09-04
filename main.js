
function tocaSom (seletorAudio) {

    document.querySelector(seletorAudio).play();
}


// selecionando todos os .teclas e criando uma lista de referencia.
const listaDeTeclas = document.querySelectorAll('.tecla');




for ( let contador = 0; contador < listaDeTeclas.length; contador++){



    const tecla =  listaDeTeclas[contador];
    const instrumento = tecla.classList[1];
    const idAudio = `#som_${instrumento}`;

    tecla.onclick = function() {
        tocaSom(idAudio);
    }
    
    tecla.onkeydown = function(evento){


        if (evento.code == 'Space' || 'Enter'){
            tecla.classList.add('ativa');
        }

        
    }

    tecla.onkeyup = function(){
        tecla.classList.remove('ativa');
    }


    
}

